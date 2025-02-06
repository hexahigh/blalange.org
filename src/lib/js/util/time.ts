/**
 * Gets the current timestamp in the PostgreSQL `timestamptz` format.
 * This is in the format `YYYY-MM-DD HH:MM:SS.MMM (+/-)HH:MM`, where:
 * - `YYYY-MM-DD` is the date
 * - `HH:MM:SS` is the time in the browser's local timezone
 * - `MMM` is the milliseconds
 * - `(+/-)HH:MM` is the timezone offset'
 * @param date The date to get the timestamp for. Defaults to the current date
 * @returns The current timestamp in the PostgreSQL `timestamptz` format
 */
export function getPostgresTimestamptz(date = new Date()): string {
  // Date components
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  // Time components
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  const milliseconds = String(date.getMilliseconds()).padStart(3, "0");

  // Timezone offset components
  const offsetMinutes = date.getTimezoneOffset();
  const sign = offsetMinutes > 0 ? "-" : "+";
  const absOffsetMinutes = Math.abs(offsetMinutes);
  const offsetHours = String(Math.floor(absOffsetMinutes / 60)).padStart(2, "0");
  const offsetRemainder = String(absOffsetMinutes % 60).padStart(2, "0");

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}.${milliseconds}${sign}${offsetHours}:${offsetRemainder}`;
}

/**
 * Gets the current timestamp in the PostgreSQL `timestamp` format.
 * This is in the format `YYYY-MM-DD HH:MM:SS.MMM`, where:
 * - `YYYY-MM-DD` is the date
 * - `HH:MM:SS` is the time in the browser's local timezone
 * - `MMM` is the milliseconds
 * @param date The date to get the timestamp for. Defaults to the current date
 * @returns The current timestamp in the PostgreSQL `timestamp` format
 */
export function getPostgresTimestamp(date = new Date()): string {
  // Date components
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based in JS
  const day = String(date.getDate()).padStart(2, "0");

  // Time components
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  const milliseconds = String(date.getMilliseconds()).padStart(3, "0");

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}.${milliseconds}`;
}
