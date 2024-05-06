import { toRedirect } from "./redirect";

export async function verifyMessage(message: string): Promise<{ valid: boolean; error?: string }> {
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
        return { valid: false, error: "Your message contains over 50% whitespace or tabs." };
    }

    if (message.length > 1024) {
        return { valid: false, error: "Message cannot be longer than 1024 characters." };
    }

    if (message.length < 2) {
        return { valid: false, error: "Message cannot be shorter than 2 characters." };
    }

    // Check if the message contains only one letter, number or word
    if (/^[a-zA-Z0-9]+$/.test(message) && message.split(" ").length === 1) {
        return { valid: false, error: "Message cannot contain only one letter, number or word." };
    }

    return { valid: true };
}

export async function verifyName(name: string): Promise<{ valid: boolean; error?: string }> {
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

export function processMessageText(text: string) {
    // Regular expression to match URLs
    const urlRegex = /(https?:\/\/[^\s]+)/g;

    // Replace URLs with anchor tags
    const processedText = text.replace(urlRegex, function(url) {
      return `<a href="${toRedirect(url)}" target="_blank" rel="noopener noreferrer">${url}</a>`;
    });

    return processedText;
 }