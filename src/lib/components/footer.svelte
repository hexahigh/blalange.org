<script>
    import config from "$lib/json/config.json";
    import Radio from "$lib/components/radio.svelte";
    let commitHash = __COMMIT_HASH__;

    function getLatestVersion() {
        const latestVersion = config.versions[config.versions.length - 1];
        return latestVersion;
    }
</script>

<footer class="w-full text-center border-t border-grey p-4 bg-gray-200 text-black dark:bg-gray-800 dark:text-white">
    <div class="md:flex md:justify-center md:items-center">
        <div>
            <div class="flex justify-center mb-4">
                <a href="https://github.com/hexahigh/blalange.org" class="hover:underline">Kildekode</a>
                <a href="mailto:webmaster@blalange.org" class="hover:underline ml-4">Epost</a>
            </div>
            <p>Versjon {getLatestVersion().id}.{commitHash} - {getLatestVersion().name}</p>
            <p>{new Date().getFullYear()} © Blålange Festivalen. All rights reserved.</p>
            <p>The content of this project itself is licensed under the <a class="hover:underline" href="https://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International license</a>, and the underlying source code used to format and display that content is licensed under the <a class="hover:underline" href="https://mozilla.org/MPL/2.0/">Mozilla Public License v2.0</a>.</p>
        </div>
    </div>
</footer>