import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import remarkGfm from "remark-gfm";
import rehypeStringify from "rehype-stringify";
import { unified } from "unified";

import ppEN from "$lib/md/pp_en.md?raw";

export async function load() {
  let mdStuff = unified().use(remarkParse).use(remarkRehype).use(remarkGfm).use(rehypeStringify);

  let translations: any = {};

  translations = {
    en: await mdStuff.process(ppEN),
    default: await mdStuff.process(ppEN),
  };

  return {
    translations,
  };
}
