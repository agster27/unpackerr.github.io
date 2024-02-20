---
id: truenas scale
title: TrueNAS SCALE
pagination_prev: install/choosemethod
pagination_next: install/configuration
description: Install Unpackerr on TrueNAS SCALE using TrueCharts.
---

# TrueNAS Scale Installation

## TrueCharts

The easiest method to install this on TrueNAS SCALE using the TrueCharts catalog.  If you are not familiar with TrueCharts, use the [TrueCharts documentation](https://truecharts.org/manual/SCALE/guides/getting-started/).

This document is intended to be a basic guide to get unpackerr up and running with minimal options.  You may want to tweak permissions or networking based on your particular setup.

## Pre-Setup

You will need the following items before getting started:
- The location where your torrents are being downloaded to (relative to TrueNAS Scale).  For example, if your torrents are in a dataset named `default` and in the subdirectory `qbittorent`, your path might be `/mnt/default/qbittorent`
- A persistent location to place the config file.  For the purposes of this guide, we created a config file at `/mnt/default/unpackerr/unpackerr.conf`.  Details about the config file are [here](/docs/install/configuration.md).
- We recommend putting the config file in place before installing the application.  Use the documentation from above and save your custom config file to the location you chose above.

## Installing the App

1. After TrueCharts is added as a catalog, go to the Apps section.
1. Then click on Discover Apps
1. Then search for unpackerr, it should show in the list.
![TrueNAS Scale Discover Apps page](/static/img/screenshots/truenas-scale/discover.png)
1. Click Install.

## Configuration

1. On the install screen, we are most concerned with the following two entries in the `Storage and Persistence` section:
   1. App Config Storage (`/config`): Change the Type of Storage to `Host Path` and use the path to the configuration **folder** that you created above
![App Config Storage example](/static/img/screenshots/truenas-scale/app-config.png)
   1. App downloads Storage (`/downloads`): Change the Type of Storage to `Host Path` and use the path to the torrent folder as mentioned above.
![App downloads Storage example](/static/img/screenshots/truenas-scale/download-config.png)
1. All other settings should be reviewed and modify to your specific use case.
1. The defaults tend to work fine if you have the rest of the *arr apps installed on TrueNAS SCALE as well.

## Verify

Once installed, TrueNAS Scale should boot the container immediately.  You can verify the logs by clicking on the unpackerr container, and using the `View Logs` button in the `Workloads` section.

![View Logs button](/static/img/screenshots/truenas-scale/view-logs.png)