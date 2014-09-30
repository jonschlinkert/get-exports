# get-exports [![NPM version](https://badge.fury.io/js/get-exports.svg)](http://badge.fury.io/js/get-exports)


> CLI for getting/creating a list of node.js export statements for functions in a module. Why? I want to write pure JavaScript and not worry about remembering to add export statements until js-hint complains about it.

This is more of a linting tool for `export` statements than anything. Just type `ext` and the name of the file to read and the CLI will output a list of statements like `export.foo = foo';` for you to manually add to the file.

## Install
#### Install with [npm](npmjs.org):

```bash
npm i get-exports --save-dev
```

## Run tests

```bash
npm test
```

## Usage

### CLI

From the command line, just run:

```bash
exp [filename] > foo.txt
```
In `foo.txt` you should see something like (of course, with the names of the functions/methods in your application):

```js
exports.foo = foo;
exports.bar = bar;
exports.baz = baz;
```

I considered adding logic to append this to the file, but this is simple enough and gives you a chance to look things over before adding them to the file.


### API

To use with a node.js application, just do:

```js
var getExports = require('get-exports');
getExports('index.js');
```
Returns something like:

```js
exports.foo = foo;
exports.bar = bar;
exports.baz = baz;
```

## Author

**Jon Schlinkert**
 
+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert) 

## License
Copyright (c) 2014 Jon Schlinkert, contributors.  
Released under the MIT license

***

_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on September 30, 2014._