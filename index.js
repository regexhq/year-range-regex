/*!
 * year-range-regex <https://github.com/regexps/year-range-regex>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var isNumber = require('is-number');
var toRegexRange = require('to-regex-range');
var cache = {};

module.exports = function (start, end) {
  if (!isNumber(start)) {
    throw new RangeError('invalid year range.');
  }

  var key = start + '-' + end;
  if (cache.hasOwnProperty(key)) {
    return cache[key];
  }

  if (!isNumber(end)) {
    end = start;
  }

  var re = new RegExp('^(' + toRegexRange(start, end) + ')$');
  return cache[key] || (cache[key] = re);
};

