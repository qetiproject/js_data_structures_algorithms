// https://leetcode.com/problems/remove-element

let nums = [3,2,2,3], val = 3

//  Time: O(N)
//  Space: O(1)
const removeElement = function(nums, val) {
    let i = 0, j = 0
    while (i < nums.length) {
        if(nums[i] != val) {
            nums[j] = nums[i]
            j += 1
        }
        i += 1
    }
    return j
}

removeElement(nums, val)

console.log(nums)