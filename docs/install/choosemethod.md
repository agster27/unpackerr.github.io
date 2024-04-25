---
id: choosemethod
title: Choose Install Method
pagination_prev: introduction
pagination_next: null
description: Choose an Unpackerr install method.
---

It's generally recommended to install Unpackerr the same way you installed your
Starr or download apps. If your existing infrastructure exists in Docker, then
Unpackerr should probably live in Docker too.

If you're using the **Folder Watch** feature, then we recommend installing
Unpackerr native (not Docker) on the server where the files-to-be-extracted
reside.

:::caution Docker Folder Watcher
The Folder Watch feature uses `inotify` (a.k.a. `fsnotify`) to identify
changes to the folder. A folder-poller is automatically started when run in
Docker because `inotify` is unreliable.

Watching folders in Docker will cause Unpackerr to constantly poll the
watched-folder for changes. Unpackerr cannot determine when a download is
finished downloading while running in Docker because `inotify` is not reliable.
Make sure to set the `start_delay` high enough to avoid beginning extractions
while files are still being downloaded.

**Alternatively, run Unpackerr as a native service instead of in Docker.**
:::

## Instructions Available

:::tip CPU Hog
Unpackerr uses a lot CPU, and tends not to work well when running on smaller systems like Synology NAS devices.
Running Unpackerr on a system with a large CPU is ideal to avoid system performance degradation.
:::

- [Docker](/docs/install/docker): [Compose](/docs/install/compose), [unRAID](/docs/install/unraid),
    [TrueNAS Scale](/docs/install/truenas-scale)
- [FreeBSD](/docs/install/freebsd)
- [Linux: with root](/docs/install/linux), [without root (seedbox)](/docs/install/seedbox)
- [macOS](/docs/install/macos)
- [Windows](/docs/install/windows)

---

## Other Guides

These guides are provided by community members.

- Synology: https://drfrankenstein.co.uk/2022/07/02/unpackerr-in-docker-on-a-synology-nas/
- HomeAssistant: https://github.com/alexbelgium/hassio-addons/tree/master/unpackerr
- HostingByDesign (HBD) B's Hosted Scripts: https://github.com/brettpetch/hosted-scripts

([open a pull request to add your guide](https://github.com/Unpackerr/unpackerr.github.io/blob/main/docs/install/choosemethod.md))
