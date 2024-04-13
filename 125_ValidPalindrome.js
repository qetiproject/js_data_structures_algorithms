// https://leetcode.com/problems/valid-palindrome/

var isPalindrome = function (s) {
  s = s.toLowerCase().replace(/[^a-z0-9]/g, ""); // Convert to lowercase and remove non-alphanumeric characters
  return s === s.split("").reverse().join("");
};

//  Time: O(N)
//  Space: O(N)
function palidrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return str === str.split("").reverse().join("");
}

function palidrome(str) {
  str = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  let left = 0;
  right = str.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

console.log(palidrome("abgd"));
