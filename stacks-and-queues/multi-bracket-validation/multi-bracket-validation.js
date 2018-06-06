function balancedBraces(str) {
  var stack = [];
  var openBracket = { '{': '}', '[': ']', '(': ')' };
  var closeBracket = { '}': true, ']': true, ')': true };
  
  for (var i = 0; i < str.length; i ++) {
    var item = str[i];
    if (openBracket[item]) {
      stack.push(item);
    } else if (closeBracket[item]) {
      if (openBracket[stack.pop()] !== item) return false;
    }
  }
  
  return stack.length === 0;
};

module.exports = balancedBraces;