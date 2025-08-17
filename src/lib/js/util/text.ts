/**
 * Formats an array of names into a human-readable string.
 *
 * - Filters out any undefined or empty names from the input array.
 * - Joins the remaining names with commas.
 * - Replaces the last comma with an ampersand (&) for proper English formatting.
 *
 * @param names - An array of name strings to format.
 * @returns A formatted string of names separated by commas and an ampersand before the last name.
 *
 * @example
 * formatNames(['Alice', 'Bob', 'Charlie']); // "Alice, Bob & Charlie"
 * formatNames(['Alice', '', 'Charlie']);    // "Alice & Charlie"
 * formatNames(['Alice']);                   // "Alice"
 */
export function formatNames(names: string[]): string {
  return names
    .filter((name) => name) // Filter out any undefined or empty names
    .join(", ")
    .replace(/, ([^,]*)$/, " & $1");
}
