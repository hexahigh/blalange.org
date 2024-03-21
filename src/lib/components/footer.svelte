<script>
    import config from "$lib/json/config.json";
    let commitHash = __COMMIT_HASH__;

    function getLatestVersion() {
        const latestVersion = config.versions[config.versions.length - 1];
        return `${latestVersion.id}.${latestVersion.name}`;
    }

    let latestVersion = getLatestVersion();
</script>

<footer class="w-full text-center border-t border-grey p-4 pin-b bg-gray-200">
    <div class="flex justify-center mb-4">
        <a href="https://github.com/hexahigh/kukfest" class="hover:underline">Kildekode</a>
        <a href="mailto:webmaster@blalange.org" class="hover:underline ml-4">Epost</a>
    </div>
    <p>Versjon {latestVersion} - {commitHash}</p>
    <p>{new Date().getFullYear()} © Blålange Festivalen. All rights reserved.</p>
</footer>