import { bench, describe, beforeAll } from "vitest";
import { LoremIpsum } from "lorem-ipsum";
import { processMessageText } from "$root/src/lib/js/chat";

describe("chat", () => {
  const lorem = new LoremIpsum()

  bench("sequential processing", async () => {
      await processMessageText(lorem.generateWords(10));
  });
});
