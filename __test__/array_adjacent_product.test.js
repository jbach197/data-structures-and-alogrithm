'use strict';

let insertShiftArray = require('../../array_shift.js');

describe('Array shift', () => {

  it('check insertion for array with even index', () => {
    let newArray = insertShiftArray([2, 4, 6, 8], 5);
    expect(newArray).toEqual([2, 4, 5, 6, 8]);
  });

  it('check insertion for array with odd index', () => {
    let newArray = insertShiftArray([1, 3, 5], 2);
    expect(newArray).toEqual([1, 3, 2, 5]);
  });

  it('check insertion for combination of element types', () => {
    let newArray = insertShiftArray([1, 'z', 2], 'a');
    expect(newArray).toEqual([1, 'z', 'a', 2]);
  });
});  