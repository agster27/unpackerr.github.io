---
id: faq
title: FAQs
pagination_prev: introduction
pagination_next: unpackerr/troubleshooting
description: Frequently asked questions about Unpackerr installation and troubleshooting.
---

## 0. Why do I need Unpackerr?

Great question! It has two answers.

1. If you've ever had things stuck in your Starr app queues because they are RAR (or z7, etc)
   files then you've been in the situation Unpackerr fixes. If this is a common occurrence, then
   Unpackerr is for you. If you don't download compressed files, we're happy to admit this isn't
   for you.
1. Unpackerr can also extract files in a _watched_ (download) folder. If you download a lot of
   stuff and like it to be automatically extracted, then you can use Unpackerr for that purpose
   as well. No Starr apps required; just something that downloads files.

## 1. What is a Starr app?

Lidarr, Prowlarr, Radarr, Readarr, Sonarr, Whisparr

## 2. Why does Unpackerr show things not in my starr app?

Unpackerr uses the `unknown` item flag when requesting the queue.

Recently, starr apps do show unknown items by default. However,
your installation may have shown unknown items disabled.

#### Do This

1. Go into each of your starr apps
1. Navigate to the **Activity Queue**
1. Click **Options** in the top right
1. Check the box to enable **Show Unknown Items**.

## 3. What do I do with unknown items?

These items are often caused by having incorrect or an absence of
categories (or labels/tags depending on your download client).
Make sure you configure categories in each starr app. Once those
are configured, you should import or force-remove the unknown
items to make them go away. Another common problem is the starr
apps are unable to match the download to a know media type
(book/movie/tv series/episode/song/etc.)

## 4. Why aren't hard links working?

The most common cause for this is that Unpackerr is running as,
and writing files as a user other than the user that your starr
apps run as. If you're in Docker, this is likely happening
because the container was not started with the proper uid and gid.
See the Permissions section on the [Docker](/docs/install/docker#permissions)
page for more information on how to fix that problem.

If you're running in Linux, see the Permissions section on the
[Linux](/docs/install/linux#permissions) page for more information
on how to fix the problem.

If hard links don't work **at all** it could indicate another problem
with your starr app setup. See [TRaSH's Guides](https://trash-guides.info/Hardlinks/Hardlinks-and-Instant-Moves/)
and the [Servarr Team's Docker Guide](https://wiki.servarr.com/docker-guide)
for details on Docker path best-practices.
