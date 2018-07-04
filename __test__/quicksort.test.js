'use strict';

let quickSort = require('../sort/quicksort/quickSort.js');

describe('quickSort', () => {
  it('returns array if length of 1', () => {
    let outcome = quickSort([2]);
    expect(outcome).toEqual([2]);
  });

  it('returns array no length', () => {
    let outcome = quickSort([]);
    expect(outcome).toEqual([]);
  });

  it('quickSort() sorts array correctly', () => {
    let outcome = quickSort([1,6,9,10,3,5,-10]);
    expect(outcome).toEqual([-10, 1, 3, 5, 6, 9, 10]);
  });

});