:::tip Data Mount
The `/data` or `/downloads` mount you use for Starr apps should be set the same for Unpackerr.
Using the same mount path keeps consistency and makes troubleshooting Unpackerr easier.
Most importantly, it allows Unpackerr to find your files.

This means that if you mount `/mnt/storage/downloads:/downloads` on your Starr apps you should
also mount `/mnt/storage/downloads:/downloads` on your Unpackerr container. If you mount
`/mnt/user/data:/data` on your Starr apps, mount the same path on Unpackerr.
**Make sure Unpackerr can find the downloads in the same place that Sonarr and Radarr find them.**
:::

This is the most important part. Look at your download client (like Qbit), Sonarr and Radarr in your
existing compose or docker run commands; look for `volumes:` or `docker run -v`.
One of these volumes is your download mount. It's usually `/data` or `/downloads` and looks like this:

```shell
docker run -v /mnt/storage/downloads:/downloads
```

or

```yaml
    volumes:
      - /mnt/storage/downloads:/downloads
```
