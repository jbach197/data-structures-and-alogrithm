'use strict';

let radixSort = require('../../sort/radixSort/radixSort.js');

describe('radixSort', () => {
  it('radixSort() returns original array if 1 element', () => {
    let outcome = radixSort([2]);
    expect(outcome).toEqual([2]);
  });

  it('radixSort() sorts correctly', () => {
    let outcome = radixSort([1,6,20,7,2]);
    expect(outcome).toEqual([ 1, 2, 6, 7, 20]);
  });

  it('radixSort() sorts array correctly', () => {
    let outcome = radixSort([1,6,2018,20,7,2,500]);
    expect(outcome).toEqual([ 1, 2, 6, 7, 20, 500, 2018]);
  });

});