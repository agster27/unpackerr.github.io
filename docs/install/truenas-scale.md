---
id: truenas-scale
title: TrueNAS Scale
pagination_prev: install/choosemethod
pagination_next: install/configuration
description: Install Unpackerr on TrueNAS Scale using TrueCharts.
---

# TrueNAS Scale Installation

## TrueCharts

The easiest method to install this on TrueNAS Scale using the TrueCharts catalog.
If you are not familiar with TrueCharts, see the
[TrueCharts documentation](https://truecharts.org/manual/SCALE/guides/getting-started/).

This document is intended to be a basic guide to get Unpackerr up and running with minimal options.
You may want to tweak permissions or networking based on your particular setup.

## Pre-Setup

You will need the following items before getting started:

- The location where your torrents are being downloaded to (relative to TrueNAS Scale).
   For example, if your torrents are in a dataset named `default` and in the subdirectory `qbittorent`,
   your path might be `/mnt/default/qbittorent`
- A persistent location to place the config file.
   For the purposes of this guide, we created a config file at `/mnt/default/unpackerr/unpackerr.conf`.
   Read more about the configuration file on the [Application Configuration](/docs/install/configuration.md) page.
- We recommend putting the config file in place before installing the application.
   Use the documentation from above and save your custom config file to the location you chose above.

:::caution Configuration Notes
The goal is make the config file available @ `/config/unpackerr.conf` inside the container.
Using this container path will allow Unpackerr to find your configuration automatically.
You may also need to correct ownership of the file on the host so unpackerr can read it.
Use `chown` to do that; something like: `chown apps:apps /mnt/default/unpackerr/unpackerr.conf`
:::

## Installing the App

1. After TrueCharts is added as a catalog, go to the Apps section.
1. Then click on Discover Apps
1. Then search for Unpackerr, it should show in the list.
1. Click Install. <br/>
   ![TrueNAS Scale Discover Apps page](/img/screenshots/truenas-scale/discover.png)

## Configuration

On the install screen, we are most concerned with the following two entries in the `Storage and Persistence` section:

1. App Config Storage (`/config`): Change the Type of Storage to `Host Path`
   and use the path to the configuration **folder** that you created above.<br/>
   ![App Config Storage example](/img/screenshots/truenas-scale/app-config.png)
1. App downloads Storage (`/downloads`): Change the Type of Storage to `Host Path`
   and use the path to the torrent folder as mentioned above.<br/>
   ![App downloads Storage example](/img/screenshots/truenas-scale/download-config.png)

All other settings should be reviewed and modify to your specific use case.
The defaults tend to work fine if you have the rest of the starr apps installed on TrueNAS Scale as well.

## Advanced

The default container mount path for the `App downloads Storage` mentioned above is `/downloads`.
While this works for a majority of users, it does not work for everyone. Check your download client's
download location(s), and be sure to add the exact same mount to Unpackerr. This ensures unpackerr
can locate your downloaded files.

- In the Unpackerr application (in your TrueNAS Scale UI), scroll down to `Additional App Storage` and click `Add`.
- Once added, match the information from the download application into the Unpackerr application.
- The screenshot below shows an example mounting `/mnt` in the container directly to the download path.

![App Additional Storage example](/img/screenshots/truenas-scale/app-storage.png)

## Verify

Once installed, TrueNAS Scale should boot the container immediately.
You can verify the logs by clicking on the Unpackerr container,
and using the `View Logs` button in the `Workloads` section.

![View Logs button](/img/screenshots/truenas-scale/view-logs.png)
