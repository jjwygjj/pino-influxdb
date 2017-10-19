var pino = require('pino')()


setInterval(function(){
  pino.info({influx: true, code: 'hello world', ms: '111'})
},1000)
//node test.js | node index.js -U http://user:password@127.0.0.1:8086 -d bind -t naos
