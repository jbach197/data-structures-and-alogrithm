let binarySearch =  require('../arrays/binarySearch/array_binary_search.js');

describe('binary search', () => { 

  it('returns correct index if number in array', () => {
    let outcome  = binarySearch([1,2,3,4,5], 2);
    expect(outcome).toEqual(1);
  });

  it('returns correct index if number in array', () => {
    let outcome  = binarySearch([1,2,3,4,5], 5);
    expect(outcome).toEqual(4);
  });

  it('returns -1 if number not in array', () => {
    let outcome  = binarySearch([1,2,3,4,5], 10);
    expect(outcome).toEqual(-1);
  });

});