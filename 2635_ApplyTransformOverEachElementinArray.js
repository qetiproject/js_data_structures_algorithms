//leetcode.com/problems/apply-transform-over-each-element-in-array/

//  Time: O(N)
//  Space: O(1)
var map = function (arr, fn) {
  for (let i = 0; i < arr.length; ++i) {
    arr[i] = fn(arr[i], i);
  }
  return arr;
};

//  Time: O(N)
//  Space: O(N)
var map = function (arr, fn) {
  return arr.reduce((transformedArr, element, index) => {
    transformedArr[index] = fn(element, index);
    return transformedArr;
  }, []);
};
