On Linux, unpackerr runs as `user:group` `unpackerr:unpackerr`. You will need to give that
user or group read and write access to your archives. That may mean adding the `unpackerr`
user, for example, to the `debian-transmission` group.
You would do that with a command such as `sudo usermod -aG debian-transmission unpackerr`

It's only suggested you do run `usermod` if you know what it does and how to set a umask.
You probably instead want to change the uid and/or gid as shown next.

### Change the uid/gid

If you wish to change the user and/or group that unpackerr runs as you need to do exactly this, **and only this**:

1. Run this command:
   - `sudo systemctl edit unpackerr.service`
1. The previous command opens your `$EDITOR` with a commented out version of the unpackerr service unit.
1. Add the following content to the file editor between the comments.
   Replace `newuser` and `newgroup` with your new values.
   ```systemd
   [Service]
   User=newuser
   Group=newgroup
   ```
1. Run this to read the new systemd service override file:
   - `sudo systemctl daemon-reload`
1. Run this to start unpackerr with the new user and group:
   - `sudo systemctl restart unpackerr`
