'use strict'

let insertShiftArray = require('../../arrays/arrayShift/array_shift.js');

describe('insertShiftArray', () => { 

  it('returns number inserted in correct spot with even number in array', () => {
    let outcome  = insertShiftArray([2,4,6,8], 5);
    expect(outcome).toEqual([2,4,5,6,8]);
  });

  it('returns number inserted in correct spot with odd number in array', () => {
    let outcome  = insertShiftArray([2,4,8], 5);
    expect(outcome).toEqual([2,4,5,8]);
  });


  it('returns number inserted into correct spot', () => {
    let outcome = insertShiftArray(['A','B','C'], 1);
    expect(outcome).toEqual(['A','B',1,'C']);
  });
});