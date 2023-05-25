module.exports = {
  someSidebar: [
    'unpackerr/introduction',
    {
      "Installation": [
        'install/choosemethod',
        'install/dockercompose',
        'install/docker',
        'install/freebsd',
        'install/macos',
        'install/windows',
        {"Linux": [ 'install/linux',  'install/noroot']},
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
