import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import remarkGfm from "remark-gfm";
import rehypeStringify from "rehype-stringify";
import { unified } from "unified";

import tosEN from "$lib/md/tos_en.md?raw";
import tosNO from "$lib/md/tos_no.md?raw";

export async function load() {
  let mdStuff = unified().use(remarkParse).use(remarkRehype).use(remarkGfm).use(rehypeStringify);

  let translations: any = {};

  translations = {
    en: await mdStuff.process(tosEN),
    no: await mdStuff.process(tosNO),
    default: await mdStuff.process(tosNO),
  };

  return {
    translations,
  };
}
