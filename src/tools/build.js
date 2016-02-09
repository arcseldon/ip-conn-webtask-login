// author arcseldon@icloud.com
'use strict';

const fs = require('fs'),
  R = require('ramda'),
  async = require('async'),
  _ = require('underscore');

const HTML_TEMPLATE = `${__dirname}/../template/login.tpl`,
  JS_TEMPLATE = `${__dirname}/../template/login.js`,
  OUTPUT_TEMPLATE = `${__dirname}/../../build/login.html`;

//console.log(HTML_TEMPLATE);
//console.log(JS_TEMPLATE);
//console.log(OUTPUT_TEMPLATE);

const readFile = R.curry((filePath, storage, cb) => {
  console.log('reading file');
  fs.readFile(filePath, 'utf8', function (err, data) {
    if (err) {
      return cb(err);
    }
    storage.push(data);
    return cb(null, storage);
  });
});

const applyTemplate = (storage, cb) => {
  console.log('applying template');
  const templateStr = storage[0];
  const data = {
    login: storage[1]
  };
  const template = _.template(templateStr);
  const result = template(data);
  console.log(result);
  return cb(null, result);
};

const writeFile = R.curry((filePath, data, cb) => {
  console.log('writing file');
  //console.log(filePath);
  fs.writeFile(filePath, data, function (err) {
    if (err) {
      return cb(err);
    }
    return cb();
  });

});

const outcome = (err) => {
  if (err) {
    return console.log(err);
  }
  console.log('All done');
};

async.waterfall([
  readFile(HTML_TEMPLATE, []),
  readFile(JS_TEMPLATE),
  applyTemplate,
  writeFile(OUTPUT_TEMPLATE)
], outcome);

