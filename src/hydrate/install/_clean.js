let parallel = require('run-parallel')
let rm = require('rimraf')
let { join } = require('path')

module.exports = function cleanShared ({pathToCode}, callback) {
  parallel(pathToCode.map(functionPath => {
    return function (callback) {
      let path = join(functionPath, 'node_modules')
      rm(path, callback)
    }
  }), callback)
}
