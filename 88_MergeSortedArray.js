// https://leetcode.com/problems/merge-sorted-array

let nums1 = [1,2,3,0,0,0], m = 0, nums2 = [2,5,6], n = 3

const merge = function(nums1, m, nums2, n) {
    let i = m -1;
    let j = n - 1;
    let k = m + n - 1;

    while (j >= 0) {
        if(i >= 0 && nums1[i] > nums2[j]) {
            nums1[k--] = nums1[i--]
        }else {
            nums1[k--] = nums2[j--]
        }
    }
}

