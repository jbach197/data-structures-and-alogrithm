'use strict';

class HashMap {
  // code to hash a string (found on stack overflow)
  hashCode(s){
    var hash = 0, i, chr;
    if (s === undefined || s.length === 0) return hash;
    for (i = 0; i < s.length; i++) {
      chr   = s.charCodeAt(i);
      hash  = ((hash << 5) - hash) + chr;
      hash |= 0; // Convert to 32bit integer
    }
    return hash;
  }
}

module.exports = HashMap;