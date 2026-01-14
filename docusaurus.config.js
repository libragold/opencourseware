// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

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

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false, // Disable default docs, we use plugins for each course
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
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
        copyright: `Copyright © ${new Date().getFullYear()} Open Courseware. Built with Docusaurus.`,
      },
      prism: {
        additionalLanguages: ['cpp', 'java', 'python'],
      },
    }),

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'cse494s26',
        path: 'docs/cse494s26',
        routeBasePath: 'cse494',
        sidebarPath: './sidebars-cse494s26.js',
        sidebarCollapsible: true,
        sidebarCollapsed: false,
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
      },
    ],
  ],
};

export default config;
