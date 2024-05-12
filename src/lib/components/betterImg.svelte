<script>
  let clazz;
  export let src;
  export let alt;
  export { clazz as class };

  // If the src is an absolute URL or a relative URL turn it into an absolute URL
  if (!src.startsWith("http")) {
    if (typeof window !== "undefined") {
      src = window.location.origin + src;
    }
  }

  export let imgServer = "https://img.blalange.org";
</script>

<picture>
  <source
    media="(max-width: 999px)"
    srcset="{imgServer}/img?u={src}&f=webp&w=0.5&h=0.5"
    type="image/webp"
  />
  <source
    media="(min-width: 1000px)"
    srcset="{imgServer}/img?u={src}&f=webp"
    type="image/webp"
  />
  <source
    media="(min-width: 1000px)"
    srcset="{imgServer}/img?u={src}&f=png"
    type="image/png"
  />
  <img class={clazz} {src} {alt} />
</picture>
