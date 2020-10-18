let sandbox = require('@architect/sandbox')
let { version: ver } = require('../../package.json')
function get(params) {
  params = params || {}
  return { ...params, version: `Architect ${ver}` }
}

function tables (params, callback) {
  params = get(params)
  if (!callback) return sandbox.tables(params)
  else sandbox.tables(params, callback)
}
function events (params, callback) {
  params = get(params)
  if (!callback) return sandbox.events(params)
  else sandbox.events(params, callback)
}
function http (params, callback) {
  params = get(params)
  if (!callback) return sandbox.http(params)
  else sandbox.http(params, callback)
}
function start (params, callback) {
  params = get(params)
  if (!callback) return sandbox.start(params)
  else sandbox.start(params, callback)
}
function end (callback) {
  if (!callback) return sandbox.end()
  else sandbox.end(callback)
}

module.exports = {
  db: tables,
  tables,
  events,
  http,
  start,
  end,
}
