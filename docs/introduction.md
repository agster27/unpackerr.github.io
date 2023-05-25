---
id: introduction
title: Introduction
pagination_prev: null
pagination_next: install/choosemethod
---

Unpackerr is an application that runs on Windows, macOS, Linux, FreeBSD and in Docker.
You can use it to watch a download folder and extract new items.
The more common use is to watch starr apps (radarr, sonarr, readarr,lidarr, whisparr)
and extract items they download. It can do both, at the same time even.

## Features

- Simple to use.
- Rich logs.
- Extracts entire folders.
- Extracts your subs files too.
- Cleans up extracted items.
- Can extract in place or somewhere else.
- Can execute scripts/commands based on extraction events.
- Can send webhooks based on extraction events.
- Provides a metrics endpoint for Prometheus scraping.
- Has a nifty [Grafana](https://grafana.com/grafana/dashboards/18817-unpackerr/)
  dashboard to visualize what it did.

## Description

This application runs as a daemon on your download host. It checks for completed
downloads and extracts them so Lidarr, Radarr, Readarr, and Sonarr may import them.
There are a handful of options out there for extracting and deleting files after
your client downloads them. I just didn't care for any of them, so I wrote my own.
I wanted a small single-binary with reasonable logging that can extract downloaded
archives and clean up the mess after they've been imported.

Not a starr app user, and just need to extract files? We do that too. This
application can run standalone and extract files found in a "watch" folder. In other
words, you can configure this application to watch your download folder, and it will
happily extract everything you download. This has nothing to do with the four Starr
apps mentioned in the previous paragraph. This Folder-watch feature may be used with
or without Starr apps.

## Archives Supported

Pretty much everything. It also extracts recursively, meaning deep within folders,
and archives within archives. Tars, Rars, Zips, 7-Zips, Gzips, Tarred gzips and bzips;
encrypted rars and 7zips. And ISO disc images. Need something else? Ask. Does it do
too much? Let me know what knobs you need.
[Open a request](https://github.com/Unpackerr/unpackerr/issues/new)!

Unpackerr will decompress archives of these types:

- `rar`, `tar`, `tgz`, `gz`, `zip`, `7z`, `bz2`, `tbz2`, `iso`
- Multi-file archives are supported with RAR and 7ZIP archives.
- Password protected archived are supported with RAR and 7ZIP archives.
- Archives are detected by the file extension. ISO is disabled by default.

## Logic

The application polls Radarr, Readarr, Sonarr and Lidarr at the `interval` configured.
The queued items are inspected for completeness.

When Unpackerr finds an item in a starr app, the download location is checked for an
archive file. If an extractable archive exists, and the starr app has `status=Completed`
from your download client, Unpackerr will extract the file. Files are extracted to a
temporary folder, and then moved back into the download location for
_Completed DownloadHandling_ to import them. When the item falls out of the strr app
queue, the extracted files are deleted.

# Attribution

The following fine folks are providing their services, completely free! These service
integrations are used for things like storage, building, compiling, distribution and
documentation support. This project succeeds because of them. Thank you!

[![packagecloud](https://docs.golift.io/integrations/packagecloud.png "PackageCloud.io")](https://packagecloud.io)
[![GitHub](https://docs.golift.io/integrations/octocat.png "GitHub")](https://GitHub.com)
[![Docker Cloud](https://docs.golift.io/integrations/docker.png "Docker Cloud")](https://cloud.docker.com)
[![Homebrew](https://docs.golift.io/integrations/homebrew.png "Homebrew")](https://brew.sh)
[![Go Lift](https://docs.golift.io/integrations/golift.png "Go Lift")](https://golift.io)
