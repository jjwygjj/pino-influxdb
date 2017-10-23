# pino-influxdb
发送 logs 到 influxdb

## 使用

### Options:
```
  -V, --version         output the version number
  -U, --url <url>       set database server
  -d, --db <name>       set database name (logs)
  -m, --measurements    set database name (table)
  -f, --fields          insert fields into influxDB([])
  -t, --tags            insert tags into influxDB([])
  -q, --quiet           suppress stdin to stdout output (false)
  -h, --help            output usage information
```
npm install pino-influxdb -g
node test.js | pinoInfluxdb -U http://user:password@host:8086 -d bind -m naos -f code,id -t code,id
