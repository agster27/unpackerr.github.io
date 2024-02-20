module.exports = {
  someSidebar: [
    'introduction',
    {
      "Installation": [
        'install/choosemethod',
        {"Docker": [ 'install/docker', 'install/compose', 'install/unraid', 'install/truenas-scale']},
        'install/freebsd',
        'install/macos',
        'install/windows',
        {"Linux": [ 'install/linux',  'install/seedbox']},
        'install/configuration',
      ]
    },
    'unpackerr/faq',
    {'Tips & Tricks': [ 'unpackerr/troubleshooting', 'downloaders/torrent', 'downloaders/usenet']},
    {
      type: 'html',
      value: '<a href="https://golift.io"><img src="https://docs.golift.io/integrations/golift.png" /></a>',
      defaultStyle: true,
    },
    "xt",
  ],
};
