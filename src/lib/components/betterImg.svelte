<script>
  let clazz;
  export let src;
  export let alt;
  export let width;
  export let height;
  export { clazz as class };

  let imgServer = "https://img.blalange.org";

  // Calculate image sizes to use
  let sizes = {
    small: {
        w: width / 4,
        h: height / 4,
    },
    medium: {
        w: width / 2,
        h: height / 2,
    },
    large: {
        w: width,
        h: height,
    },
  };
</script>

<picture>
  <source
    media="(max-width: 999px)"
    srcset="{imgServer}/img?u={src}&f=webp&w={sizes.medium.w}&h={sizes.medium.h}"
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
  <img class={clazz} {src} {alt} {width} {height} />
</picture>
