---
id: linux
title: Linux Repository
pagination_prev: install/choosemethod
pagination_next: install/configuration
description: Install Unpackerr on a Linux server.
---

import ArchiveAccess from './includes/archiveaccess.md';
import Permissions from './includes/linuxpermissions.md';

:::info Root Access
This installation method requires root. If you don't have root on your shell,
then check out the <a href="/docs/install/seedbox">non-root directions</a>.
:::

Linux binaries are distributed through `yum` and `apt` repositories.
Using a repository allows easier upgrades and access to additional software.
Use the command (script) below to automatically install the GoLift repo and
unpackerr in one command.

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
