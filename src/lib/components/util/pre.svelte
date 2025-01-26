<script lang="ts">
  type Props = {
    /**
     * An array of link objects for preloading.
     */
    links: {
      /**
       * The URL of the resource to preload.
       */
      url: string;
      
      /**
       * The type of preloading to perform.
       * 
       * - "dns-prefetch": Prefetches DNS records for the specified domain.
       * - "preconnect": Establishes early connections to the specified domain (DNS and TCP handshake).
       * - "prefetch": Fetches resources that might be needed later.
       */
      type: "dns-prefetch" | "preconnect" | "prefetch";
    }[];
  };

  let { links }: Props = $props();
</script>

<svelte:head>
  {#each links as link}
    <link rel={link.type} href={link.url} />
  {/each}
</svelte:head>
