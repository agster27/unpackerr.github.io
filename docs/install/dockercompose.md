---
id: dockercompose
title: Docker Compose
pagination_prev: install/docker
pagination_next: install/configuration
---

Copy the docker compose file here.

- Copy the [example docker-compose.yml](https://github.com/Unpackerr/unpackerr/blob/main/examples/docker-compose.yml)
  from this repo.
- Edit the docker-compose.yml file with your environment variables and save.
- Recommend removing variables you are not using; the defaults are shown below.
- Note that your mount `/mnt/HostDownloads:/downloads` **MUST** align with the Starr's paths for Unpackerr to work.
  - This path likely best to be the same as your download client.
  - E.g. if Qbit is given `/mnt/user/data/downloads:/data/downloads` then Unpackerr shall get the same mount

```shell
docker-compose up -d
```
