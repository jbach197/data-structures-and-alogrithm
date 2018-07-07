'use strict';

function radixSort(array, radix) {
  if (array.length === 0) {
    return array;
  }

  radix =  10;

  // Determine minimum and maximum values
  var min= array[0];
  var max= array[0];
  for (var i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    } else if (array[i] > max) {
      max = array[i];
    }
  }

  // Perform counting sort on each exponent/digit, starting at LSD
  var exponent = 1;
  while ((max - min) / exponent >= 1) {
    array = sortByDigit(array, radix, exponent, min);

    exponent = exponent * radix;
  }

  return array;
}

function sortByDigit(array, radix, exponent, min) {
  var i;
  var bucketIndex;
  var buckets = new Array(radix);
  var output = new Array(array.length);

  // Initialize bucket
  for (i = 0; i < radix; i++) {
    buckets[i] = 0;
  }

  // Count frequencies
  for (i = 0; i < array.length; i++) {
    bucketIndex = Math.floor(((array[i] - min) / exponent) % radix);
    buckets[bucketIndex]++;
  }

  // Compute cumulates
  for (i = 1; i < radix; i++) {
    buckets[i] += buckets[i - 1];
  }

  // Move records
  for (i = array.length - 1; i >= 0; i--) {
    bucketIndex = Math.floor(((array[i] - min) / exponent) % radix);
    output[--buckets[bucketIndex]] = array[i];
  }

  // Copy back
  for (i = 0; i < array.length; i++) {
    array[i] = output[i];
  }

  return array;
}

module.exports = radixSort;