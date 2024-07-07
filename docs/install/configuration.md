---
id: configuration
title: Application Configuration
pagination_prev: install/choosemethod
pagination_next: unpackerr/troubleshooting
description: Unpackerr configurations explained.
---

This is where to learn what each config item is, the default
values for each item, and the name to use in an environment variable.
You should use the data here along with the data in the
[example config file](https://github.com/Unpackerr/unpackerr/blob/main/examples/unpackerr.conf.example)
to paint the full picture of how to configure Unpackerr.

## Config

- Setting a log file is strongly recommend. This makes it much easier to troubleshoot problems.
- To use a config file in Docker, mount `/config` to the container and Unpackerr will write a config file.
  - Update the new file and restart the container.
- When using a config file you must uncomment at minimum the `[[header]]` <font color="gray">
  ex. `[[radarr]]`</font>, `url` and `api_key`.
- Uncomment means remove the hash `#` at the beginning of the line.

### Generator

[Notifiarr](https://notifiarr.com) hosts a configuration file maker.
Simply fill in a web form, and click a button to get a working config file.

- **Access the generator here: https://notifiarr.com/unpackerr.php**

### Two+ Instances

When adding a second (or third+) instance to the __config file__, you just
add another `[[header]]` <font color="gray">ex. `[[sonarr]]`</font> and the
`url`/`api_key`/etc under it. When adding a second instance to the __environment
variables__, you must increment the `0` to a `1`. And to a `2` if you have 3
instances. There is no limit to the number of supported instances. This notation
works for all starr apps, folders, command hooks, and web hooks. Anything that [has
a header](https://github.com/Unpackerr/unpackerr/blob/main/examples/unpackerr.conf.example#L87)
with double brackets `[[..]]` can be repeated as many times as you'd like.

<details>
  <summary>Config File example with two Radarrs and two Folders.</summary>

```yaml
[[radarr]]
 url = "http://radarr"
 api_key = "32characters"

[[radarr]]
 url = "http://radarr4k"
 api_key = "32morecharacters"

[[folder]]
 path = "/data/downloads/software/"

[[folder]]
 path = "/data/downloads/games/"
```

</details>

<details>
  <summary>Environment Variable example with two Radarrs and two Folders.</summary>

```shell
UN_RADARR_0_URL=http://radarr
UN_RADARR_0_API_KEY=32characters
UN_RADARR_1_URL=http://radarr4k
UN_RADARR_1_API_KEY=32morecharacters
UN_FOLDER_0_PATH=/data/downloads/software/
UN_FOLDER_1_PATH=/data/downloads/games/
```

</details>

## Global Settings

These values must exist at the top of the config file.
If you put them anywhere else they may be attached to a `[[header]]` inadvertently.
When using environment variables, you can simply omit the ones you don't set or change from default.

<details>
  <summary>Examples. Prefix: <b>UN</b></summary>

- Using the config file:

```shell
debug        = false
quiet        = false
error_stderr = false
activity     = false
log_queues   = "1m"
log_file     = ""
log_files    = 10
log_file_mb  = 10
interval     = "2m"
start_delay  = "1m"
retry_delay  = "5m"
parallel     = 1
file_mode    = "0644"
dir_mode     = "0755"
```

- Using environment variables:

```shell
TZ=America/New_York
UN_DEBUG=false
UN_QUIET=false
UN_ERROR_STDERR=false
UN_ACTIVITY=false
UN_LOG_QUEUES=1m
UN_LOG_FILE=
UN_LOG_FILES=10
UN_LOG_FILE_MB=10
UN_INTERVAL=2m
UN_START_DELAY=1m
UN_RETRY_DELAY=5m
UN_MAX_RETRIES=3
UN_PARALLEL=1
UN_FILE_MODE=0644
UN_DIR_MODE=0755
```

</details>

|Config Name|Variable Name|Default / Note|
|---|---|---|
|debug|`UN_DEBUG`|`false` / Turns on more logs|
|quiet|`UN_QUIIET`|`false` / Do not print logs to stdout or stderr|
|error_stderr|`UN_ERROR_STDERR`|`false` / Print ERROR lines to stderr instead of stdout.|
|activity|`UN_ACTIVITY`|`false` / Setting true will print only queue counts with activity.|
|log_queues|`UN_LOG_QUEUES`|`1m` / Uses Go Duration. How often to print internal counters.|
|log_file|`UN_LOG_FILE`|None by default. Optionally provide a file path to write logs|
|log_files|`UN_LOG_FILES`|`10` / Log files to keep after rotating. `0` disables rotation|
|log_file_mb|`UN_LOG_FILE_MB`|`10` / Max size of log files in megabytes|
|interval|`UN_INTERVAL`|`2m` / How often apps are polled, recommend `1m` to `5m`|
|start_delay|`UN_START_DELAY`|`1m` / Files are queued at least this long before extraction|
|retry_delay|`UN_RETRY_DELAY`|`5m` / Failed extractions are retried after at least this long|
|max_retries|`UN_MAX_RETRIES`|`3` / Times to retry failed extractions. `0` = unlimited.|
|parallel|`UN_PARALLEL`|`1` / Concurrent extractions, only recommend `1`|
|file_mode|`UN_FILE_MODE`|`0644` / Extracted files are written with this mode|
|dir_mode|`UN_DIR_MODE`|`0755` / Extracted folders are written with this mode|
|passwords|`UN_PASSWORD_0`|No default; empty list. Provide a list of RAR passwords to try.|
|folders.interval|`UN_FOLDERS_INTERVAL`|`1s` / How often poller (if enabled) checks for new folders.|

## Secrets and Passwords

If a wrong password is provided, the entire archive must
be read before we know it's a bad password.
Providing many passwords here can drastically slow down
extractions and cause extra disk IO. You may also specify
a password file by providing a "password" in this format: `filepath:/path/to/passwords.txt`.
The file must contain 1 password per line.

:::info Other Secrets
You may store any string parameter (except time intervals) into a separate file
by setting the value to `filepath:/path/to/file.txt`. In other words, if you want
your Radarr API key to be read from a separate file, instead of storing it directly
in the config file or environment variables you can do this:
```toml
[[radarr]]
  url = "https://some.url/radarr"
  api_key = "filepath:/etc/secrets/radarr.txt"
```

Or if using environment variables:
```shell
UN_RADARR_0_API_KEY=filepath:/etc/secrets/radarr.txt
```

Then store the API key (and only the API key) in `/etc/secrets/radarr.txt`.

_<font color="gray">This feature was added in Unpackerr v0.14.0.</font>_
:::

## Webserver

:::note Metrics
The web server currently only provides prometheus metrics, which you can display in
[Grafana](https://grafana.com/grafana/dashboards/18817-unpackerr/).
It provides no UI. This may change in the future. The web server was added in v0.12.0.
:::


<details>
  <summary>Examples. Prefix: <b>UN_WEBSERVER</b>, Header: <b>[webserver]</b></summary>

- Using the config file:

```shell
[webserver]
  metrics = true
  listen_addr = "0.0.0.0:5656"
  log_file = ""
  log_files = 10
  log_file_mb = 10
  ssl_cert_file = ""
  ssl_key_file = ""
  urlbase = "/"
  upstreams = [ "127.0.0.1/32", "10.1.2.0/24" ]
```

- Using environment variables:

```shell
UN_WEBSERVER_METRICS=true
UN_WEBSERVER_LISTEN_ADDR=0.0.0.0:5656
UN_WEBSERVER_LOG_FILE=
UN_WEBSERVER_LOG_FILES=10
UN_WEBSERVER_LOG_FILE_MB=10
UN_WEBSERVER_URLBASE=/
UN_WEBSERVER_UPSTREAMS=127.0.0.1/32,10.1.2.0/24
```

</details>


|Config Name|Variable Name|Default / Note|
|---|---|---|
|webserver.metrics|`UN_WEBSERVER_METRICS`|`false` / Set this to true to enable the webserver, and metrics|
|webserver.listen_addr|`UN_WEBSERVER_LISTEN_ADDR`| `0.0.0.0:5656` / ip:port to listen on. `0.0.0.0` is all IPs|
|webserver.log_file|`UN_WEBSERVER_LOG_FILE`|No default. Optionally provide a file path to write HTTP logs|
|webserver.log_files|`UN_WEBSERVER_LOG_FILES`|`10` / Log files to keep after rotating. `0` to disable|
|webserver.log_file_mb|`UN_WEBSERVER_LOG_FILE_MB`|`10` / Max size of HTTP log files in megabytes|
|webserver.ssl_cert_file|`UN_WEBSERVER_SSL_CERT_FILE`|No default. Path to SSL cert file to serve HTTPS|
|webserver.ssl_key_file|`UN_WEBSERVER_SSL_KEY_FILE`|No default. Path to SSL key file to serve HTTPS|
|webserver.urlbase|`UN_WEBSERVER_URLBASE`|`/` / Base URL path to serve HTTP content|
|webserver.upstreams|`UN_WEBSERVER_UPSTREAMS`|No default. List of upstream proxy CIDRs or IPs to trust|

## Sonarr

<details>
  <summary>Examples. Prefix: <b>UN_SONARR_#</b>, Header: <b>[[sonarr]]</b></summary>

- Using the config file:

```shell
[[sonarr]]
  url = "http://127.0.0.1:8989"
  api_key = "0123456789abcdef0123456789abcdef"
  paths = ['/downloads']
  protocols = "torrent"
  timeout = "10s"
  delete_delay = "5m"
  delete_orig = false
  syncthing = false
```

- Using environment variables:

```shell
UN_SONARR_0_URL=http://sonarr:8989
UN_SONARR_0_API_KEY=
UN_SONARR_0_PATHS_0=/downloads
UN_SONARR_0_PROTOCOLS=torrent
UN_SONARR_0_TIMEOUT=10s
UN_SONARR_0_DELETE_ORIG=false
UN_SONARR_0_DELETE_DELAY=5m
```

</details>

|Config Name|Variable Name|Default / Note|
|---|---|---|
|sonarr.url|`UN_SONARR_0_URL`|No Default. Something like: `http://localhost:8989`|
|sonarr.api_key|`UN_SONARR_0_API_KEY`|No Default. Provide URL and API key if you use Sonarr|
|sonarr.paths|`UN_SONARR_0_PATHS_0`|`/downloads` List of paths where content is downloaded for Sonarr. Used as fallback if the path Sonarr reports does not exist or is not accessible.|
|sonarr.protocols|`UN_SONARR_0_PROTOCOLS`|`torrent` Protocols to process. Alt: `torrent,usenet`|
|sonarr.timeout|`UN_SONARR_0_TIMEOUT`|`10s` / How long to wait for the app to respond|
|sonarr.delete_orig|`UN_SONARR_0_DELETE_ORIG`|`false` / Delete archives after import? Recommend not setting this to true|
|sonarr.delete_delay|`UN_SONARR_0_DELETE_DELAY`|`5m` / Extracts are deleted this long after import, `-1s` to disable|
|sonarr.syncthing|`UN_SONARR_0_SYNCTHING`|`false` / Setting this to true makes unpackerr wait for syncthing to finish|

## Radarr

<details>
  <summary>Examples. Prefix: <b>UN_RADARR_#</b>, Header: <b>[[radarr]]</b></summary>

- Using the config file:

```shell
[[radarr]]
  url = "http://127.0.0.1:7878"
  api_key = "0123456789abcdef0123456789abcdef"
  paths = ['/downloads']
  protocols = "torrent"
  timeout = "10s"
  delete_delay = "5m"
  delete_orig = false
  syncthing = false
```

- Using environment variables:

```shell
UN_RADARR_0_URL=http://radarr:7878
UN_RADARR_0_API_KEY=0123456789abcdef0123456789abcdef
UN_RADARR_0_PATHS_0=/downloads
UN_RADARR_0_PROTOCOLS=torrent
UN_RADARR_0_TIMEOUT=10s
UN_RADARR_0_DELETE_ORIG=false
UN_RADARR_0_DELETE_DELAY=5m
```

</details>

|Config Name|Variable Name|Default / Note|
|---|---|---|
|radarr.url|`UN_RADARR_0_URL`|No Default. Something like: `http://localhost:7878`|
|radarr.api_key|`UN_RADARR_0_API_KEY`|No Default. Provide URL and API key if you use Radarr|
|radarr.paths|`UN_RADARR_0_PATHS_0`|`/downloads` List of paths where content is downloaded for Radarr. Used as fallback if the path Radarr reports does not exist or is not accessible|
|radarr.protocols|`UN_RADARR_0_PROTOCOLS`|`torrent` Protocols to process. Alt: `torrent,usenet`|
|radarr.timeout|`UN_RADARR_0_TIMEOUT`|`10s` / How long to wait for the app to respond|
|radarr.delete_orig|`UN_RADARR_0_DELETE_ORIG`|`false` / Delete archives after import? Recommend not setting this to true|
|radarr.delete_delay|`UN_RADARR_0_DELETE_DELAY`|`5m` / Extracts are deleted this long after import, `-1s` to disable|
|radarr.syncthing|`UN_RADARR_0_SYNCTHING`|`false` / Setting this to true makes unpackerr wait for syncthing to finish|

## Lidarr

<details>
  <summary>Examples. Prefix: <b>UN_LIDARR_#</b>, Header: <b>[[lidarr]]</b></summary>

- Using the config file:

```shell
[[lidarr]]
  url = "http://127.0.0.1:8686"
  api_key = "0123456789abcdef0123456789abcdef"
  paths = ['/downloads']
  protocols = "torrent"
  timeout = "10s"
  delete_delay = "5m"
  delete_orig = false
  syncthing = false
```

- Using environment variables:

```shell
UN_LIDARR_0_URL=http://lidarr:8686
UN_LIDARR_0_API_KEY=0123456789abcdef0123456789abcdef
UN_LIDARR_0_PATHS_0=/downloads
UN_LIDARR_0_PROTOCOLS=torrent
UN_LIDARR_0_TIMEOUT=10s
UN_LIDARR_0_DELETE_ORIG=false
UN_LIDARR_0_DELETE_DELAY=5m
```

</details>

|Config Name|Variable Name|Default / Note|
|---|---|---|
|lidarr.url|`UN_LIDARR_0_URL`|No Default. Something like: `http://localhost:8686`|
|lidarr.api_key|`UN_LIDARR_0_API_KEY`|No Default. Provide URL and API key if you use Lidarr|
|lidarr.paths|`UN_LIDARR_0_PATHS_0`|`/downloads` List of paths where content is downloaded for Lidarr. Used as fallback if the path Lidarr reports does not exist or is not accessible|
|lidarr.protocols|`UN_LIDARR_0_PROTOCOLS`|`torrent` Protocols to process. Alt: `torrent,usenet`|
|lidarr.timeout|`UN_LIDARR_0_TIMEOUT`|`10s` / How long to wait for the app to respond|
|lidarr.delete_orig|`UN_LIDARR_0_DELETE_ORIG`|`false` / Delete archives after import? Recommend not setting this to true|
|lidarr.delete_delay|`UN_LIDARR_0_DELETE_DELAY`|`5m` / Extracts are deleted this long after import, `-1s` to disable|
|lidarr.syncthing|`UN_LIDARR_0_SYNCTHING`|`false` / Setting this to true makes unpackerr wait for syncthing to finish|

## Readarr

<details>
  <summary>Examples. Prefix: <b>UN_READARR_#</b>, Header: <b>[[readarr]]</b></summary>

- Using the config file:

```shell
[[readarr]]
  url = "http://127.0.0.1:8787"
  api_key = "0123456789abcdef0123456789abcdef"
  paths = ['/downloads']
  protocols = "torrent"
  timeout = "10s"
  delete_delay = "5m"
  delete_orig = false
  syncthing = false
```

- Using environment variables:

```shell
UN_READARR_0_URL=http://readarr:8787
UN_READARR_0_API_KEY=0123456789abcdef0123456789abcdef
UN_READARR_0_PATHS_0=/downloads
UN_READARR_0_PROTOCOLS=torrent
UN_READARR_0_TIMEOUT=10s
UN_READARR_0_DELETE_ORIG=false
UN_READARR_0_DELETE_DELAY=5m
```

</details>

|Config Name|Variable Name|Default / Note|
|---|---|---|
|readarr.url|`UN_READARR_0_URL`|No Default. Something like: `http://localhost:8787`|
|readarr.api_key|`UN_READARR_0_API_KEY`|No Default. Provide URL and API key if you use Readarr|
|readarr.paths|`UN_READARR_0_PATHS_0`|`/downloads` List of paths where content is downloaded for Readarr. Used as fallback if the path Readarr reports does not exist or is not accessible|
|readarr.protocols|`UN_READARR_0_PROTOCOLS`|`torrent` Protocols to process. Alt: `torrent,usenet`|
|readarr.timeout|`UN_READARR_0_TIMEOUT`|`10s` / How long to wait for the app to respond|
|readarr.delete_orig|`UN_READARR_0_DELETE_ORIG`|`false` / Delete archives after import? Recommend not setting this to true|
|readarr.delete_delay|`UN_READARR_0_DELETE_DELAY`|`5m` / Extracts are deleted this long after import, `-1s` to disable|
|readarr.syncthing|`UN_READARR_0_SYNCTHING`|`false` / Setting this to true makes unpackerr wait for syncthing to finish|

## Whisparr

<details>
  <summary>Examples. Prefix: <b>UN_WHISPARR_#</b>, Header: <b>[[whisparr]]</b></summary>

- Using the config file:

```shell
[[whisparr]]
  url = "http://127.0.0.1:6969"
  api_key = "0123456789abcdef0123456789abcdef"
  paths = ['/downloads']
  protocols = "torrent"
  timeout = "10s"
  delete_delay = "5m"
  delete_orig = false
  syncthing = false
```

- Using environment variables:

```shell
UN_WHISPARR_0_URL=http://whisparr:6969
UN_WHISPARR_0_API_KEY=0123456789abcdef0123456789abcdef
UN_WHISPARR_0_PATHS_0=/downloads
UN_WHISPARR_0_PROTOCOLS=torrent
UN_WHISPARR_0_TIMEOUT=10s
UN_WHISPARR_0_DELETE_ORIG=false
UN_WHISPARR_0_DELETE_DELAY=5m
```

</details>

|Config Name|Variable Name|Default / Note|
|---|---|---|
|whisparr.url|`UN_WHISPARR_0_URL`|No Default. Something like: `http://localhost:8787`|
|whisparr.api_key|`UN_WHISPARR_0_API_KEY`|No Default. Provide URL and API key if you use Readarr|
|whisparr.paths|`UN_WHISPARR_0_PATHS_0`|`/downloads` List of paths where content is downloaded for Readarr. Used as fallback if the path Readarr reports does not exist or is not accessible|
|whisparr.protocols|`UN_WHISPARR_0_PROTOCOLS`|`torrent` Protocols to process. Alt: `torrent,usenet`|
|whisparr.timeout|`UN_WHISPARR_0_TIMEOUT`|`10s` / How long to wait for the app to respond|
|whisparr.delete_orig|`UN_WHISPARR_0_DELETE_ORIG`|`false` / Delete archives after import? Recommend not setting this to true|
|whisparr.delete_delay|`UN_WHISPARR_0_DELETE_DELAY`|`5m` / Extracts are deleted this long after import, `-1s` to disable|
|whisparr.syncthing|`UN_WHISPARR_0_SYNCTHING`|`false` / Setting this to true makes unpackerr wait for syncthing to finish|

## Folder

<details>
  <summary>Examples. Prefix: <b>UN_FOLDER_#</b>, Header: <b>[[folder]]</b></summary>

- Using the config file:

```shell
[[folder]]
  path = '''/some/folder/to/watch'''
  extract_path = ''
  delete_after = "10m"
  disable_recursion = false
  delete_files = false
  delete_original = false
  disable_log = false
  move_back = false
  extract_isos = false
```

- Using environment variables:

```shell
UN_FOLDER_0_PATH=/some/folder/to/watch
UN_FOLDER_0_EXTRACT_PATH=
UN_FOLDER_0_DELETE_AFTER=10m
UN_FOLDER_0_DELETE_ORIGINAL=false
UN_FOLDER_0_DELETE_FILES=false
UN_FOLDER_0_MOVE_BACK=false
```

</details>

Folders are a way to watch a folder for things to extract. You can use this to
monitor your download client's "move to" path if you're not using it with an Starr app.

|Config Name|Variable Name|Default / Note|
|---|---|---|
|folder.path|`UN_FOLDER_0_PATH`|No Default; folder to watch for archives. **Not for Starr apps**|
|folder.extract_path|`UN_FOLDER_0_EXTRACT_PATH`|Where to extract to. Default is the same as `path`|
|folder.delete_after|`UN_FOLDER_0_DELETE_AFTER`|`10m` Delete extracted files and/or archives after this duration; `0` disables|
|folder.disable_log|`UN_FOLDER_0_DISABLE_LOG`|`false` Turns off creation of extraction logs files for this folder|
|folder.delete_original|`UN_FOLDER_0_DELETE_ORIGINAL`|`false` Delete archives after successful extraction|
|folder.delete_files|`UN_FOLDER_0_DELETE_FILES`|`false` Delete extracted files after successful extraction|
|folder.move_back|`UN_FOLDER_0_MOVE_BACK`|`false` Move extracted items back into original folder|
|folder.extract_isos|`UN_FOLDER_0_EXTRACT_ISOS`|`false` Setting this to true enables .iso file extraction|
|folder.disable_recursion|`UN_FOLDER_0_DISABLE_RECURSION`|`false` Setting this to true disables extracting archives inside archives|

## Command Hooks

<details>
  <summary>Examples. Prefix: <b>UN_CMDHOOK_#</b>, Header: <b>[[cmdhook]]</b></summary>

- Using the config file:

```shell
[[cmdhook]]
  command = '/my/cool/script' # Path to command or script.
  shell   = false      # Runs the command inside /bin/sh ('nix) or cmd.exe (Windows).
  name    = ""         # Provide an optional name for logging.
  silent  = false      # Hides command output from logs.
  events  = [1,2,3,4]  # list of event ids to include, [0] == all.
  exclude = ["lidarr"] # list of apps to exclude, ie. ["radarr", "lidarr"]
  timeout = "10s"      # You can adjust how long to wait for a server response.
```

- Using environment variables:

```shell
UN_CMDHOOK_0_COMMAND=/usr/bin/env
UN_CMDHOOK_0_NAME=
UN_CMDHOOK_0_TIMEOUT=10s
UN_CMDHOOK_0_SILENT=false
UN_CMDHOOK_0_SHELL=true
UN_CMDHOOK_0_EXCLUDE_0=lidarr
UN_CMDHOOK_0_EXCLUDE_1=readarr
UN_CMDHOOK_0_EVENTS_0=1
UN_CMDHOOK_0_EVENTS_1=2
UN_CMDHOOK_0_EVENTS_2=3
UN_CMDHOOK_0_EVENTS_3=4
```

</details>

Unpackerr can execute commands (or scripts) before and after an archive extraction.
The only thing required is a command. Name is optional, and used in logs only.
Setting `shell` to `true` executes your command after `/bin/sh -c` or `cmd.exe /c`
on Windows.

|Config Name|Variable Name|Default / Note|
|---|---|---|
|cmdhook.command|`UN_CMDHOOK_0_COMMAND`|No Default; command to run|
|cmdhook.name|`UN_CMDHOOK_0_NAME`|Defaults to first word in command; provide an optional name for logs|
|cmdhook.timeout|`UN_CMDHOOK_0_TIMEOUT`|Defaults to global timeout, usually `10s`|
|cmdhook.silent|`UN_CMDHOOK_0_SILENT`|`false` / Hide command output from logs|
|cmdhook.shell|`UN_CMDHOOK_0_SHELL`|`false` / Run command inside a shell|
|cmdhook.exclude|`UN_CMDHOOK_0_EXCLUDE`|`[]` / List of apps to exclude: radarr, sonarr, folders, etc|
|cmdhook.events|`UN_CMDHOOK_0_EVENTS`|`[0]` / List of event IDs to send (shown under Webhooks)|

All extraction data is input to the command using environment variables, see example below.
Extracted files variables names begin with `UN_DATA_FILES_`.
Try `/usr/bin/env` as an example command to see what variables are available.

<details>
  <summary>Example Output Variables</summary>

```none
UN_DATA_OUTPUT=folder/subfolder_unpackerred
UN_PATH=folder/subfolder
UN_DATA_START=2021-10-04T23:04:27.849216-07:00
UN_REVISION=
UN_EVENT=extracted
UN_GO=go1.17
UN_DATA_ARCHIVES=folder/subfolder_unpackerred/Funjetting.rar,folder/subfolder_unpackerred/Funjetting.r00,folder/subfolder/files.zip
UN_DATA_ARCHIVE_2=folder/subfolder/files.zip
UN_DATA_ARCHIVE_1=folder/subfolder_unpackerred/Funjetting.r00
UN_DATA_ARCHIVE_0=folder/subfolder_unpackerred/Funjetting.rar
UN_DATA_FILES=folder/subfolder/Funjetting.mp3,folder/subfolder/Funjetting.r00,folder/subfolder/Funjetting.rar,folder/subfolder/_unpackerred.subfolder.txt
UN_DATA_FILE_1=folder/subfolder/Funjetting.r00
UN_DATA_BYTES=2407624
PWD=/Users/david/go/src/github.com/Unpackerr/unpackerr
UN_DATA_FILE_0=folder/subfolder/Funjetting.mp3
UN_OS=darwin
UN_DATA_FILE_3=folder/subfolder/_unpackerred.subfolder.txt
UN_DATA_FILE_2=folder/subfolder/Funjetting.rar
UN_BRANCH=
UN_TIME=2021-10-04T23:04:27.869613-07:00
UN_VERSION=
UN_DATA_QUEUE=0
SHLVL=1
UN_APP=Folder
UN_STARTED=2021-10-04T23:03:22.849253-07:00
UN_ARCH=amd64
UN_DATA_ELAPSED=20.365752ms
UN_DATA_ERROR=
```

</details>

## Webhooks

<details>
  <summary>Examples. Prefix: <b>UN_WEBHOOK_#</b>, Header: <b>[[webhook]]</b></summary>

- Using the config file:

```shell
[[webhook]]
  url    = "https://notifiarr.com/api/v1/notification/unpackerr/api_key_from_notifiarr_com"
  name   = ""          # Set this to hide the URL in logs.
  silent = false       # Do not log success (less log spam).
  events = [1,2,3]     # List of event ids to include, 0 == all.
  ## Advanced Optional Webhook Configuration
  nickname      = ""   # Used in Discord and Slack templates as bot name, in Telegram as chat_id.
  channel       = ""   # Passed into templates. Used in Slack templates for destination channel.
  template_path = ""   # Override internal webhook template for discord.com or other hooks.
  template      = ""   # Values: notifiarr, discord, telegram, gotify, pushover, slack
  ignore_ssl    = true # Set this to true to ignore the SSL certificate on the server.
  timeout       = "9s" # You can adjust how long to wait for a server response.
  exclude       = ["lidarr"]         # List of apps to exclude, ie. ["radarr", "lidarr"]
  content_type  = "application/json" # Set this if your template uses another MIME type.
```

- Using environment variables:

```shell
UN_WEBHOOK_0_URL=https://a303739bc23bfcfa79b9cf36fd92833x.m.pipedream.net
UN_WEBHOOK_0_NAME=
UN_WEBHOOK_0_NICKNAME=Unpackerr
UN_WEBHOOK_0_CHANNEL=
UN_WEBHOOK_0_TIMEOUT=10s
UN_WEBHOOK_0_SILENT=false
UN_WEBHOOK_0_IGNORE_SSL=false
UN_WEBHOOK_0_EXCLUDE_0=lidarr
UN_WEBHOOK_0_EXCLUDE_1=readarr
UN_WEBHOOK_0_EVENTS_0=1
UN_WEBHOOK_0_EVENTS_1=2
UN_WEBHOOK_0_EVENTS_2=3
UN_WEBHOOK_0_TEMPLATE_PATH=
UN_WEBHOOK_0_TEMPLATE=
UN_WEBHOOK_0_CONTENT_TYPE=application/json
```

</details>

This application can send a `POST` webhook to a URL when an extraction begins, and again
when it finishes. Configure 1 or more webhook URLs with the parameters below.
Works great with [notifiarr.com](https://notifiarr.com). You can use
[requestbin.com](https://requestbin.com/r/) to test and _see_ the payload.

|Config Name|Variable Name|Default / Note|
|---|---|---|
|webhook.url|`UN_WEBHOOK_0_URL`|No Default; URL to send POST webhook to|
|webhook.name|`UN_WEBHOOK_0_NAME`|Defaults to URL; provide an optional name to hide the URL in logs|
|webhook.nickname|`UN_WEBHOOK_0_NICKNAME`|`Unpackerr` / Passed into templates for telegram, discord and slack hooks|
|webhook.channel|`UN_WEBHOOK_0_CHANNEL`|`""` / Passed into templates for slack.com webhooks|
|webhook.timeout|`UN_WEBHOOK_0_TIMEOUT`|Defaults to global timeout, usually `10s`|
|webhook.silent|`UN_WEBHOOK_0_SILENT`|`false` / Hide successful POSTs from logs|
|webhook.ignore_ssl|`UN_WEBHOOK_0_IGNORE_SSL`|`false` / Ignore invalid SSL certificates|
|webhook.exclude|`UN_WEBHOOK_0_EXCLUDE`|`[]` / List of apps to exclude: radarr, sonarr, folders, etc|
|webhook.events|`UN_WEBHOOK_0_EVENTS`|`[0]` / List of event IDs to send (shown below)|
|webhook.template_path|`UN_WEBHOOK_0_TEMPLATE_PATH`|`""` / Instead of an internal template, provide your own|
|webhook.template|`UN_WEBHOOK_0_TEMPLATE`|`""` / Instead of auto template selection, force one; options below|
|webhook.content_type|`UN_WEBHOOK_0_CONTENT_TYPE`|`application/json` / Content-Type header sent to webhook|

### Webhook Notes

- _`Nickname` should equal the `chat_id` value in Telegram webhooks._
- _`Channel` is used as destination channel for Slack. It's not used in others._
- _`Nickname` and `Channel` may be used as custom values in custom templates._
- _`Name` is only used in logs, but it's also available as a template value as `{{name}}`._
- Built-In Templates: `pushover`, `telegram`, `discord`, `notifiarr`, `slack`, `gotify`.

## Event IDs

Event IDs are needed/used in command hooks and webhooks.

`0` = all, `1` = queued, `2` = extracting,
`3` = extract failed, `4` = extracted, `5` = imported,
`6` = deleting, `7` = delete failed, `8` = deleted
