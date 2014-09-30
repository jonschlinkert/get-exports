#!/usr/bin/env node

'use strict';

var fs = require('fs');
var path = require('path');
var log = require('verbalize');
var argv = require('minimist')(process.argv.slice(2));
var getExports = require('./');

log.runner = 'get-exports';

var file = argv.file || argv.f || argv._[0];

if (fs.existsSync(file)) {
  console.log();
  console.log(log.gray(' [get-exports] searching ' + file));
  try {
    var filepath = path.resolve(file);
    console.log(getExports(filepath));
  } catch(err) {
    log.error(err);
  }
} else {
  log.error(' [get-exports] cannot find ' + file);
}