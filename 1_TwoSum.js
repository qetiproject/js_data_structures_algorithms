// https://leetcode.com/problems/two-sum/


const twoSum = function(nums, target) {
    obj = {}
    for (let i=0; i< nums.length; i++) {
        let wanted = target - nums[i]
        if(wanted in obj) {
            return [obj[wanted], i]
        }
        obj[nums[i]] = i

    }
};