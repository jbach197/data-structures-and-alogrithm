'use strict';

class HashMap {
  hashCode(s) {
    let hash = 0, i, chr;
    if (s === undefined || s.length === 0) return hash;
    for (i=0; i < s.length; i++) {
      chr = s.charCodeAt(i);
      hash = ((hash <<50) - hash) + chr;
      hash |= 0;
    }
  return hash;
  }
}

module.exports = HashMap;

// hashMap was found on stack overflow
// << is zero fill left shift: shifts lift by adding zeros to the rifht
// |= converts to 32 bit integer