// https://medium.com/@francesco.saviano87/mastering-javascript-arrays-10-progressive-exercises-b88e23d1b787

// Exercise 1: Array Reversal
// Problem: Learn how to reverse the order of elements in an array.

let arr = [1, 2, 3, 4, 5];
function reverseArray(arr) {
  return arr.reverse();
}
console.log(reverseArray(arr)); // Output: [5, 4, 3, 2, 1]

// Exercise 2: Sum of Elements
// Problem: Calculate the sum of elements in an array.

let arr = [1, 2, 3, 4, 5];
function sumElements(arr) {
  return arr.reduce((acc, val) => acc + val, 0);
}
console.log(sumElements(arr)); // Output: 15

// Exercise 3: Finding the Maximum

// Problem: Find the maximum value in an array.

let arr = [1, 2, 3, 4, 5];
function findMax(arr) {
  return Math.max(...arr);
}
console.log(findMax(arr)); // Output: 5

// Exercise 4: Filtering Even Numbers
// Problem: Create an array of only even numbers.
let array = [1, 2, 3, 4, 5, 6];
function filterEven(arr) {
  return arr.filter((num) => num % 2 === 0);
}
console.log(filterEven(array)); // Output: [2, 4, 6]

// Exercise 5: Merging Arrays
// Problem: Merge two arrays into one.

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}
console.log(mergeArrays(array1, array2)); // Output: [1, 2, 3, 4, 5, 6]

// Exercise 6: Counting Occurrences
// Problem: Count how many times an element appears in an array.

let array = [1, 2, 2, 3, 3, 3, 4];
function countOccurrences(arr, element) {
  return arr.filter((x) => x === element).length;
}
console.log(countOccurrences(array, 3)); // Output: 3

// Exercise 7: Removing Duplicates
// Problem: Remove duplicate elements from an array.
let array = [1, 2, 2, 3, 4, 4, 5];
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
console.log(removeDuplicates(array)); // Output: [1, 2, 3, 4, 5]

// Exercise 8: Mapping and Modifying
// Problem: Multiply each element of an array by a number.

let array = [1, 2, 3, 4, 5];
function multiplyElements(arr, multiplier) {
  return arr.map((num) => num * multiplier);
}
console.log(multiplyElements(array, 2)); // Output: [2, 4, 6, 8, 10]

// Exercise 9: Finding Minimum and Maximum
// Problem: Find both the minimum and maximum values in an array.

let array = [1, 2, 3, 4, 5];
function findMinMax(arr) {
  return { min: Math.min(...arr), max: Math.max(...arr) };
}
console.log(findMinMax(array)); // Output: { min: 1, max: 5 }

// Exercise 10: Flattening Arrays
// Problem: Flatten an array of arrays into a single array.

let array = [
  [1, 2],
  [3, 4],
  [5, 6],
];
function flattenArray(arr) {
  return arr.flat();
}
console.log(flattenArray(array)); // Output: [1, 2, 3, 4, 5, 6]
