<script lang="ts">
  export let data: DataType;

  import PocketBase from "pocketbase";

  import { type DataType } from "./types";
  import Article from "$lib/components/article.svelte";

  const pb = new PocketBase("https://db.080609.xyz");

  let name = data.article.name;
  let date = data.article.date;
  let authors = data.authors;
  let description = data.article.description
  let text = data.article.text
  let image = data.imgUrl
</script>

<Article title={name} description={description} date={date} author={authors} url={data.article.artId} img={image} >
  {@html text}
</Article>