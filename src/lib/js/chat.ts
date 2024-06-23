import { toRedirect } from "./redirect";
import Fuse from "fuse.js";
import { words as badWords } from "./badwords";
import DOMPurify from "dompurify";
import { marked } from "marked";

let options = {
  badWord: {
    contains: true, // VERY SLOW (up to 20x slower), should be disabled if the list is big
  },
  cleanHtml: {
    replacementString: "",
    regexes: [
      /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, // Script
      /<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, // Style
      /<link\b[^<]*(?:(?!<\/link>)<[^<]*)*<\/link>/gi, // Link
      /<meta\b[^<]*(?:(?!<\/meta>)<[^<]*)*<\/meta>/gi, // Meta
      /<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, // Iframe
      /<frame\b[^<]*(?:(?!<\/frame>)<[^<]*)*<\/frame>/gi, // Frame
      /<frameset\b[^<]*(?:(?!<\/frameset>)<[^<]*)*<\/frameset>/gi, // Frameset
      /<embed\b[^<]*(?:(?!<\/embed>)<[^<]*)*<\/embed>/gi, // Embed
      /<object\b[^<]*(?:(?!<\/object>)<[^<]*)*<\/object>/gi, // Object
      /<applet\b[^<]*(?:(?!<\/applet>)<[^<]*)*<\/applet>/gi, // Applet
      /<form\b[^<]*(?:(?!<\/form>)<[^<]*)*<\/form>/gi, // Form
      /<input\b[^<]*(?:(?!<\/input>)<[^<]*)*<\/input>/gi, // Input
      /<textarea\b[^<]*(?:(?!<\/textarea>)<[^<]*)*<\/textarea>/gi, // Textarea
      /<base\b[^<]*(?:(?!<\/base>)<[^<]*)*<\/base>/gi, // Base
      /<eventsource\b[^<]*(?:(?!<\/eventsource>)<[^<]*)*<\/eventsource>/gi, // Eventsource
    ],
    useDOMPurify: true,
    fallback: true, // Fallback to custom method if DOMPurify is not supported
    DOMPurifySettings: {
      FORBID_TAGS: ["img", "svg"]
    } as DOMPurify.Config
  },
};

export async function verifyMessage(
  message: string
): Promise<{ valid: boolean; error?: string }> {
  // Check if message contains only whitespace
  if (message.trim() === "") {
    return { valid: false, error: "Message cannot be empty." };
  }

  // Check if message contains only numbers
  if (/^\d+$/.test(message)) {
    return { valid: false, error: "Message cannot contain only numbers." };
  }

  // Check if message contains over 50% whitespace or tabs
  const whitespaceRegex = /[\s\t]/g;
  const matches = message.match(whitespaceRegex);
  const whitespaceCount = matches ? matches.length : 0;
  const totalLength = message.length;
  if (whitespaceCount / totalLength > 0.5) {
    return {
      valid: false,
      error: "Message cannot contain over 50% whitespace or tabs.",
    };
  }

  if (message.length > 2048) {
    return {
      valid: false,
      error: "Message cannot be longer than 2048 characters.",
    };
  }

  if (message.length < 2) {
    return {
      valid: false,
      error: "Message cannot be shorter than 2 characters.",
    };
  }

  return { valid: true };
}

export async function verifyName(
  name: string
): Promise<{ valid: boolean; error?: string }> {
  // Check if name is empty
  if (name.trim() === "") {
    return { valid: false, error: "Name cannot be empty." };
  }

  if (name.length > 32) {
    return { valid: false, error: "Name cannot be longer than 32 characters." };
  }

  if (name.length <= 3) {
    return { valid: false, error: "Name cannot be shorter than 3 characters." };
  }

  return { valid: true };
}

export async function processMessageText(text: string): Promise<string> {
  let processedText = text;

  // We need to clean the html first, because we add html to the message later
  processedText = await cleanHtml(processedText);

  // Check each word in the message
  const words = processedText.split(" ");
  for (let i = 0; i < words.length; i++) {
    if (await isBadWord(words[i])) {
      words[i] = `<span class="blocked-word">${words[i]}</span>`;
    }
  }
  processedText = words.join(" ");

  // Convert markdown to html
  processedText = await markdownToHtml(processedText);

  return processedText;
}

/**
 * Checks if a given word is considered bad after attempting common obfuscation techniques.
 * @param {string} word - The word to check against the list of bad words.
 * @returns {boolean} True if the word is considered bad, false otherwise.
 */
async function isBadWord(word: string): Promise<boolean> {
  // Convert the word to lowercase to ensure case-insensitive checking.
  word = word.toLowerCase();

  // Define common character replacements used in obfuscation attempts.
  const replacements = [
    { search: "i", replaceWith: "l" },
    { search: "!", replaceWith: "l" },
    { search: "$", replaceWith: "s" },
    { search: "a", replaceWith: "@" },
    { search: "a", replaceWith: "4" },
    { search: "e", replaceWith: "3" },
    { search: "o", replaceWith: "0" },
    { search: "s", replaceWith: "5" },
    { search: "t", replaceWith: "7" },
  ];

  let checkWord;
  if (options.badWord.contains) {
    checkWord = (wordToCheck: string): boolean => {
      return badWords.some((badWord) => wordToCheck.includes(badWord));
    };
  } else {
    checkWord = (wordToCheck: string): boolean =>
      badWords.includes(wordToCheck);
  }

  // Iterate through each replacement rule.
  for (const { search, replaceWith } of replacements) {
    // If the original word isn't bad, apply the current replacement and check again.
    if (!checkWord(word)) {
      let modifiedWord = word.replaceAll(search, replaceWith);
      // If the modified word is found in the badWords list, it's considered bad.
      if (checkWord(modifiedWord)) {
        return true;
      } else {
        // Try reversing the replacement
        modifiedWord = word.replaceAll(replaceWith, search);
        // If the modified word is found in the badWords list, it's considered bad.
        if (checkWord(modifiedWord)) {
          return true;
        }
      }
    }
  }

  // Finally, check if the original word itself is in the badWords list.
  return checkWord(word);
}

async function cleanHtml(text: string): Promise<string> {
  if (
    !options.cleanHtml.useDOMPurify ||
    (!DOMPurify.isSupported && options.cleanHtml.fallback)
  ) {
    for (const regexes of options.cleanHtml.regexes) {
      text = text.replace(regexes, options.cleanHtml.replacementString);
    }
  } else {
    text = DOMPurify.sanitize(text, options.cleanHtml.DOMPurifySettings) as string;
  }

  return text;
}

async function markdownToHtml(text: string): Promise<string> {
  return marked.parse(text);
}
