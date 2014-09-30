/*!
 * get-exports <https://github.com/jonschlinkert/get-exports>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var fs = require('fs');
var path = require('path');
var builtins = require('builtins');
var context = require('code-context');

function codeContext(filepath) {
  var value = {};
  var str = fs.readFileSync(path.resolve(filepath), 'utf8');
  value.path = filepath;
  value.contents = str;
  value.context = context(str);
  return value;
}

function isValid(value) {
  return value
    && builtins.indexOf(value.name) === -1
    && value.receiver !== 'exports'
    && value.receiver !== 'module'
    && (value.type === 'function statement'
    || value.type === 'function expression'
    || value.type === 'method');
}

function wrap(value) {
  return 'exports.' + value.name + ' = ' + value.name + ';';
}

module.exports = function (filepath) {
  return codeContext(filepath)
    .context.filter(function (value) {
      return isValid(value);
    }).map(wrap).join('\n');
};
