/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function (nums) {
//   j = 1;
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] != nums[i - 1]) {
//       nums[j] = nums[i];
//       j++;
//     }
//   }
//   return j;
// };

const nums = [2, 3, 4, 6, 4, 1]
const removeDuplicates = function(nums) {
  const result = nums.filter((value, index) => nums.indexOf(value) === index)
  // const newArr = [...new Set(nums)] // none sorted
  nums.length = 0
  nums.push(...result)
  return nums
}

removeDuplicates(nums)

console.log(nums)

