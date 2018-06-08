'use strict';

let balancedBraces = require('../../stacks-and-queues/multi-bracket-validation/multi-bracket-validation.js');

describe('balanced brackets', () => { 

  it('returns true for matched brackets', () => {
    let outcome  = balancedBraces('[{()}]');
    expect(outcome).toEqual(true);
  });

  it('returns false if not matched', () => {
    let outcome  = balancedBraces('[({}]');
    expect(outcome ).toEqual(false);
  });

  it('disregards other content', () => {
    let outcome = balancedBraces('ab[cd]{}');
    expect(outcome).toEqual(true);
  });
});