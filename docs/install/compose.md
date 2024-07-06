---
id: compose
title: Docker Compose
pagination_prev: install/docker
pagination_next: install/configuration
description: Install Unpackerr with Docker Compose!
---

- Copy the [example docker-compose.yml](https://github.com/Unpackerr/unpackerr/blob/main/examples/docker-compose.yml)
  from the repo.
- Update the docker-compose.yml file with your environment variable values for your installation.
- Remove variables you did not change; the defaults are found on the Configuration page.
- Again, remove the variables you don't set or change. You can always add them back later.
- **Do not quote variable values, this isn't bash.**
- Then start it, like this:

```shell
docker-compose up -d
```

Here's an example minimal compose file. This works, and all the defaults should work for you too.
The [`user:` parameter](https://docs.docker.com/compose/compose-file/05-services/#user) controls
the uid and gid that the app runs as. The default is root if you don't include it.

Find your [TZ identifier here](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).

```yaml
services:
  unpackerr:
    image: golift/unpackerr
    container_name: unpackerr
    volumes:
      - /mnt/storage/downloads:/downloads
    restart: always
    user: 1001:100
    environment:
      - TZ=America/New_York
      - UN_LOG_FILE=/downloads/unpackerr.log
      - UN_SONARR_0_URL=http://sonarr:8989
      - UN_SONARR_0_API_KEY=32coolcatcharacters
      - UN_RADARR_0_URL=http://radarr:7878
      - UN_RADARR_0_API_KEY=32coolkatcharacters
```

And if you're trying to watch a folder, add this `environment:` variable with your folder:

```
      - UN_FOLDER_0_PATH=/downloads/autoxtract
```

## Data Mount

:::info Data Mount
The `/data` or `/downloads` mount you use for Starr apps should be set the same for Unpackerr.
Using the same mount path keeps consistency and makes troubleshooting Unpackerr easier.
Most importantly, it allows Unpackerr to find your files.

This means that if you mount `/mnt/storage/downloads:/downloads` on your Starr apps you should
also mount `/mnt/storage/downloads:/downloads` on your Unpackerr container. If you mount
`/mnt/user/data:/data` on your Starr apps, mount the same path on Unpackerr.
**Make sure Unpackerr can find the downloads in the same place that Sonarr and Radarr find them.**
:::

This is the most important part. Look at your download client (like Qbit), Sonarr and Radarr in your
existing compose; look for `volumes:`. One of these volumes is your download mount. It's usually
`/data` or `/downloads` and looks like this:

```yaml
    volumes:
      - /mnt/storage/downloads:/downloads
```

Simply copy the downloads storage volume from your Starr apps or download client to Unpackerr.

## Log File

**Set a log file.** You'll need it to figure out what Unpackerr did. Put it in your download location.
Example:

```yaml
    environment:
      - UN_LOG_FILE=/downloads/unpackerr.log
```

Replace `/downloads/unpackerr.log` with `/data/unpackerr.log` if you mounted `/data` in `volumes:`.
Or whatever download path you mounted; just put it there for ease of finding it.

## More Notes

:::warning Security Opts
Do not include this in your compose. It will make Unpackerr not work properly. If you know how
to adjust caps, go for it, but please don't ask for help without removing this first:

```yaml
    security_opt:
       - no-new-privileges:true
```
:::

## Config File

_Very Optional:_

You may also use a config file with or instead of environment variables. Name the file `unpackerr.conf`
and mount the folder it's in to `/config`, so the file becomes available at `/config/unpackerr.conf`.
Here's an example volume mount. You need one like this that ends with `/config`. Put the file in the
folder on the left side.

```yaml
    volumes:
      - /mnt/appdata/unpackerr:/config
```
