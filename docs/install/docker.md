---
id: docker
title: Docker
pagination_prev: install/choosemethod
pagination_next: install/configuration
---

This project [builds automatically](https://github.com/Unpackerr/unpackerr/blob/main/init/docker/hooks/build)
in [Docker Cloud](https://hub.docker.com/r/golift/unpackerr) and creates
[ready-to-use multi-architecture images](https://hub.docker.com/r/golift/unpackerr/tags) images.
The `latest` tag is always a [tagged release on GitHub](https://github.com/Unpackerr/unpackerr/releases).

## Docker Example

```shell
docker pull golift/unpackerr
docker run -d -v /mnt/HostDownloads:/downloads -e "UN_SONARR_0_URL=http://localhost:8989" -e "UN_SONARR_0_API_KEY=kjsdkasjdaksdj" golift/unpackerr
docker logs <container id from docker run>
```

## Docker Example with config file

- Copy the [example config file](https://github.com/Unpackerr/unpackerr/blob/main/examples/unpackerr.conf.example)
  from this repo.
- Then grab the image from docker hub and run it using an overlay for the config file's directory.
- The config file must be at `/config/unpackerr.conf`.
- Recommend bind-mounting `/config` as an app-data directory. Example Follows.
- Note that your mount `/mnt/HostDownloads:/downloads` **MUST** align with the Starr's paths for Unpackerr to work.
  - This path likely best to be the same as your download client.
  - E.g. if Qbit is given `/mnt/user/data/downloads:/data/downloads` then Unpackerr shall get the same mount

```shell
docker pull golift/unpackerr
docker run -d -v /mnt/HostDownloads:/downloads -v /folder/with/config/file:/config golift/unpackerr
docker logs <container id from docker run>
```

## More Dockers

 If you want a container that has a bit more to it, you can try a third party option.
 The container provided by golift is from scratch so it has nothing more than a binary
 and a config file (with our defaults).

- **[@hotio](https://github.com/hotio) maintains a
    [Custom Docker Container](https://hub.docker.com/r/hotio/unpackerr)
    for Unpackerr.** ([repo](https://github.com/hotio/unpackerr))

### unRAID (Docker)

- Unpackerr is available in the
    [Community Applications](https://github.com/selfhosters/unRAID-CA-templates/blob/main/templates/unpackerr.xml)
    on unRAID.
- Note that your mount `/mnt/HostDownloads:/downloads` **MUST** align with the Starr's paths for Unpackerr to work.
  - This path likely best to be the same as your download client.
  - E.g. if Qbit is given `/mnt/user/data/downloads:/data/downloads` then Unpackerr shall get the same mount