function radixSort(array) {
  if(array.length < 2) {
    return array
  }
 
  let radix = 10;
//Determine min and max values
  let min = array[0];
  let max = array[0];

  for(i = 0; i < array.length; i++) {
    if(array[i] < min) {
      min = array[i]
    } else if(array[i] > max) {
      max = array[i];
    }
  }

  let exponent = 1
  while ((max - min) / exponent >= 1) {
    array = sortByDigit(array, radix, exponent, min);
    exponent = exponent * radix;
  }

  return array;
}

//function to sort by digits
function sortByDigit(array, radix, exponent, min){

  let bucketIndex = 0
  let buckets = new Array(radix);
  let output = new Array(array.length);

for (i = 0; i < radix; i++) {
    buckets[i] = 0;
  }

  for(i = 0; i < radix; i++){
    bucketIndex = Math.floor(((array[i] - min) / exponent) % radix);
    buckets[bucketIndex]++;
  }

  for(i = 1; i < radix; i++) {
    buckets[i] += buckets[i -1];
  }

  for(i = array.length - 1; i >= 0; i--) {
    bucketIndex = Math.floor(((array[i] - min) / exponent) % radix);
    output[--buckets[bucketIndex]]
= array[i];  
}

  for (i = 0; i < array.length; i++) {
    array[i] = output[i];
  }

  return array;
}
