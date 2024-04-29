/** @type {import('./$types').PageLoad} */

export function load({ params, url }) {

    const imageModules = import.meta.glob(
        "$lib/img/redirect-bg/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp}",
        {
          eager: true,
        }
      );
    
      const images = Object.values(imageModules).map((module) => module.default);
        
      // Get a random image
      const image =
        Object.values(images)[
          Math.floor(Math.random() * Object.values(images).length)
        ];

    return {
        //url: url.searchParams.get("u") || ""
        url: params.slug || "",
        noRedirect: url.searchParams.get("n") || false,
        image: image
    }
}
