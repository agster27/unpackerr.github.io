---
id: linux
title: Repository
pagination_prev: install/choosemethod
pagination_next: install/configuration
description: Install Unpackerr on a Linux server.
---

import ArchiveAccess from './includes/archiveaccess.md';

# Linux Repositories

:::info Root Access
This installation method requires root. If you don't have root on your shell,
then check out the <a href="/docs/install/seedbox">non-root directions</a>.
:::

## Install

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

On Linux, unpackerr runs as `user:group` `unpackerr:unpackerr`. You will need to give that
user or group read and write access to your archives. That may mean adding the `unpackerr`
user, for example, to the `debian-transmission` group.
You would do that with a command such as `sudo usermod -aG debian-transmission unpackerr`

It's only suggested you do run `usermod` if you know what it does and how to set a umask.
You probably instead want to change the uid and/or gid as shown next.

### Change the uid/gid

If you wish to change the user and/or group that unpackerr runs as you need to do exactly this, **and only this**:

1. Make this folder:
   - `sudo mkdir -p /etc/systemd/system/unpackerr.service.d/`
1. Make this file:
   - `sudo touch /etc/systemd/system/unpackerr.service.d/override.conf`
1. Add the following content to the file. Replace `newuser` and `newgroup` with your new values.
   ```systemd
   [Service]
   User=newuser
   Group=newgroup
   ```
1. Run this to read the new systemd service override file:
   - `sudo systemctl daemon-reload`
1. Run this to start unpackerr with the new user and group:
   - `sudo systemctl restart unpackerr`

---

Linux repository hosting provided by
[![packagecloud](https://docs.golift.io/integrations/packagecloud-full.png "PackageCloud.io")](http://packagecloud.io)
