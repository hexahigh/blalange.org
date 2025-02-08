<script lang="ts">
  import { join as joinUrl } from "$lib/js/util/url";
  export let data: ImageBlockData;
  export let fileDomain: string;
</script>

<img src={joinUrl(fileDomain, data.file.url)} alt={data.caption} width={data.file.width} height={data.file.height} />
