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

//Time: O(N/2)= O(N)
//Space: O(1)
function reverseString(s){
  let n = s.length
  let i = 0, j = n - 1
  while (i < j){
    [s[i], s[j]] = [s[j], s[i]]
    i++;
    j--;
  }
}

reverseString("word");
