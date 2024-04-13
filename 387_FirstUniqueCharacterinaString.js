/**
 * @param {string}
 * @return {number}
 */
var firstUniqChar = function (s) {
  for (let i = 0; i < s.length; i++) {
    c = s.charAt(i);
    if (s.indexOf(c) === s.lastIndexOf(c)) {
      return i;
    }
  }
  return -1;
};

console.log(firstUniqChar("oeetcode"));
