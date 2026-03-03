// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Jonathan Mintz',
  tagline: 'Nature inspired longevity ( bio hacking )',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://jonathanmintz.co.il',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'jonathan-mintz',
  projectName: 'jonathanmintz',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'he',
    locales: ['en', 'he'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      he: {
        label: 'עברית',
        direction: 'rtl',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        gtag: {
          trackingID: 'G-D3507VZ97D',
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
      image: 'img/jonathan-mintz.jpg.avif',
      metadata: [
        {
          name: 'google-site-verification',
          content: 'wol6xRVosvJmqEQwZ9EGNDREukYjBt-S21OdQE3CJBE',
        },
      ],
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'Jonathan Mintz',
        items: [
          {to: '/about', label: 'About', position: 'left'},
          {to: '/daily-routine', label: 'Daily Routine', position: 'left'},
          {to: '/event', label: 'Event', position: 'left'},
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://wa.me/972507225001',
            label: 'WhatsApp',
            position: 'right',
          },
          {
            href: 'mailto:jonathanmintz3@gmail.com',
            label: 'Email',
            position: 'right',
          },
          {type: 'localeDropdown', position: 'right'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Explore',
            items: [
              {
                label: 'About',
                to: '/about',
              },
              {
                label: 'Event',
                to: '/event',
              },
              {
                label: 'Daily Routine',
                to: '/daily-routine',
              },
            ],
          },
          {
            title: 'Journal',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
          {
            title: 'Contact',
            items: [
              {
                label: 'WhatsApp',
                href: 'https://wa.me/972507225001',
              },
              {
                label: 'Email',
                href: 'mailto:jonathanmintz3@gmail.com',
              },
              {
                label: 'TikTok',
                href: 'https://www.tiktok.com/@jonathan.mintz3?_r=1&_t=ZS-94ICmFTeZFg',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Jonathan Mintz.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
