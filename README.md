# pacman-download-wrapper

Wrap pacman XferCommand to download http/https/ftp with aria2 and everything else with curl

## `/etc/pacman.conf`

```
XferCommand = /usr/bin/pacman-download-wrapper %u %o
```
