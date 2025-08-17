#!/usr/bin/env ts-node

import fs from "fs";
import path from "path";
import openapiTS, { astToString, OpenAPI3 } from "openapi-typescript";
import {
  createDirectus,
  rest,
  staticToken,
  readOpenApiSpec,
  OpenApiSpecOutput,
  DirectusClient,
  RestClient,
  StaticTokenClient,
} from "@directus/sdk";
import { Command } from "commander";

interface OpenAPISpec {
  components?: {
    schemas?: Record<string, SchemaObject>;
  };
  [k: string]: any;
}

interface SchemaObject {
  type?: string;
  properties?: Record<string, PropertyObject>;
  required?: string[];
  [k: string]: any;
}

interface PropertyObject {
  nullable?: boolean;
  type?: string | string[];
  [k: string]: any;
}

// helper: “is this schema prop nullable?”
function isNullable(prop: PropertyObject): boolean {
  if (prop.nullable === true) return true;
  if (Array.isArray(prop.type) && prop.type.includes("null")) return true;
  return false;
}

async function downloadSpec(apiUrl: string, apiKey?: string): Promise<OpenApiSpecOutput> {
  let client:
    | (DirectusClient<any> & RestClient<any>)
    | (DirectusClient<any> & RestClient<any> & StaticTokenClient<any>);
  if (apiKey) {
    console.log("Using static token for Directus API");
    client = createDirectus(apiUrl).with(rest()).with(staticToken(apiKey));
  } else {
    console.log("Using Directus API without authentication");
    client = createDirectus(apiUrl).with(rest());
  }

  const result = await client.request(readOpenApiSpec());
  return result;
}

async function main() {
  const program = new Command();
  program
    .option("--download", "Download OpenAPI spec from Directus")
    .option("--key <key>", "Directus API static token")
    .option("--api <url>", "Directus API URL", "https://db.blalange.org")
    .option(
      "--ignore-refs",
      "Remove unresolved $ref/oneOf/anyOf/allOf and replace with unknown. Useful for when generating types for a public API."
    )
    .option("--type <type>", "Preset (all public user)")
    .option("--in <file>", "Input OpenAPI JSON file")
    .option("--out <file>", "Output TypeScript file")
    .option("--dry", "Dry run (do not write output file)")
    .parse(process.argv);

  const opts = program.opts();

  if (!opts.out && !opts.type) {
    console.error("Error: --out <file> is required or --type must be specified.");
    program.help();
    process.exit(1);
  }

  if (opts.out && opts.type) {
    console.error("Error: --out and --type cannot be used together.");
    program.help();
    process.exit(1);
  }

  if (opts.type === "all") {
    opts.out = "src/lib/js/types/directus-all.ts";
  } else if (opts.type === "user") {
    opts.out = "src/lib/js/types/directus-user.ts";
  } else {
    opts.out = "src/lib/js/types/directus-public.ts";
  }

  if (!["all", "public", "user"].includes(opts.type)) {
    console.error("Error: --type must be one of: all, public, user");
    program.help();
    process.exit(1);
  }

  let spec: OpenAPISpec;

  if (opts.download) {
    if (!opts.api) {
      console.error("Error: --api is required with --download.");
      process.exit(1);
    }
    spec = await downloadSpec(opts.api, opts.key);
  } else {
    if (!opts.in) {
      console.error("Error: --in <file> is required if not using --download.");
      process.exit(1);
    }
    const raw = fs.readFileSync(path.resolve(opts.in), "utf-8");
    spec = JSON.parse(raw) as OpenAPISpec;
  }

  const schemas = spec.components?.schemas;
  if (!schemas) {
    console.error("No components.schemas in your spec.");
    process.exit(2);
  }

  for (const [name, schema] of Object.entries(schemas)) {
    if (schema.type !== "object" || !schema.properties) continue;
    schema.required = Array.isArray(schema.required) ? schema.required : [];

    for (const [prop, propSchema] of Object.entries(schema.properties)) {
      if (isNullable(propSchema)) continue;
      if (!schema.required.includes(prop)) {
        console.log(`🛠️  Marking "${prop}" required in schema "${name}"`);
        if (!opts.dry) schema.required.push(prop);
      }
    }
  }

  if (opts.ignoreRefs) {
    function fixRefs(obj: any, schemas: Record<string, any>) {
      if (Array.isArray(obj)) {
        for (let i = 0; i < obj.length; i++) {
          obj[i] = fixRefs(obj[i], schemas);
        }
        return obj;
      }
      if (obj && typeof obj === "object") {
        // Handle $ref
        if (obj.$ref && typeof obj.$ref === "string") {
          const match = obj.$ref.match(/^#\/components\/schemas\/([^/]+)$/);
          if (match) {
            const refName = match[1];
            if (!schemas[refName]) {
              console.warn(`⚠️  Removing unresolved $ref: ${obj.$ref}`);
              return { type: "unknown" };
            }
          }
        }
        // Handle oneOf/anyOf/allOf
        for (const key of ["oneOf", "anyOf", "allOf"]) {
          if (Array.isArray(obj[key])) {
            obj[key] = obj[key].map((item: any) => fixRefs(item, schemas));
          }
        }
        // Recurse into properties and items
        for (const k of Object.keys(obj)) {
          if (typeof obj[k] === "object") {
            obj[k] = fixRefs(obj[k], schemas);
          }
        }
      }
      return obj;
    }
    for (const schema of Object.values(schemas)) {
      fixRefs(schema, schemas);
    }
  }

  const ast = await openapiTS(spec as OpenAPI3, { rootTypes: true });
  const specString = astToString(ast);

  let outString = `// AUTOGENERATED DO NOT EDIT!\n`;
  switch (opts.type) {
    case "all":
      outString += `// This file contains all Directus types, including admin and user types. Many of these are not accessible through the public api or by users.\n`;
      break;
    case "user":
      outString += `// This file contains Directus types that are accessible to users through the API.\n`;
      break;
    case "public":
      outString += `// This file contains Directus types that are accessible to the public API.\n`;
      break;
  }
  outString = `${outString}${specString}`;

  if (!opts.dry) {
    fs.writeFileSync(opts.out, outString, "utf-8");
    console.log(`✅ Wrote typescript spec to ${opts.out}`);
  } else {
    console.log("🔍 Dry-run only; no file written.");
  }
}

main();
