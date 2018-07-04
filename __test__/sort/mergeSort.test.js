'use strict';

let mergeSort = require('../../sort/mergesort/mergesort.js');

describe('mergeSort', () => {
  it('mergeSort() returns original array if no element', () => {
    let outcome = mergeSort([]);
    expect(outcome).toEqual([]);
  });

  it('mergeSort() returns original array if only 1 element', () => {
    let outcome = mergeSort([2]);
    expect(outcome).toEqual([2]);
  });

  it('mergeSort() sorts array correctly', () => {
    let outcome = mergeSort([1,6,9,10,3,5,-10]);
    expect(outcome).toEqual([-10, 1, 3, 5, 6, 9, 10]);
  });

});