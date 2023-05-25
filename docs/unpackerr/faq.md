---
id: faq
title: FAQs
pagination_prev: unpackerr/introduction
pagination_next: unpackerr/troubleshooting
---

## What is a starr app?
Lidarr, Prowlarr, Radarr, Readarr, Sonarr

## Why does Unpackerr show things I do not see in my starr app?

Unpackerr uses the `unknown` item flag when requesting the queue. 

Recently, starr apps do show unknown items by default. However, your installation may have shown unknown items disabled. 

#### Do This

1. Go into each of your starr apps
1. Navigate to the **Activity Queue**
1. Click **Options** in the top right
1. Check the box to enable **Show Unknown Items**.

## What do I do with unknown items?

These items are often caused by having incorrect or an absence of categories (or labels/tags depending on your download client). Make sure you configure categories in each starr app. Once those are configured, you should import or force-remove the unknown items to make them go away. Another common problem is the starr apps are unable to match the download to a know media type (book/movie/tv series/episode/song/etc.)
