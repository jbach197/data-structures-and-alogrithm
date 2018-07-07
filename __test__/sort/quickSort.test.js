'use strict';

let quickSort = require('../../sort/quickSort/quickSort.js');

describe('quickSort', () => {
  it('quickSort() returns original array if no element', () => {
    let outcome = quickSort([]);
    expect(outcome).toEqual([]);
  });

  it('quickSort() returns original array if only 1 element', () => {
    let outcome = quickSort([2]);
    expect(outcome).toEqual([2]);
  });

  it('quickSort() sorts array correctly', () => {
    let outcome = quickSort([1,6,9,10,3,5,-10]);
    expect(outcome).toEqual([-10, 1, 3, 5, 6, 9, 10]);
  });

});