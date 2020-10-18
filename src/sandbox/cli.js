#!/usr/bin/env node
let sandbox = require('@architect/sandbox')
let { version: ver } = require('../../package.json')
let options = process.argv
let params = {
  options,
  version: `Architect ${ver}`
}
sandbox.cli(params)
