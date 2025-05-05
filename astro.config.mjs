import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://suzza.dev",
  integrations: [
    starlight({
      title: "Site with sitemap",
      favicon: "/favicon.ico",
      title: "Docs with Tailwind",
      customCss: [
        // Path to your Tailwind base styles:
        "./src/styles/tailwind.css",
      ],
      head: [
        // Example: add Fathom analytics script tag.
        {
          tag: "script",
          attrs: {
            src: "https://cloud.umami.is/script.js",
            "data-website-id": "e683bbb4-148b-4c40-aa16-cce1affe1d4b",
            defer: true,
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:image",
            content: "/og-image-suzza-dev.png",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "twitter:image",
            content: "/og-image-suzza-dev.png",
          },
        },
      ],
      title: "Newbie-ish Guide to Astro",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/susansilver",
        },
        {
          icon: "mastodon",
          label: "GitHub",
          href: "https://mathstodon.xyz/@suzza",
        },
      ],
      sidebar: [
        {
          label: "Getting Started",
          collapsed: true,
          items: [
            {
              label: "Introduction to Astro",
              slug: "introduction/astro",
            },
            // A nested group of links.
          ],
        },
        {
          label: "Chapter One",
          collapsed: true,
          items: [
            {
              label: "Why I Left WordPress",
              slug: "one/wordpress",
            },
            // A nested group of links.
          ],
        },
        {
          label: "Chapter Two",
          collapsed: true,
          items: [
            {
              label: "Choosing Themes",
              slug: "two/themes",
            },
            // A nested group of links.
          ],
        },
        {
          label: "Chapter Three",
          collapsed: true,
          items: [
            {
              label: "Using VS Code",
              slug: "three/code-editor",
            },
            // A nested group of links.
          ],
        },
        {
          label: "Chapter Four",
          collapsed: true,
          items: [
            {
              label: "Adding Icons",
              slug: "four/icons",
            },
            // A nested group of links.
          ],
        },
        {
          label: "Chapter Five",
          collapsed: true,
          items: [
            {
              label: "Adding Fonts",
              slug: "five/fonts",
            },
            // A nested group of links.
          ],
        },
        {
          label: "Chapter Six",
          collapsed: true,
          items: [
            {
              label: "Navbar Issues",
              slug: "six/navbar",
            },
            // A nested group of links.
          ],
        },
        {
          label: "Chapter Seven",
          collapsed: true,
          items: [
            {
              label: "Non-Updating Code",
              slug: "seven/code",
            },
            // A nested group of links.
          ],
        },
        {
          label: "Chapter Eight",
          collapsed: true,
          items: [
            {
              label: "URL Routing",
              slug: "eight/routing",
            },
            // A nested group of links.
          ],
        },
        {
          label: "Chapter Nine",
          collapsed: true,
          items: [
            {
              label: "Creating Tag Archives",
              slug: "nine/tags",
            },
            // A nested group of links.
          ],
        },
        {
          label: "Chapter Ten",
          collapsed: true,
          items: [
            {
              label: "Redirects Using Netlify",
              slug: "ten/redirects",
            },
            // A nested group of links.
          ],
        },
        {
          label: "Chapter Eleven",
          collapsed: true,
          items: [
            {
              label: "Table of Contents",
              slug: "eleven/table-of-contents",
            },
            // A nested group of links.
          ],
        },
        {
          label: "Explainers",
          collapsed: true,
          items: [
            {
              label: "Introduction",
              slug: "explainers/introduction",
            },
            {
              label: "TypeScript",
              slug: "explainers/typescript",
            },
            {
              label: "Creating Flexible Components",
              slug: "explainers/flexible-components",
            },
            {
              label: "Using Reference",
              slug: "explainers/reference",
            },
            {
              label: "Custom CSS in Tailwind",
              slug: "explainers/custom-css",
            },
            {
              label: "All About getCollection and collectionEntry",
              slug: "explainers/getcollection",
            },
            // A nested group of links.
          ],
        },
        {
          label: "Things to Remember",
          collapsed: true,
          items: [
            {
              label: "Recommended Integrations",
              slug: "remember/integrations",
            },
            {
              label: "Check for Updates",
              slug: "remember/updates",
            },
            {
              label: "Show Your Support",
              slug: "remember/support",
            },
            {
              label: "Final Thoughts on Astro",
              slug: "remember/final-thoughts",
            },
            {
              label: "Thank You & Further Resources",
              slug: "remember/thank-you",
            },
            // A nested group of links.
          ],
        },
        {
          label: "Addendum",
          collapsed: true,
          items: [
            {
              label: "Tailwind CSS",
              slug: "addendum/tailwind",
            },
            // A nested group of links.
          ],
        },
      ],
    }),
    tailwind({
      // Disable the default base styles:
      applyBaseStyles: false,
    }),
  ],
});
