const R = require('ramda')

module.exports = function insert (data) {
  console.log(data)
  if (!this.program.quiet && isJson(data)) {
    try {
      const log = JSON.parse(data)
      if(!log.influx) return
      sendLog.bind(this, log)()
    } catch (e) {
      console.log({Error: e})
    }
  }
}

function sendLog (log) {
  const fields = R.isEmpty(this.program.fields) ? log : R.pick(this.program.fields, log)
  const tags = R.isEmpty(this.program.tags) ? log : R.pick(this.program.tags, log)
  this.influxDB.writePoints([{measurement: this.program.measurements, fields, tags: R.dissoc('time', tags)}])
  .then(x => console.log('success send log to influxdb'))
  .catch(x => console.log('error send logs to influxdb', x))
}

function isJson (str) {
  try {
    JSON.parse(str)
  } catch (e) {
    return false
  }
  return true
}
