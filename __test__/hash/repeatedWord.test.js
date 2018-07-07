'use strict';

const HashMap = require('../../hash/repeatedWord/hashMap.js');

describe('Tests for Repeated Word for Whiteboard 31', () => {
  let Hash = new HashMap();
  
  it('Test if the correct word is found as a duplicate, and check for exact word count', () => {
    let longWord = 'but it was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness';
    const myHashTable = {};
    let dup = '';
    let words = longWord.toLowerCase().split(/[ ,.]+/);
    let index = 0;

    while (dup.length < 1) {
      myHashTable[Hash.hashCode(words[index])] ? dup = words[index] : (myHashTable[Hash.hashCode(words[index])] = words[index]);
      index++;
      if (index === words.length) {
        break;
      }
    }
    expect(dup).toBe('it');
  });

  it('Test if there was no duplicate found', () => {
    let longWord = 'there are no duplicates in this long string. Better luck next time!';
    const myHashTable = {};
    let dup = '';
    let words = longWord.toLowerCase().split(/[ ,.]+/);
    let index = 0;

    while (dup.length < 1) {
      myHashTable[Hash.hashCode(words[index])] ? dup = words[index] : (myHashTable[Hash.hashCode(words[index])] = words[index]);
      index++;
      if (index === words.length) {
        break;
      }
    }

    expect(dup).toBe('');
  });

  it('make sure it is not case sensitive', () => {
    let longWord = 'but It was the best of times, it was the worst of times, IT was the age of wisdom, iT was the age of foolishness';
    const myHashTable = {};
    let dup = '';
    let words = longWord.toLowerCase().split(/[ ,.]+/);
    let index = 0;

    while (dup.length < 1) {
      myHashTable[Hash.hashCode(words[index])] ? dup = words[index] : (myHashTable[Hash.hashCode(words[index])] = words[index]);
      index++;
      if (index === words.length) {
        break;
      }
    }
    expect(dup).toBe('it');
  });
});
