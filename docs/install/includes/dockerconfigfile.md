:::info Default Config File
When you start Unpackerr in Docker it checks for a `/config` directory. If one exists, and there is
no `unpackerr.conf` file within it, a brand new file is written with all default values. We still
recommend using the [generator](https://notifiarr.com/unpackerr) to build yourself a new file.
Replace the file or contents with those from the generator and restart the container.
:::

- Copy the [example config file](https://github.com/Unpackerr/unpackerr/blob/main/examples/unpackerr.conf.example)
  from the repo, or [generate one](https://notifiarr.com/unpackerr).
- Then grab the image from DockerHub or GHCR.
- Run the image using a `volume` mount for the config file's directory.
- **The config file must be located at `/config/unpackerr.conf`.**
- Recommend bind-mounting `/config` volume as an app-data directory. Example Follows.
