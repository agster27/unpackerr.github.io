---
id: configuration
title: Application Configuration
pagination_prev: install/choosemethod
pagination_next: unpackerr/troubleshooting
description: Unpackerr configurations explained.
---

import Generated from './generated/index.md';
import Global from './generated/global.md';

This is where to learn what each config item is, the default
values for each item, and the name to use in an environment variable.
You should use the data here along with the data in the
[example config file](https://github.com/Unpackerr/unpackerr/blob/main/examples/unpackerr.conf.example)
to paint the full picture of how to configure Unpackerr.

## Config

- Setting a log file is strongly recommend. This makes it much easier to troubleshoot problems.
- To use a config file in Docker, mount `/config` to the container and Unpackerr will write a config file.
  - Update the new file at `/config/unpackerr.conf` and restart the container.
- When using a config file you must uncomment at minimum the `[[header]]` <font color="gray">
  ex. `[[radarr]]`</font>, `url` and `api_key`.
- Uncomment means remove the hash `#` at the beginning of the line.
- The config file format is [TOML](https://toml.io).
  - Indentation is not important like YAML files, but it's used for ease of readability.
  - You may use `"` or `'` or `'''` or `"""` to wrap strings. Recommend `'` for paths.

### Generator

[Notifiarr](https://notifiarr.com) hosts a configuration file maker.
Simply fill in a web form, and click a button to get a working config file.

- **Access the generator here: https://notifiarr.com/unpackerr**

### Two+ Instances

When adding a second (or third+) instance to the __config file__, you just
add another `[[header]]` <font color="gray">ex. `[[sonarr]]`</font> and the
`url`/`api_key`/etc under it. When adding a second instance to the __environment
variables__, you must increment the `0` to a `1`. And to a `2` if you have 3
instances. There is no limit to the number of supported instances. This notation
works for all starr apps, folders, command hooks, and web hooks.

<details>
  <summary>Config examples with multiple instances.</summary>

- Config File example with two Radarrs and two Folders.

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

- Environment Variable example with two Radarrs and two Folders setting the same values as above.

```shell
UN_RADARR_0_URL=http://radarr
UN_RADARR_0_API_KEY=32characters
UN_RADARR_1_URL=http://radarr4k
UN_RADARR_1_API_KEY=32morecharacters
UN_FOLDER_0_PATH=/data/downloads/software/
UN_FOLDER_1_PATH=/data/downloads/games/
```

</details>

Anything that [has a header](https://github.com/Unpackerr/unpackerr/blob/main/examples/unpackerr.conf.example#L87)
with double brackets `[[..]]` can be repeated as many times as you'd like.

<!-- The Global content is generated from here: https://github.com/Unpackerr/unpackerr/tree/main/init/config -->
<Global />

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
```json
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

<!-- This content is generated from here: https://github.com/Unpackerr/unpackerr/tree/main/init/config -->
<Generated/>

## Event IDs

Event IDs are needed/used in command hooks and webhooks.

`0` = all, `1` = queued, `2` = extracting, `3` = extract failed, `4` = extracted,
`5` = imported, `6` = deleting, `7` = delete failed, `8` = deleted, `9` = nothing extracted

The 'nothing extracted' event (9) only fires for the folder watcher, not starr apps.

---

<font color="gray" style={{'float': 'right', 'font-style': 'italic'}}>
  This page is [generated automatically](https://github.com/Unpackerr/unpackerr/tree/main/init/config).
</font>
