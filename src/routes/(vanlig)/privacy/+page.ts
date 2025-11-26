import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import remarkGfm from "remark-gfm";
import rehypeStringify from "rehype-stringify";
import rehypeSlug from "rehype-slug";
import { unified } from "unified";

import ppEN from "$lib/md/pp_en.md?raw";

export async function load() {
  const mdStuff = unified().use(remarkParse).use(remarkRehype).use(remarkGfm).use(rehypeStringify).use(rehypeSlug);
  const content = await mdStuff.process(ppEN);

  return {
    content,
  };
}
