// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { courseCatalog } from './src/data/courseCatalog.js';

const coursePlugins = courseCatalog.map((course) => [
  '@docusaurus/plugin-content-docs',
  {
    id: course.id,
    path: course.docsDir,
    routeBasePath: course.routeBasePath,
    sidebarPath: course.sidebarPath,
    sidebarCollapsible: true,
    sidebarCollapsed: false,
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
]);

const getCourseNumber = (course) => course.cardTitle.split(' - ')[0];

const courseDropdownItems = courseCatalog.map((course) => ({
  label: `${course.semester} · ${getCourseNumber(course)}`,
  to: `/${course.routeBasePath}`,
}));

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Open Courseware',
  tagline: 'Open educational resources from courses I have taught',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://ocw.zilin.one',
  // Set the /<baseUrl>/ path of your site
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'libragold',
  projectName: 'opencourseware',

  trailingSlash: false,

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
            to: '/',
            position: 'left',
            label: 'Home',
          },
          {
            label: 'Courses',
            position: 'left',
            items: courseDropdownItems,
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
    ...coursePlugins,
    function yamlLoaderPlugin() {
      return {
        name: 'yaml-loader-plugin',
        configureWebpack() {
          return {
            module: {
              rules: [
                {
                  test: /\.ya?ml$/,
                  use: 'yaml-loader',
                },
              ],
            },
          };
        },
      };
    },
  ],
};

export default config;
