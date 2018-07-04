'use strict';

let quickSort = require('../../sort/quicksort/quickSort.js');

describe('quicksort', () => {
  it('returns array if length < 2', () => {
    let outcome = quickSort([2]);
    expect(outcome).toEqual([2]);
  })
})
