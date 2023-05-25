---
id: freebsd
title: FreeBSD
pagination_prev: install/choosemethod
pagination_next: install/configuration
---

1. Download a package from the [Releases](https://github.com/Unpackerr/unpackerr/releases) page.
1. Install it, edit config, start it.
1. Not many folks use FreeBSD, but we can try to help if you drop by the [Discord](https://golift.io/discord).

:::caution Archive Access
Requires access to your download location.
Make sure you set the `path` variables correctly in the configuration.
Even if they're set incorrectly this app makes a best effort attempt to
locate your downloads. If Unpackerr can't find your downloads, then the
`path` (or `paths`) variables need to be adjusted.
:::

## Permissions

On FreeBSD the app runs as `nobody`. That's not very good and will probably change in the future.
