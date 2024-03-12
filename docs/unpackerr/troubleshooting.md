---
id: troubleshooting
title: Troubleshooting
pagination_prev: unpackerr/faq
pagination_next: downloaders/torrent
description: Tips and Tricks for troubleshooting Unpackerr installations.
---

- Make sure your Downloads location matches on all your applications!
- Most issues can be resolved by ensuring the user and group Unpackerr runs as has
  Read and Write permissions to the path trying to be extracted.
- Most Docker (and Unraid) issues can be resolved by ensuring your paths align between containers
  - See [TRaSH's Guides](https://trash-guides.info/Hardlinks/Hardlinks-and-Instant-Moves/) and the
    [Servarr Team's Docker Guide](https://wiki.servarr.com/docker-guide) for details on Docker/Unraid path practices.
- Paths below are formatted `/host:/container`
- Common **Bad Path Examples that will not work**:
  - _Example 1._
    - Sonarr: `/mnt/user/data:/data`
    - Qbittorrent: `/mnt/user/data/downloads:/data/downloads`
    - Unpackerr: `/mnt/user/data/:/downloads`
  - _Example 2._
    - Sonarr: `/mnt/user/data:/data`
    - Qbittorrent: `/mnt/user/data/downloads:/downloads`
    - Unpackerr: `/mnt/user/data/:/downloads`
  - _Example 3._
    - Sonarr: `/mnt/user/data:/data`
    - Qbittorrent: `/mnt/user/data/torrents:/data/torrents`
    - Unpackerr: `/mnt/user/data/torrents:/data`
- **Common Good Path Examples that will work**:
  - _Example 1._
    - Sonarr: `/mnt/user/data:/data`
    - Qbittorrent: `/mnt/user/data/downloads:/data/downloads`
    - Unpackerr: `/mnt/user/data/downloads:/data/downloads`

If transfers are in an Error state they will not be extracted.

**Permissions** tend to mess things up too, so make sure the user unpackerr runs as can read
and write to your download location.

Default Log files:

- Linux: `/var/log/messages` or `/var/log/syslog` (w/ default syslog)
- FreeBSD: `/var/log/syslog` (w/ default syslog)
- macOS: `/usr/local/var/log/unpackerr.log` or `~/.unpackerr/unpackerr.log`
- Windows: `~/.unpackerr/unpackerr.log`

Still having problems?
[Let us know](https://github.com/Unpackerr/unpackerr/issues/new) or [find help on Discord](https://golift.io/discord).
