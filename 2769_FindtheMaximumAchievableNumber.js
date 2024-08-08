// https://leetcode.com/problems/find-the-maximum-achievable-number/

// const theMaximumAchievableX = function(num, t) {
//     let res = num
//     for (let i=0; i<t; i++){
//         res += 2
//     }
//     return res
// };

const theMaximumAchievableX = function(num, t) {
    return num + t * 2
};