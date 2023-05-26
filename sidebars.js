module.exports = {
  someSidebar: [
    'introduction',
    {
      "Installation": [
        'install/choosemethod',
        {"Docker": [ 'install/docker', 'install/compose', 'install/unraid']},
        'install/freebsd',
        'install/macos',
        'install/windows',
        {"Linux": [ 'install/linux',  'install/seedbox']},
        'install/configuration',
      ]
    },
    'unpackerr/faq',
    'unpackerr/troubleshooting',
    {
      type: 'html',
      value: '<a href="https://golift.io"><img src="https://docs.golift.io/integrations/golift.png" /></a>',
      defaultStyle: true,
    },
  ],
};
