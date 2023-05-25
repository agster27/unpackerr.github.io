---
id: docker
title: Docker
pagination_prev: install/choosemethod
pagination_next: install/configuration
---

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
The `/data` or `/downloads` mount you use for starr apps should be set the same for unpackerr.
Using the same mount path keeps consistency and makes troubleshooting Unpackerr easier.

This means that if you mount `/mnt/HostDownloads:/downloads` on your starr apps you should
also mount `/mnt/HostDownloads:/downloads` on your unpackerr container. If you mount
`/mnt/user/data:/data` on your starr apps, mount the same path on Unpackerr.
**Make sure Unpackerr can find the downloads in the same place that Sonarr and Radarr find them.**
:::

## Docker Example with config file

- Copy the [example config file](https://github.com/Unpackerr/unpackerr/blob/main/examples/unpackerr.conf.example)
  from the repo.
- Then grab the image from docker hub and run it using an overlay for the config file's directory.
- The config file must be at `/config/unpackerr.conf`.
- Recommend bind-mounting `/config` as an app-data directory. Example Follows.

```shell
docker pull golift/unpackerr
docker run -d -v /mnt/HostDownloads:/downloads -v /folder/with/config/file:/config golift/unpackerr
docker logs <container id from docker run>
```

## unRAID

- Unpackerr is available in the
    [Community Applications](https://github.com/selfhosters/unRAID-CA-templates/blob/main/templates/unpackerr.xml)
    on unRAID. Install it from the `Apps` page.

## More Dockers

 If you want a container that has a bit more to it, you can try a third party option.
 The container provided by golift is from scratch so it has nothing more than a binary
 and a config file (with our defaults).

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

### Hotio

The primary difference between the golift and hotio containers is how you set the uid and gid.
Hotdio does not user the `--user` parameter and instead sets the UID and GID with environment variables.
Pass the `PUID` and `PGID` env variables when using hotio's container. Example:

```bash
# This commands runs hotio/unpackerr with UID 1000 and GID 100.
docker run -e PUID=1000 -e PGID=100 -d -v /mnt/data:/data -v /mnt/config:/config hotio/unpackerr
```

### unRAID Users

Set the UID and GID by adding `--user 1000:100` to the `Extra Parameters`
section of the unraid template after enabling the `Advanced` view.
