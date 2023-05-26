---
id: seedbox
title: Seedbox
pagination_prev: install/linux
pagination_next: install/configuration
description: Install Unpackerr on a Linux server without root.
---

import ArchiveAccess from './includes/archiveaccess.md';

# Linux Seedbox

Learn how to install Unpackerr on your linux shell without root.

1. Download and extract a binary from the [releases](https://github.com/Unpackerr/unpackerr/releases) page.
1. Rename the file to `unpackerr` and make it executable: `chmod +x unpackerr`
1. Download the [example config file](https://github.com/Unpackerr/unpackerr/blob/main/examples/unpackerr.conf.example).
1. Edit config file to suit your needs: `nano unpackerr.conf`
1. Put both on your Linux shell server, in an `~/unapckerr/` folder.
1. Run Unpackerr in the background, `screen` is the easiest way to do so.

<ArchiveAccess />

Here's a simple script that automates the above steps.
You should take some time to understand how [screen](https://wiki.archlinux.org/title/GNU_Screen)
works if you use this solution. Please read and understand what the script does before running it.

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
chmod 0755 $HOME/unpackerr/unpackerr

# Download the example config file from the same tag.
wget https://raw.githubusercontent.com/Unpackerr/unpackerr/$TAG/examples/unpackerr.conf.example \
  -O $HOME/unpackerr/unpackerr.conf
chmod 0600 $HOME/unpackerr/unpackerr.conf

# This opens nano, so you may edit unpackerr.conf to suit your needs.
# Set a starr app url and api key, and a log file at minimum.
# "~/unpackerr/unpackerr.log" is a good path for a log file.
nano $HOME/unpackerr/unpackerr.conf

# Set up a screen session to run unpackerr in the background.
screen -dmS unpackerr $HOME/unpackerr/unpackerr -c $HOME/unpackerr/unpackerr.conf

# Add a cron job to start the screen session on reboot.
# Note: This adds the job to the current user's crontab.
# You'll need to manually remove it if you want to stop it later.
(crontab -l 2>/dev/null; \
  echo "@reboot screen -dmS unpackerr $HOME/unpackerr/unpackerr -c $HOME/unpackerr/unpackerr.conf") | \
  crontab -
```

After you run this script, and exit `nano`, Unpackerr will be running in the background.
If you're not familiar with `screen`, here's a quick primer:

- Run `screen -r` to re-attach Unpackerr's screen to your terminal.
- After you're satisfied with it, press `ctrl+a` then `d` to detach (and put it back into the background).
- Reminder that all commands inside a [screen](https://wiki.archlinux.org/title/GNU_Screen)
  session begin with `ctrl+a`.
- To make Unpackerr exit, re-attach it and press `ctrl+c`.

The above script also adds a crontab to start Unpackerr on reboot.
Run `crontab -l` to list all crontabs and verify that Unpackerr's exists.
Run `crontab -r` to remove all crontabs and `crontab -e` to edit them.
