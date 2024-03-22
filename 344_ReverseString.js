// leetcode.com/problems/reverse-string/

var reverseString = function (s) {
  s = s.split("").reverse().join("");
};

//  Time: O(N)
//  Space: O(N)
function reverseString(str) {
  // for (let i = 0; i < str.length; i++) {
  //     const char = str[i]
  //     res = char + res
  // }
  // return res

  return str.split("").reduce((res, char) => {
    res = char + res;
    return res;
  }, "");
}

reverseString("word");
