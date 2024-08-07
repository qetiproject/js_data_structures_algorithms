// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii

const nums = [1,1,1,2,2,3,]

const removeDuplicate = function(nums) {
    let count = 1
    for (let i = 0; i < nums.length; i++) {
       if(nums[i] === nums[i - 1]) {
        count++
        if (count >= 3) {
            nums.splice(i, 1)
            i--;
            count--;
        }
       }
       else {
        count = 1
       }
    }   
}

removeDuplicate(nums)
console.log(nums)