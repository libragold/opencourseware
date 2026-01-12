// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Open Courseware',
  tagline: 'Open educational resources for competitive programming and algorithms',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-site.com',
  // Set the /<baseUrl>/ path of your site
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'your-org',
  projectName: 'opencourseware',

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is in Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false, // Disable default docs, we use plugins for each course
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css',
      type: 'text/css',
      integrity: 'sha384-n8MVd4RsNIU0tAv4ct0nTaAbDJwPJzDEaqSD1odI+WdtXRGWt2kTvGFasHpSy3SV',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Open Courseware',
        logo: {
          alt: 'Open Courseware Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'cse494s26Sidebar',
            docsPluginId: 'cse494s26',
            position: 'left',
            label: 'CSE 494',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Courses',
            items: [
              {
                label: 'CSE 494 - Competitive Programming',
                to: '/courses/cse494s26',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Open Courseware. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['cpp', 'java', 'python'],
      },
    }),

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'cse494s26',
        path: 'docs/cse494s26',
        routeBasePath: 'courses/cse494s26',
        sidebarPath: require.resolve('./sidebars-cse494s26.js'),
        versions: {
          current: {
            label: 'Spring 2026',
            path: 'current',
          },
        },
        // Enable versioning dropdown
        includeCurrentVersion: true,
        remarkPlugins: [require('remark-math')],
        rehypePlugins: [require('rehype-katex')],
      },
    ],
  ],
};

module.exports = config;
