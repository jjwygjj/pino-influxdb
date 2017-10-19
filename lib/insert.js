
module.exports = function insert (data) {
  console.log('sdsadada')
  if (!this.program.quiet && isJson(data)) {
    try {
      const log = JSON.parse(data)
      if(!log.influx) return
      sendLog.bind(this, log)()
    } catch (e) {
      sendLog.bind(this, {Error: e})()
    }
  }
}

function sendLog (fields) {
  console.log(this.program.table, fields)
  this.influxDB.writePoints([{measurement: this.program.table, fields}])
  .then(x => console.log('success send log to influxdb'))
  .catch(x => console.log('error send logs to influxdb'))
}

function isJson (str) {
  try {
    JSON.parse(str)
  } catch (e) {
    return false
  }
  return true
}
