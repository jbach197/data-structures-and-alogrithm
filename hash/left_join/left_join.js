'use strict';

class LeftJoin {
  mergeLeft(leftTable, rightTable) {
    let joinedTable = {};  

    Object.keys(leftTable).forEach(function(key) {
      if(key in rightTable) {
        Object.keys(rightTable[key]).forEach(function(nestedKey) {
          joinedTable[nestedKey] = [leftTable[key][nestedKey], rightTable[key][nestedKey]];
        });
      } else {
        Object.keys(leftTable[key]).forEach(function(nestedKey) {
          joinedTable[nestedKey] = [leftTable[key][nestedKey], null];
        });
      }
    });
    return joinedTable;
  }
}

module.exports = LeftJoin;