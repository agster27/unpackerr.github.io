---
id: docker
title: Docker Basics
pagination_prev: install/choosemethod
pagination_next: install/configuration
description: Install Unpackerr using Docker!
---

import ConfigFile from './includes/dockerconfigfile.md';
import DataMount from './includes/dockerdatamount.md';

# Docker Installation

If you're using Docker Compose, this page may still contain valuable information for you. Please read it.

## Availability

Images are available on DockerHub and GHCR.

### DockerHub

GoLift software has a [Docker Open Source Sponsorship](https://docs.docker.com/trusted-content/dsos-program/).
That means there are **no pull limits for any [`golift/*` image on Docker Hub](https://hub.docker.com/u/golift).**
Even if you're not logged in.

This project builds automatically in [Docker Cloud](https://hub.docker.com/r/golift/unpackerr) and creates
[ready-to-use multi-architecture images](https://hub.docker.com/r/golift/unpackerr/tags) images.
The `latest` tag is always a [tagged release on GitHub](https://github.com/Unpackerr/unpackerr/releases).

- Pull the DockerHub image with this command:
  ```shell
  docker pull golift/unpackerr:latest
  ```

### GHCR

GitHub Actions also builds a Docker image and stores it in the
[GitHub container registry](https://github.com/Unpackerr/unpackerr/pkgs/container/unpackerr).
This image is effectively identical to the DockerHub version; use whichever you prefer.
The `latest` tag is always a [tagged release on GitHub](https://github.com/Unpackerr/unpackerr/releases).

- Pull the GHCR image with this command:
  ```
  docker pull ghcr.io/unpackerr/unpackerr:latest
  ```

## Example

```shell
docker pull golift/unpackerr
docker run -d -v /mnt/HostDownloads:/downloads \
  -e "UN_SONARR_0_URL=http://localhost:8989" \
  -e "UN_SONARR_0_API_KEY=kjsdkasjdaksdj" golift/unpackerr
docker logs <container id from docker run>
```

## Config File Example

<ConfigFile />

```shell
docker pull golift/unpackerr
docker run -d -v /mnt/HostDownloads:/downloads -v /folder/with/config/file:/config golift/unpackerr
docker logs <container id from docker run>
```

## Data Mount

<DataMount />

## More Dockers

If you want a container that has a bit more to it, you can try a third party option.
The container provided by golift is built `FROM scratch` so it has nothing more in the
container than a binary and a config file (with our defaults).

- **[@hotio](https://github.com/hotio) maintains a
    [Custom Docker Container](https://hub.docker.com/r/hotio/unpackerr)
    for Unpackerr.** ([repo](https://github.com/hotio/unpackerr))

## Permissions

The `golift` docker container runs as uid 0 (root) by default. This is probably not what you want.
Make sure to set the correct uid and gid with the `--user` parameter. Example:

```bash
# This commands runs golift/unpackerr with UID 1000 and GID 100.
docker run --user 1000:100 -d -v /mnt/data:/data -v /mnt/config:/config golift/unpackerr
```

**Replace 1000:100 with the correct uid:gid for your environment.**
One of them must provide write access to your archives.

When using compose, add `user: 1000:100` to the service definition.
Find examples in the [Docker Compose instruction](compose).

### Hotio

The primary difference between the golift and hotio containers is how you set the uid and gid.
Hotio does not user the `--user` parameter and instead sets the UID and GID with environment
variables. *Passing the `--user` parameter to the hotio container will render it inoperable.*
Pass the `PUID` and `PGID` environment variables when using hotio's container. Example:

```bash
# This commands runs hotio/unpackerr with UID 1000 and GID 100.
docker run -e PUID=1000 -e PGID=100 -d -v /mnt/data:/data -v /mnt/config:/config hotio/unpackerr
```

## Folder Watcher

Watching folders in Docker will cause Unpackerr to constantly poll the
watched-folder for changes at a default rate of `1s` (1 second).

The Folder Watch feature uses `inotify` (a.k.a. `fsnotify`) to identify changes to the
watched folder. A folder-poller is automatically started when run in Docker because
`inotify` is unreliable. Disable the folder poller (and rely on `inotify` only) by
setting `folders.interval` (`UN_FOLDERS_INTERVAL`) to `1ms`.

If Unpackerr has trouble determining when downloads are finished, set
`start_delay` high enough to avoid beginning extracting files that are
still being transferred.

**Alternatively, run Unpackerr as a native service instead of in Docker.**
