---
id: compose
title: Docker Compose
pagination_prev: install/docker
pagination_next: install/configuration
---

- Copy the [example docker-compose.yml](https://github.com/Unpackerr/unpackerr/blob/main/examples/docker-compose.yml)
  from the repo.
- Update the docker-compose.yml file with your environment variable values for your installation.
- Recommend removing variables you are not using; the defaults are found on the Configuration page.
- Then start it.

```shell
docker-compose up -d
```

:::warning Data Mount
The `/data` or `/downloads` mount you use for starr apps should be set the same for unpackerr.
Using the same mount path keeps consistency and makes troubleshooting Unpackerr easier.

This means that if you mount `/mnt/HostDownloads:/downloads` on your starr apps you should
also mount `/mnt/HostDownloads:/downloads` on your unpackerr container. If you mount
`/mnt/user/data:/data` on your starr apps, mount the same path on Unpackerr.
**Make sure Unpackerr can find the downloads in the same place that Sonarr and Radarr find them.**
:::


