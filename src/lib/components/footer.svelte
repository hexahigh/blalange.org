<script>
    import config from "$lib/json/config.json";
    let commitHash = __COMMIT_HASH__;
</script>

<footer class="w-full text-center border-t border-grey p-4 pin-b bg-gray-200">
    <div class="flex justify-center mb-4">
        <a href="https://github.com/hexahigh/kukfest" class="hover:underline">Kildekode</a>
        <a href="mailto:webmaster@blalange.org" class="hover:underline ml-4">Epost</a>
    </div>
    <p>Versjon {config.version.id}.{commitHash} - {config.version.name}</p>
    <p>{new Date().getFullYear()} © Blålange Festivalen. All rights reserved.</p>
</footer>