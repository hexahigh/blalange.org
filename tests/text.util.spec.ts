import { expect, test } from 'vitest'
import { formatNames } from "$root/src/lib/js/util/text";

test('proper name formatting', () => {
  expect(formatNames(['Alice', 'Bob', 'Charlie'])).toBe('Alice, Bob & Charlie');
  expect(formatNames(['Alice', '', 'Charlie'])).toBe('Alice & Charlie');
  expect(formatNames(['Alice'])).toBe('Alice');
  expect(formatNames(['', ''])).toBe('');
  expect(formatNames([])).toBe('');
});