/*
 * AUTOGENERATED - DON'T EDIT
 * Your edits in this file will be overwritten in the next build!
 * Modify the docusaurus.config.js file at your site's root instead.
 */
export default {
  "title": "Interview Preparation",
  "tagline": "Interview Preparation for Computer Science Interviews",
  "url": "https://shyamzzp.github.io/interview",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/favicon.ico",
  "organizationName": "Comp-Labs",
  "projectName": "interview",
  "deploymentBranch": "main",
  "trailingSlash": false,
  "themes": [
    "@docusaurus/theme-live-codeblock"
  ],
  "titleDelimiter": "•",
  "scripts": [
    "https://kit.fontawesome.com/307bcbc229.js",
    "/static/scrolltotop.js"
  ],
  "plugins": [
    [
      "@docusaurus/plugin-pwa",
      {
        "debug": true,
        "offlineModeActivationStrategies": [
          "appInstalled",
          "standalone",
          "queryString"
        ],
        "pwaHead": [
          {
            "tagName": "link",
            "rel": "manifest",
            "href": "/manifest.json"
          },
          {
            "tagName": "meta",
            "name": "theme-color",
            "content": "#1877F2"
          }
        ]
      }
    ]
  ],
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "C:\\Users\\shyam\\Desktop\\comp-labs-website-main\\comp-labs-website-main\\sidebars.js"
        },
        "blog": {
          "blogTitle": "Comp Labs Blog",
          "blogSidebarTitle": "All Posts",
          "blogSidebarCount": "ALL",
          "sortPosts": "ascending",
          "feedOptions": {
            "type": "all",
            "copyright": "Copyright © 2022 Comp Labs. All Rights Reserved."
          }
        },
        "theme": {
          "customCss": "C:\\Users\\shyam\\Desktop\\comp-labs-website-main\\comp-labs-website-main\\src\\css\\custom.css"
        },
        "sitemap": {
          "changefreq": "always",
          "priority": 1
        },
        "gtag": {
          "trackingID": "UA-203163469-1",
          "anonymizeIP": true
        }
      }
    ]
  ],
  "themeConfig": {
    "liveCodeBlock": {
      "playgroundPosition": "bottom"
    },
    "metadata": [
      {
        "name": "theme-color",
        "content": "#1877F2"
      }
    ],
    "docs": {
      "sidebar": {
        "hideable": true,
        "autoCollapseCategories": true
      },
      "versionPersistence": "localStorage"
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": true
    },
    "prism": {
      "theme": {
        "plain": {
          "color": "#393A34",
          "backgroundColor": "#f6f8fa"
        },
        "styles": [
          {
            "types": [
              "comment",
              "prolog",
              "doctype",
              "cdata"
            ],
            "style": {
              "color": "#999988",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "opacity": 0.7
            }
          },
          {
            "types": [
              "string",
              "attr-value"
            ],
            "style": {
              "color": "#e3116c"
            }
          },
          {
            "types": [
              "punctuation",
              "operator"
            ],
            "style": {
              "color": "#393A34"
            }
          },
          {
            "types": [
              "entity",
              "url",
              "symbol",
              "number",
              "boolean",
              "variable",
              "constant",
              "property",
              "regex",
              "inserted"
            ],
            "style": {
              "color": "#36acaa"
            }
          },
          {
            "types": [
              "atrule",
              "keyword",
              "attr-name",
              "selector"
            ],
            "style": {
              "color": "#00a4db"
            }
          },
          {
            "types": [
              "function",
              "deleted",
              "tag"
            ],
            "style": {
              "color": "#d73a49"
            }
          },
          {
            "types": [
              "function-variable"
            ],
            "style": {
              "color": "#6f42c1"
            }
          },
          {
            "types": [
              "tag",
              "selector",
              "keyword"
            ],
            "style": {
              "color": "#00009f"
            }
          }
        ]
      },
      "darkTheme": {
        "plain": {
          "color": "#F8F8F2",
          "backgroundColor": "#282A36"
        },
        "styles": [
          {
            "types": [
              "prolog",
              "constant",
              "builtin"
            ],
            "style": {
              "color": "rgb(189, 147, 249)"
            }
          },
          {
            "types": [
              "inserted",
              "function"
            ],
            "style": {
              "color": "rgb(80, 250, 123)"
            }
          },
          {
            "types": [
              "deleted"
            ],
            "style": {
              "color": "rgb(255, 85, 85)"
            }
          },
          {
            "types": [
              "changed"
            ],
            "style": {
              "color": "rgb(255, 184, 108)"
            }
          },
          {
            "types": [
              "punctuation",
              "symbol"
            ],
            "style": {
              "color": "rgb(248, 248, 242)"
            }
          },
          {
            "types": [
              "string",
              "char",
              "tag",
              "selector"
            ],
            "style": {
              "color": "rgb(255, 121, 198)"
            }
          },
          {
            "types": [
              "keyword",
              "variable"
            ],
            "style": {
              "color": "rgb(189, 147, 249)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(98, 114, 164)"
            }
          },
          {
            "types": [
              "attr-name"
            ],
            "style": {
              "color": "rgb(241, 250, 140)"
            }
          }
        ]
      },
      "additionalLanguages": [],
      "magicComments": [
        {
          "className": "theme-code-block-highlighted-line",
          "line": "highlight-next-line",
          "block": {
            "start": "highlight-start",
            "end": "highlight-end"
          }
        }
      ]
    },
    "image": "img/comp-labs-logo.png",
    "tableOfContents": {
      "minHeadingLevel": 2,
      "maxHeadingLevel": 6
    },
    "navbar": {
      "hideOnScroll": true,
      "title": "📖 Inteview Preparation",
      "items": [
        {
          "to": "/docs/design-patterns/",
          "label": "Design Patterns 🚧",
          "position": "left"
        },
        {
          "type": "localeDropdown",
          "position": "right",
          "dropdownItemsBefore": [],
          "dropdownItemsAfter": []
        },
        {
          "href": "https://github.com/shyamzzp/interview",
          "position": "right",
          "className": "header-github-link",
          "aria-label": "GitHub Repository"
        }
      ]
    }
  },
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "staticDirectories": [
    "static"
  ],
  "customFields": {},
  "stylesheets": [],
  "clientModules": [],
  "noIndex": false
};
