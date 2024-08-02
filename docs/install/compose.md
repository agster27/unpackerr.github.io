---
id: compose
title: Docker Compose
pagination_prev: install/docker
pagination_next: install/configuration
description: Install Unpackerr with Docker Compose!
---

import ConfigFile from './includes/dockerconfigfile.md';
import DataMount from './includes/dockerdatamount.md';

# Compose Install

- Copy the [example docker-compose.yml](https://github.com/Unpackerr/unpackerr/blob/main/examples/docker-compose.yml)
  from the repo or [generate one](https://notifiarr.com/unpackerr).
- Update the docker-compose.yml file with your environment variable values for your installation.
- Remove variables you did not change; the defaults are found on the Configuration page.
- Again, remove the variables you don't set or change. You can always add them back later.
- **Do not quote variable values, this isn't bash.**
- Then start it, like this:

```shell
docker-compose up -d
```

Here's an example minimal compose file. This works well, and all the defaults should work for you too.
The [`user:` parameter](https://docs.docker.com/compose/compose-file/05-services/#user) controls
the uid and gid that the app runs as. The default is root if you don't include it, but you should definitely
include it, and set it correctly for your environment.
Read the [Permissions section on the Docker page](docker#permissions) for more details.

Find your time zone [`TZ` identifier here](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones),
and set `TZ` too so logs have the correct time stamp for you.

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

And if you're trying to watch a folder, add this `environment:` variable with _your_ folder path:

```yaml
      - UN_FOLDER_0_PATH=/downloads/autoxtract
```

## Data Mount

<DataMount />

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

:::danger Security Opts
Do not include this in your compose. It will make Unpackerr not work properly. If you know how
to adjust caps, go for it, but please don't ask for help without removing this first:

```yaml
    security_opt:
       - no-new-privileges:true
```
:::

## Config File

You may also use a config file with or instead of environment variables.
**This section is optional and generally not recommended for compose users.**

<ConfigFile />

```yaml
    volumes:
      - /mnt/appdata/unpackerr:/config
```
You should have a volume like the one above. It must end with `:/config`.
Put the `unpackerr.conf` file in the folder on the left side,
or edit the file unpackerr writes after you start it.
