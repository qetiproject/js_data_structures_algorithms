//  https://leetcode.com/problems/concatenation-of-array

 
var getConcatenation = function(nums) {
 // let result = []
    // for(let i=0; i< nums.length; i++){
    //     result.push(nums[i])
    // }

    // for(let j=0; j< nums.length; j++){
    //     result.push(nums[j])
    // }

    // return result

    return [...nums, ...nums]

}