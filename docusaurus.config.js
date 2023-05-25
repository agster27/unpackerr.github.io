module.exports = {
  title: 'Unpackerr Extracter',
  tagline: 'Automated Archive Extractions',
  url: 'https://unpackerr.zip',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Unpackerr', // Usually your GitHub org/user name.
  projectName: 'unpackerr.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      logo: {
        alt: 'Unpackerr',
        src: 'img/unpackerr.png',
      },
      items: [
        {
          to: 'docs/introduction',
          label: 'Documentation',
          position: 'left',
        },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'Docusaurus',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Support',
          items: [
            {
              label: 'Go Lift Discord',
              href: 'https://golift.io/discord',
            },
            {
              label: 'Send Feedback',
              href: 'https://github.com/Unpackerr/unpackerr/issues/new',
            },
          ],
        },
        {
          title: 'Downloads',
          items: [
            {
              label: 'Packagecloud',
              href: 'https://packagecloud.io/golift',
            },
            {
              label: 'Latest Release',
              href: 'https://github.com/Unpackerr/unpackerr/releases/latest',
            },
          ],
        },
        {
          title: 'Information',
          items: [
            {
              label: 'Contact Us',
              href: 'mailto:code@golift.io',
            },
            {
              label: 'Software License',
              href: '/docs/unpackerr/license',
            },
          ],
        },
      ],
      copyright: `<div class="row"><div class="col footer__col">
      <a href="https://hub.docker.com/r/golift/unpackerr">&#9733; THIS PROJECT ON Docker Hub</a>
      </div><div class="col footer__col" style="text-align:left;">
      Copyright © 2018-${new Date().getFullYear()} Go Lift
      </div></div>`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
