---
id: macos
title: MacOS
pagination_prev: install/choosemethod
pagination_next: install/configuration
---

## Brew

1. Use homebrew.
1. Edit config file at `/usr/local/etc/unpackerr/unpackerr.conf`
1. Start it.
1. Like this:

```shell
brew install golift/mugs/unpackerr
vi /usr/local/etc/unpackerr/unpackerr.conf
brew services start unpackerr
```

The `brew services start` command will signal brew to start Unpackerr every time you login.

:::caution Archive Access
Requires access to your download location.
Make sure you set the `path` variables correctly in the configuration.
Even if they're set incorrectly this app makes a best effort attempt to
locate your downloads. If Unpackerr can't find your downloads, then the
`path` (or `paths`) variables need to be adjusted.
:::

## App

You can also use a GUI app on a Mac instead of CLI via Homebrew:

:::note brew vs app
The `.app` and the Homebrew version are the same application, but one runs in GUI mode and one does not.
:::

1. Download a `.dmg` file from
   [the Releases page](https://github.com/Unpackerr/unpackerr/releases) and double-click it.
1. Copy the `Unpackerr.app` to `/Applications`.
1. Run it. It starts in the menu bar as an icon.
1. Click the menu bar icon and select `Config` -> `Edit`.
1. Edit the config to suit your system and save.
1. Click the menu bar icon again and select `Quit`. Then open the app again.
1. View the logs by clicking the menu bar icon and `Logs` -> `View`.
1. You can add it to `Login Items` to run it automatically when you login.