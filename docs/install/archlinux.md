---
id: archlinux
title: Arch Linux Install
pagination_prev: install/choosemethod
pagination_next: install/configuration
description: Install Unpackerr on an Arch Linux server.
---

import ArchiveAccess from './includes/archiveaccess.md';
import Permissions from './includes/linuxpermissions.md';

:::info Root Access
This installation method requires root. If you don't have root on your shell,
then check out the <a href="/docs/install/seedbox">non-root directions</a>.
:::

Arch does not use a repository, so binary packages are built and uploaded to GitHub
for each release. Download the `zst` package for your architecture from the
[releases page](https://github.com/Unpackerr/unpackerr/releases/latest)
and install it with `pacman -U <file or url>`. Alternatively, you can build
it yourself using the [public AUR](https://aur.archlinux.org/packages/unpackerr).

If you don't want to bother figuring out which file you need, use the
[install.sh](https://github.com/Unpackerr/unpackerr/blob/main/init/install.sh) script.
It downloads and trusts the [GoLift GPG public key](https://golift.io/gpg) and then
installs the binary Unpackerr package in one command, like this:

```shell
# Pick curl or wget. Run only one of these:
curl -sL https://raw.githubusercontent.com/Unpackerr/unpackerr/main/init/install.sh | sudo bash
wget -qO- https://raw.githubusercontent.com/Unpackerr/unpackerr/main/init/install.sh | sudo bash
```

You can run this script any time to update to the latest version. Run it weekly in cron to keep up to date automatically.

<ArchiveAccess />

## Permissions

<Permissions />
