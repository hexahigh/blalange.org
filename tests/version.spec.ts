import { expect, test } from 'vitest'
import version from '$lib/json/version.json'

test('no version overlap', async () => {
    // Get all version numbers
    const allVersions = version.versions.map(version => version.id);

    // Get unique version numbers
    const uniqueVersions = new Set(allVersions);

    // Check if all versions are unique
    expect(allVersions.length).toBe(uniqueVersions.size);
})
