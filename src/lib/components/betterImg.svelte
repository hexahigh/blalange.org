<script>
  import { generateImageUrl } from "@imgproxy/imgproxy-node";

  

  // If the src is a relative URL turn it into an absolute URL
  if (!src.startsWith("http")) {
    if (typeof window !== "undefined") {
      src = window.location.origin + src;
    }
  }

  console.log(src);

  /**
   * @typedef {Object} Props
   * @property {any} class
   * @property {any} src
   * @property {any} alt
   * @property {string} [imgServer]
   */

  /** @type {Props} */
  let {
    class: clazz,
    src = $bindable(),
    alt,
    imgServer = "http://89.168.127.4:2266"
  } = $props();

  let signature = "empty";

  function generateUrls() {
    const sizes = [0, 500, 600, 700, 800, 900, 1000];
    let images = {
      webp: {},
      png: {},
      avif: {}
    };

    sizes.forEach((size) => {
      // Generate URL for webp format
      const webpUrl = generateImageUrl({
        endpoint: imgServer,
        url: {
          value: src,
          displayAs: "plain",
        },
        options: {
          format: "webp",
          width: size,
        },
      });
      images.webp[size] = webpUrl;

      // Generate URL for png format
      const pngUrl = generateImageUrl({
        endpoint: imgServer,
        url: {
          value: src,
          displayAs: "plain",
        },
        options: {
          format: "png",
          width: size,
        },
      });
      images.png[size] = pngUrl;

      const avifUrl = generateImageUrl({
        endpoint: imgServer,
        url: {
          value: src,
          displayAs: "plain",
        },
        options: {
          format: "avif",
          width: size,
        },
      })
      images.avif[size] = avifUrl
    });

    return images;
  }

  const images = generateUrls();
</script>

<picture>
  <source media="(max-width: 999px)" srcset={images.webp[1000]} type="image/webp" />
  <source media="(max-width: 999px)" srcset={images.avif[1000]} type="image/png" />
  <source media="(max-width: 999px)" srcset={images.png[1000]} type="image/png" />
  <source media="(min-width: 1000px)" srcset={images.webp[0]} type="image/webp" />
  <source media="(min-width: 1000px)" srcset={images.avif[0]} type="image/png" />
  <source media="(min-width: 1000px)" srcset={images.png[0]} type="image/png" />
  <img class={clazz} {src} {alt} />
</picture>
