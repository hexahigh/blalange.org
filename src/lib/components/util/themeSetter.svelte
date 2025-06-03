<script lang="ts">
    type Props = {
        defaultTheme?: string;
        defaultDarkTheme?: string;
    };
    const { defaultTheme, defaultDarkTheme }: Props = $props();
</script>

<svelte:head>
    {@html `<script>
        const theme = localStorage.getItem("theme")
        if (theme) {
            document.documentElement.setAttribute("data-theme", theme);
        } else {
            const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
            if (!prefersLight && ${defaultDarkTheme}) {
                document.documentElement.setAttribute("data-theme", ${defaultDarkTheme});
            } else if (defaultTheme) {
                document.documentElement.setAttribute("data-theme", ${defaultTheme});
            }
        }
    </script>`
}
</svelte:head>