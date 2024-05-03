export default async function verifyMessage(message: string): Promise<boolean> {

    // Check if message contains only whitespace
    if (message.trim() === "") {
        return false;
    }

    // Check if message contains only numbers
    if (/^\d+$/.test(message)) {
        return false;
    }

    // Check if message contains over 50% whitespace or tabs
    const whitespaceRegex = /[\s\t]/g;
    const matches = message.match(whitespaceRegex);
    const whitespaceCount = matches ? matches.length : 0;
    const totalLength = message.length;
    if (whitespaceCount / totalLength > 0.5) {
        return false;
    }

    return true;
}