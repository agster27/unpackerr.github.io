---
id: choosemethod
title: Choose Install Method
pagination_prev: introduction
pagination_next: null
description: Choose an Unpackerr install method.
---

We recommended to installing Unpackerr the same way you installed your
Starr or download apps. If your existing infrastructure exists in Docker,
then Unpackerr should probably live in Docker too.

If you're using the **Folder Watch** feature, then we recommend installing
Unpackerr native (not Docker) on the server where the files-to-be-extracted
reside. Read more about that on the [Docker page](docker#folder-watcher).

## Instructions Available

- [Docker](/docs/install/docker): [Compose](/docs/install/compose),
    [unRAID](/docs/install/unraid), [TrueNAS Scale](/docs/install/truenas-scale)
- [FreeBSD](/docs/install/freebsd)
- [Linux: with root](/docs/install/linux), [without root / seedbox](/docs/install/seedbox)
- [macOS](/docs/install/macos)
- [Windows](/docs/install/windows)

:::tip CPU Hog
Unpackerr uses a lot CPU while extracting, and tends not to work well when
running on smaller systems like Synology NAS devices. Running Unpackerr on
a system with a large CPU is ideal to avoid system performance degradation.
The application uses only a few CPU cycles at idle to poll Starr apps and/or
watch folders.
:::

---

## Other Guides

These guides are provided by community members.

- Synology: https://drfrankenstein.co.uk/2022/07/02/unpackerr-in-docker-on-a-synology-nas/
- HomeAssistant: https://github.com/alexbelgium/hassio-addons/tree/master/unpackerr
- HostingByDesign (HBD) B's Hosted Scripts: https://github.com/brettpetch/hosted-scripts/wiki/Unpackerr

([open a pull request to add your guide](https://github.com/Unpackerr/unpackerr.github.io/blob/main/docs/install/choosemethod.md))
