// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Q-net-Q',
  tagline: 'Research project Q-net-Q',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://q-net-q.eu',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Meshlab-HSN', // Usually your GitHub org/user name.
  projectName: 'qnetq-website', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
        label: 'English',
      },
      // You can omit a locale (e.g. fr) if you don't need to override the defaults
      de: {
        htmlLang: 'de-DE',
        label: 'Deutsch',
      },
    },
  },

  plugins: [
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        indexDocs: true,
        indexPages: true,
        includeParentCategoriesInPageTitle: true,
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Meshlab-HSN/qnetq-website/tree/main/',
        },
        blog: {
          showReadingTime: true,
          path: 'news',
          routeBasePath: "news",
          editUrl:
            'https://github.com/Meshlab-HSN/qnetq-website/tree/main/',
          blogTitle: 'News',
          blogDescription: 'News from the Q-net-Q project.',
          blogSidebarCount: 'ALL'
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      //image: 'img/docusaurus-social-card.jpg',
      navbar: {
        //title: 'Q-net-Q', // written next to the logo
        logo: {
          alt: 'Q-net-Q',
          src: 'img/q-net-q_logo.svg',
          srcDark: 'img/q-net-q_dm.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'qnetqSidebar',
            position: 'left',
            label: 'About',
          },
          {
            type: 'docSidebar',
            sidebarId: 'testbedsSidebar',
            position: 'left',
            label: 'Testbeds',
          },
          {
            type: 'docSidebar',
            sidebarId: 'rndSidebar',
            position: 'left',
            label: 'Research & Development',
          },
          { to: '/news', label: 'News', position: 'left' },
          /* {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          }, */
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Legal',
            items: [
              {
                label: 'Imprint',
                href: '/footer/imprint',
              },
              {
                label: 'Privacy',
                href: '/footer/privacy',
              },
              {
                label: 'Contact',
                href: '/footer/contact',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'HS Nordhausen',
                href: 'https://www.hs-nordhausen.de/aktuelles/pressemitteilungen/news-presse-details/2028-auf-der-zukuenftigen-quantenautobahn-fuehrt-kein-weg-mehr-an-thueringen-vorbei/aeedcde2629937684b7dd308079c1b21/',
              },
              {
                label: 'BMBF',
                href: 'https://www.forschung-it-sicherheit-kommunikationssysteme.de/projekte/q-net-q',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} - Nordhausen University of Applied Sciences`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
