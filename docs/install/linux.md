---
id: linux
title: Linux
pagination_prev: install/choosemethod
pagination_next: install/configuration
---

On Linux, unpackerr runs as `user:group` `unpackerr:unpackerr`. You will need to give that
user or group read and write access to your archives. That may mean adding the `unpackerr`
user, for example, to the `debian-transmission` group.

Run this to install the golift repo and unpackerr:

```shell
curl -s https://golift.io/repo.sh | sudo bash -s - unpackerr
```

After install, edit the config and start the service:

```shell
sudo nano /etc/unpackerr/unpackerr.conf
sudo systemctl restart unpackerr
```

---

Linux repository hosting provided by
[![packagecloud](https://docs.golift.io/integrations/packagecloud-full.png "PackageCloud.io")](http://packagecloud.io)