'use strict';

/* deps: mocha */
var assert = require('assert');
var yearRange = require('./');
console.log(yearRange(1992))

describe('yearRange', function () {
  it('should create a regex for a range of same-length years:', function () {
    assert.deepEqual(/^(199[2-9]|200[0-9]|201[0-5])$/, yearRange(1992, 2015));
    var re = yearRange(1992, 2015);

    assert.equal(re.test('1992'), true);
    assert.equal(re.test('1993'), true);
    assert.equal(re.test('1999'), true);
    assert.equal(re.test('2001'), true);
    assert.equal(re.test('2008'), true);
    assert.equal(re.test('2011'), true);
    assert.equal(re.test('2015'), true);

    assert.equal(re.test('12015'), false);
    assert.equal(re.test('1991'), false);
    assert.equal(re.test('2016'), false);
    assert.equal(re.test('2015.1'), false);
    assert.equal(re.test('20151'), false);
  });

  it('should create a regex for a range of different-length years:', function () {
    assert.deepEqual(/^([0-9]|[1-9][0-9]|[1-9][0-9]{2}|1[0-9]{3})$/, yearRange(0, 1999));
    var re = yearRange(0, 1999);

    assert.equal(re.test('0'), true);
    assert.equal(re.test('1'), true);
    assert.equal(re.test('200'), true);
    assert.equal(re.test('201'), true);
    assert.equal(re.test('1991'), true);
    assert.equal(re.test('1992'), true);
    assert.equal(re.test('1993'), true);
    assert.equal(re.test('1999'), true);

    assert.equal(re.test('2001'), false);
    assert.equal(re.test('2008'), false);
    assert.equal(re.test('2011'), false);
    assert.equal(re.test('2015'), false);
    assert.equal(re.test('12015'), false);
    assert.equal(re.test('2016'), false);
    assert.equal(re.test('2015.1'), false);
    assert.equal(re.test('20151'), false);
  });
});
