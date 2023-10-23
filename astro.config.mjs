import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import NetlifyCMS from "astro-netlify-cms";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    NetlifyCMS({
      config: {
        backend: {
          name: "github",
          repo: "Nealium104/skunch"
          branch: "main",
        },
        // media_library: {
        //   name: "cloudinary",
        //   config: {
        //     cloud_name: "dwbwyzsyp",
        //     api_key: 718734367618239,
        //     use_secure_url: true,
        //   },
        // },
        site_url: "https://skunch.netlify.app/",
        display_url: "https://skunch.netlify.app/",
        logo_url: "/images/logoSmall.png",
        collections: [
          {
            name: "posts",
            label: "Posts",
            folder: "src/pages/posts",
            create: true,
            fields: [
              { label: "Title", name: "title", widget: "string" },
              {
                label: "Photos",
                name: "photos",
                widget: "list",
                fields: [
                  { label: "Image", name: "image", widget: "image" },
                  { label: "Caption", name: "caption", widget: "text" },
                ],
              },
            ],
          },
        ],
      },
    }),
  ],
});
