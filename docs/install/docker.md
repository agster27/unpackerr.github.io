---
id: docker
title: Docker Basics
pagination_prev: install/choosemethod
pagination_next: install/configuration
description: Install Unpackerr using Docker!
---

# Docker Installation

This project builds automatically in [Docker Cloud](https://hub.docker.com/r/golift/unpackerr) and creates
[ready-to-use multi-architecture images](https://hub.docker.com/r/golift/unpackerr/tags) images.
The `latest` tag is always a [tagged release on GitHub](https://github.com/Unpackerr/unpackerr/releases).

## Docker Example

```shell
docker pull golift/unpackerr
docker run -d -v /mnt/HostDownloads:/downloads \
  -e "UN_SONARR_0_URL=http://localhost:8989" \
  -e "UN_SONARR_0_API_KEY=kjsdkasjdaksdj" golift/unpackerr
docker logs <container id from docker run>
```

:::warning Data Mount
The `/data` or `/downloads` mount you use for Starr apps should be set the same for Unpackerr.
Using the same mount path keeps consistency and makes troubleshooting Unpackerr easier.
Most importantly, it allows Unpackerr to find your files.

This means that if you mount `/mnt/storage/downloads:/downloads` on your Starr apps you should
also mount `/mnt/storage/downloads:/downloads` on your Unpackerr container. If you mount
`/mnt/user/data:/data` on your Starr apps, mount the same path on Unpackerr.
**Make sure Unpackerr can find the downloads in the same place that Sonarr and Radarr find them.**
:::

## Example with config file

- Copy the [example config file](https://github.com/Unpackerr/unpackerr/blob/main/examples/unpackerr.conf.example)
  from the repo, or [generate one](https://notifiarr.com/unpackerr).
- Then grab the image from docker hub and run it using an overlay for the config file's directory.
- The config file must be at `/config/unpackerr.conf`.
- Recommend bind-mounting `/config` as an app-data directory. Example Follows.

```shell
docker pull golift/unpackerr
docker run -d -v /mnt/HostDownloads:/downloads -v /folder/with/config/file:/config golift/unpackerr
docker logs <container id from docker run>
```

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

The Folder Watch feature uses `inotify` (a.k.a. `fsnotify`) to identify
changes to the watched folder. A folder-poller is automatically started when
run in Docker because `inotify` is unreliable. Disable the folder poller
(and rely on `inotify` only) by setting `folders.interval` to `1ms`.

If Unpackerr has trouble determining when downloads are finished, set
`start_delay` high enough to avoid beginning extracting files that are
still being transferred.

**Alternatively, run Unpackerr as a native service instead of in Docker.**
