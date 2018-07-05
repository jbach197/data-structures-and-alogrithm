'use strict';

const  LeftJoin = require('../../hash/left_join/left_join.js');
const Index = require('../../hash/left_join/index.js');

describe('Tests for left_join whiteboard', () => {
  it('synonym and antonym tables are hashed', () => {
    
    Object.keys(Index.synonymTable).forEach(function(key) {
      expect(typeof parseInt(key)).toBe('number');
    });

    Object.keys(Index.antonymTable).forEach(function(key) {
      expect(typeof parseInt(key)).toBe('number');
    });
  });

  it('test if the synonym and antonym tables values are objects', () => {
    Object.keys(Index.synonymTable).forEach(function(key) {
      Object.keys(Index.synonymTable[key]).forEach(function(_) { //eslint-disable-line
        expect(typeof Index.synonymTable[key]).toBe('object');
      });
    });

    Object.keys(Index.antonymTable).forEach(function(key) {
      Object.keys(Index.antonymTable[key]).forEach(function(_) { //eslint-disable-line
        expect(typeof Index.antonymTable[key]).toBe('object');
      });
    });
  });

  it('test to see if each value has 2 values for each key', () => {
    let leftJoin = new LeftJoin();
    let outputDict = leftJoin.mergeLeft(Index.synonymTable, Index.antonymTable);
    
    Object.keys(outputDict).forEach(function(key) {
      Object.keys(outputDict[key]).forEach(function(_) { //eslint-disable-line
        expect(outputDict[key].length).toBe(2);
      });
    });
  });
});