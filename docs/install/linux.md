---
id: linux
title: Repository
pagination_prev: install/choosemethod
pagination_next: install/configuration
description: Install Unpackerr on a Linux server.
---

import ArchiveAccess from './includes/archiveaccess.md';
import Permissions from './includes/linuxpermissions.md';

# Linux Repository Install

**Linux binaries are distributed through `YUM` and `APT` repositories.**
Using a repository allows easier upgrades and access to additional software.
Use the command (script) below to automatically install the GoLift repo and
unpackerr in one command. If your system does not use `yum` (`rpm`) or `apt`
(`dpkg`) then these directions are not for you.

:::info Root Access
This installation method requires root. If you don't have root on your shell,
then check out the <a href="/docs/install/seedbox">non-root directions</a>.
:::

```shell
curl -s https://golift.io/repo.sh | sudo bash -s - unpackerr
```

After install, edit the config file, or
[generate one](https://notifiarr.com/unpackerr) and start the service:

```shell
sudo nano /etc/unpackerr/unpackerr.conf
sudo systemctl restart unpackerr
```

<ArchiveAccess />

## Permissions

<Permissions />

---

Linux repository hosting provided by
[![packagecloud](https://docs.golift.io/integrations/packagecloud-full.png "PackageCloud.io")](http://packagecloud.io)
