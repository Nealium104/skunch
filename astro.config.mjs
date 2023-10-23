import { defineConfig } from "astro/config";
import NetlifyCMS from "astro-netlify-cms";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    NetlifyCMS({
      config: {
        backend: {
          name: "git-gateway",
          branch: "main", // Branch to update (optional; defaults to master)
        },
        media_library: {
          name: "cloudinary",
          config: {
            cloud_name: "dwbwyzsyp", // Replace with your Cloudinary cloud name
            api_key: 718734367618239,
            use_secure_url: true,
          },
        },
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
