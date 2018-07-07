const HashMap = require('./repeated-word.js');

let Hash = new HashMap();
let longWord = '';

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

console.log(dup);