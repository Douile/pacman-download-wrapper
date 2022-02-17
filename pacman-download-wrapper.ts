#!/usr/bin/env -S deno run --allow-run

const url = new URL(Deno.args[0]);
const output = Deno.args[1];

let p;
switch (url.protocol) {
  case 'http:':
  case 'https:':
  case 'ftp:':
    p = Deno.run({
      cmd: ['/usr/bin/aria2c', '--allow-overwrite=true', '--continue=true', '--file-allocation=none', '--log-level=error', '--max-tries=2', '--max-connection-per-server=6', '--max-file-not-found=5', '--min-split-size=5M', '--no-conf', '--remote-time=true', '--summary-interval=60', '--timeout=5', '--dir=/', '--out', output, url.toString()],
    });
    break;
  default:
    p = Deno.run({
      cmd: ['/usr/bin/curl', '-o', output, url.toString()],
    });
    break;
}

const { code } = await p.status();

Deno.exit(code);
