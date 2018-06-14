'use strict';

function insertShiftArray(arr, n) {
  let newArr = [];
  let middle = Math.ceil(arr.length/2);
  let counter = 0;
    
  for (let i = 0; i < arr.length; i++ ) {
    if(counter === middle){
        
      newArr[counter] = n;
      counter++;
    }
      newArr[counter] = arr[i];
      counter++;      
    }
    return newArr;
}
 module.exports = insertShiftArray;
