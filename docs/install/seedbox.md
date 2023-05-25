---
id: seedbox
title: Seedbox
pagination_prev: install/linux
pagination_next: install/configuration
---

# Linux Seedbox

1. Download and extract a binary from the [releases](https://github.com/Unpackerr/unpackerr/releases) page.
1. Rename the file to `unpackerr` and make it executable: `chmod +x unpackerr`
1. Download the [example config file](https://github.com/Unpackerr/unpackerr/blob/main/examples/unpackerr.conf.example).
1. Edit config file to suit your needs: `nano unpackerr.conf`
1. Put both on your Linux shell server, in an `~/unapckerr/` folder.
1. Run unpackerr in the background, `screen` is the easiest way to do so.

:::caution Archive Access
Requires access to your download location.
Make sure you set the `path` variables correctly in the configuration.
Even if they're set incorrectly this app makes a best effort attempt to
locate your downloads. If Unpackerr can't find your downloads, then the
`path` (or `paths`) variables need to be adjusted.
:::

Here's a cleaned-up script provided by ChatGPT.
You should take some time to understand how [screen](https://wiki.archlinux.org/title/GNU_Screen)
works if you use this solution. Please read and understand what the script does before running it.
Please [let us know](https://github.com/Unpackerr/unpackerr/issues/new) how this works out!

```bash
#!/bin/bash

# Get the latest release tag from GitHub API.
TAG=$(curl -s https://api.github.com/repos/Unpackerr/unpackerr/releases/latest | \
  grep "tag_name" | cut -d '"' -f 4)

# Check system architecture and assign it to ARCH variable.
ARCH="$(uname -m)"
if [ "$ARCH" = "x86_64" ]; then
  ARCH="amd64"
elif [ "$ARCH" = "aarch64" ]; then
  ARCH="arm64"
elif [ "$ARCH" = "armv7l" ]; then
  ARCH="arm"
fi

# Construct the download URL.
URL="https://github.com/Unpackerr/unpackerr/releases/download/$TAG/unpackerr.${ARCH}.linux.gz"

# Download and extract the binary.
mkdir -p $HOME/unpackerr
wget $URL -O - | gunzip > $HOME/unpackerr/unpackerr
chmod +x $HOME/unpackerr/unpackerr

# Download the example config file from the same tag.
wget https://raw.githubusercontent.com/Unpackerr/unpackerr/$TAG/examples/unpackerr.conf.example \
  -O $HOME/unpackerr/unpackerr.conf

# This opens nano, so edit unpackerr.conf to suit your needs.
nano $HOME/unpackerr/unpackerr.conf

# Set up a screen session to run unpackerr.
screen -dmS unpackerr $HOME/unpackerr/unpackerr -c $HOME/unpackerr/unpackerr.conf

# Add a cron job to start the screen session on reboot.
# Note: This adds the job to the current user's crontab.
# You'll need to manually remove it if you want to stop it later.
(crontab -l 2>/dev/null; \
  echo "@reboot screen -dmS unpackerr $HOME/unpackerr/unpackerr -c $HOME/unpackerr/unpackerr.conf") | \
  crontab -
```
