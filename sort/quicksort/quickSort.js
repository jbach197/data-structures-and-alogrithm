function quicksort(array) {

  if(array.length <2 ){
    return array;
  }

  let pivot = arr[0];
  let left = [];
  let right = [];

for(let i = 1;  i < arr.length; i++) {
  if (arr[i] < pivot)
    left.push(arr[i]);
  else
    right.push(list[i]);
}

return [
  quickSort(left), pivot, quickSort(right)
];

}
