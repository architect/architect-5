let sandbox = require('@architect/sandbox')
let { version: ver } = require('../../package.json')
function get(params) {
  params = params || {}
  return { ...params, version: `Architect ${ver}` }
}

let tables = {
  start: (params, callback) => {
    params = get(params)
    if (!callback) return sandbox.tables.start(params)
    else sandbox.tables.start(params, callback)
  },
  end: (callback) => {
    if (!callback) return sandbox.tables.end()
    else sandbox.tables.end(callback)
  }
}
let events = {
  start: (params, callback) => {
    params = get(params)
    if (!callback) return sandbox.events.start(params)
    else sandbox.events.start(params, callback)
  },
  end: (callback) => {
    if (!callback) return sandbox.events.end()
    else sandbox.events.end(callback)
  }
}
let http = {
  start: (params, callback) => {
    params = get(params)
    if (!callback) return sandbox.http.start(params)
    else sandbox.http.start(params, callback)
  },
  end: (callback) => {
    if (!callback) return sandbox.http.end()
    else sandbox.http.end(callback)
  }
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
