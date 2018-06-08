'use strict';


function hanoi(discs, origin, destination, between) {

  if (discs >= 1) {
    hanoi(discs - 1, origin, between, destination);
    console.log('Move disk from Tower ', origin, ' to Tower ', destination);     
    hanoi(discs - 1, between, destination, origin);
  }  
  return;
}

hanoi(2, 'A', 'B', 'C');