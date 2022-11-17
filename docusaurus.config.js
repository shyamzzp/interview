const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Interview Preparation",
  tagline: "Interview Preparation for Computer Science Interviews",
  url: "https://shyamzzp.github.io/interview",
  baseUrl: "/interview/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "shyamzzp", // Usually your GitHub org/user name.
  projectName: "interview", // Usually your repo name.
  deploymentBranch: "main",
  trailingSlash: "false",
  themes: ["@docusaurus/theme-live-codeblock"],
  titleDelimiter: "•",

  scripts: [
    "https://kit.fontawesome.com/307bcbc229.js",
    "https://unpkg.com/driver.js/dist/driver.min.js",
    "https://unpkg.com/driver.js/dist/driver.min.css",
    "/static/scrolltotop.js",
  ],

  plugins: [
    [
      "@docusaurus/plugin-pwa",
      {
        debug: true,
        offlineModeActivationStrategies: [
          "appInstalled",
          "standalone",
          "queryString",
        ],
        pwaHead: [
          {
            tagName: "link",
            rel: "manifest",
            href: "/manifest.json", // your PWA manifest
          },
          {
            tagName: "meta",
            name: "theme-color",
            content: "#1877F2",
          },
        ],
      },
    ],
  ],

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // editUrl: "https://github.com/shyamzzp/interview/interview/edit/main/",
        },
        blog: {
          blogTitle: "Comp Labs Blog",
          blogSidebarTitle: "All Posts",
          blogSidebarCount: "ALL",
          sortPosts: "ascending",
          feedOptions: {
            type: "all",
            copyright: `Copyright © ${new Date().getFullYear()} Comp Labs. All Rights Reserved.`,
          },
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: "always",
          priority: 1.0,
        },
        gtag: {
          trackingID: "UA-203163469-1",
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      liveCodeBlock: {
        playgroundPosition: "bottom",
      },
      metadata: [{ name: "msapplication-TileColor", content: "#1877F2" }],
      metadata: [{ name: "theme-color", content: "#1877F2" }],
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      prism: {
        additionalLanguages: ["java", "markdown"],
      },
      image: "img/shyamzzp-logo.png",

      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 6,
      },
      navbar: {
        hideOnScroll: true,
        title: "📖 Inteview Preparation",
        items: [
          {
            to: "/docs/design-patterns/",
            label: "Design Patterns 🚧",
            position: "left",
          },
          // { to: "/docs/", label: "Docs 🚧", position: "left" },
          {
            type: "localeDropdown",
            position: "right",
          },
          {
            href: "https://github.com/shyamzzp/interview",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub Repository",
          },
          {
            type: "dropdown",
            label: "Data Structures",
            position: "left",
            items: [
              {
                label: "Arrays",
                to: "/docs/data-structures/arrays",
              },
              {
                label: "Bit Manipulation",
                to: "/docs/data-structures/bit-manipulation",
              },
              {
                label: "Bitwise Operations",
                to: "/docs/data-structures/bitwise-operations",
              },
              {
                label: "Comparators",
                to: "/docs/data-structures/comparators",
              },
              {
                label: "Complexity",
                to: "/docs/data-structures/complexity",
              },
              {
                label: "Deque",
                to: "/docs/data-structures/dequeue",
              },
              {
                label: "DFS",
                to: "/docs/data-structures/dfs",
              },
              {
                label: "Graph",
                to: "/docs/data-structures/graph",
              },
              {
                label: "Linked List",
                to: "/docs/data-structures/linked-list",
              },
              {
                label: "Map",
                to: "/docs/data-structures/map",
              },
              {
                label: "Set",
                to: "/docs/data-structures/set",
              },
              {
                label: "Matrix",
                to: "/docs/data-structures/matrix",
              },
              {
                label: "Math",
                to: "/docs/data-structures/math",
              },
              {
                label: "Priority Queue",
                to: "/docs/data-structures/priority-queue",
              },
              {
                label: "Tree",
                to: "/docs/data-structures/tree",
              },
              {
                label: "Trie",
                to: "/docs/data-structures/trie",
              },
            ],
          },
          {
            type: "dropdown",
            label: "Algorithms",
            position: "left",
            items: [
              {
                label: "Common Algorithms",
                to: "/docs/data-structures/algorithms",
              },
              {
                label: "Common Problems",
                to: "/docs/data-structures/common-problems",
              },
              {
                label: "Search Algorithms",
                to: "/docs/data-structures/search-algorithms",
              },
              {
                label: "Sorting Algorithms",
                to: "/docs/data-structures/sorting-algorithms",
              },
            ],
          },
          {
            type: "dropdown",
            label: "System Design",
            position: "left",
            items: [
              {
                label: "Instagram System Design",
                to: "/interview/docs/system-design/instagram",
              },
              {
                label: "Netflix System Design",
                to: "/interview/docs/system-design/netflix",
              },
              {
                label: "Pastebin System Design",
                to: "/interview/docs/system-design/pastebin",
              },
              {
                label: "Tinyurl System Design",
                to: "/interview/docs/system-design/tinyurl",
              },
              {
                label: "Top 10 System Design Overview",
                to: "/interview/docs/system-design/top-10-system-design",
              },
              {
                label: "Twitter System Design",
                to: "/interview/docs/system-design/twitter-system-design",
              },
              {
                label: "Uber/Lyft System Design",
                to: "/interview/docs/system-design/uber",
              },
              {
                label: "Location of Lockers System Design",
                to: "/interview/docs/system-design/location-lockers",
              },
            ],
          },
          {
            type: "dropdown",
            label: "Glossary",
            position: "left",
            items: [
              {
                label: "Data Structures Glossary",
                to: "/interview/docs/data-structures/ds-glossary",
              },
              {
                label: "System Design Glossary",
                to: "/interview/docs/system-design/glossary",
              },
            ],
          },
          {
            type: "dropdown",
            label: "Practice Sets",
            position: "left",
            items: [
              {
                label: "GeeksForGeeks - Microsoft (Set-1)",
                to: "/docs/problem-set/set-1",
              },
            ],
          },
          {
            type: "dropdown",
            label: "Tools & Modules",
            position: "left",
            items: [
              {
                label: "Webpack",
                to: "/docs/tools_modules/webpack",
              },
              {
                label: "Github Linguist",
                to: "/docs/tools_modules/github_linguist",
              },
            ],
          },
          {
            type: "dropdown",
            label: "Case Studies",
            position: "left",
            items: [
              {
                label: "Webpack",
                to: "/docs/case_studies/webpack",
              },
              {
                label: "Github Linguist",
                to: "/docs/case_studies/github_linguist",
              },
            ],
          },
        ],
      },
      prism: {
        theme: require("prism-react-renderer/themes/oceanicNext"),
        darkTheme: require("prism-react-renderer/themes/oceanicNext"),
        additionalLanguages: ["java"],
      },
    }),
};
