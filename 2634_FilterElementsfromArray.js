// https://leetcode.com/problems/filter-elements-from-array
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  arr.filter((x) => x > 10);
  arr.foreach((x) => console.log(x));
  return arr;
};

// type FilterFn<T> = (element: T, index?: number, array?: T[]) => boolean;

// function filter<T>(arr: T[], fn: FilterFn<T>): T[] {
//   const filteredArr: T[] = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (fn(arr[i], i, arr)) {
//       filteredArr.push(arr[i]);
//     }
//   }
//   return filteredArr;
// }
