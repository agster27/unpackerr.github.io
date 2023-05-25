---
id: macos
title: MacOS
pagination_prev: install/choosemethod
pagination_next: install/configuration
---

- Use homebrew.
- Edit config file at `/usr/local/etc/unpackerr/unpackerr.conf`
- Start it.
- Like this:

```shell
brew install golift/mugs/unpackerr
vi /usr/local/etc/unpackerr/unpackerr.conf
brew services start unpackerr
```

You can also use a GUI app on a Mac instead of CLI via Homebrew:

- Download a `.dmg` file from [the Releases page](https://github.com/Unpackerr/unpackerr/releases).
- Copy the `Unpackerr.app` to `/Applications`.
- Run it. It starts in the menu bar as an icon.
- Click the menu bar icon and select `Config` -> `Edit`.
- Edit the config to suit your system and save.
- Click the menu bar icon again and select `Quit`. Then open the app again.
- View the logs by clicking the menu bar icon and `Logs` -> `View`.
- You can add it to login items to run it automatically when you login.

The `.app` and the Homebrew version are the same application, but one runs in GUI mode and one does not.