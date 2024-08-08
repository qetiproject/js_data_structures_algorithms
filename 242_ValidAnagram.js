// https://leetcode.com/problems/valid-anagram/

// const s = "anagram", t = "nagaram"
const s = "rat", t = "car"

// const isAnagram = function(s, t) {
//     s = s.split("").sort()
//     t = t.split("").sort()
 
//     if(s.length != t.length) {
//      return false
//     }
 
//     for(let i in s){
//      if(s[i] != t[i] ) {
//          return false
//      }
//     }
//     return true
// }

const isAnagram = function(s, t) {
    if(s.length != t.length) {
        return false
    }

    let countS = {}, countT = {}

    for(let char of s) {
        countS[char] = (countS[char] || 0) + 1
    }

    for(let char of t) {
        countT[char] = (countT[char] || 0) + 1
    }

    for(let char in countS) {
        if(countS[char] != countT[char]) {
            return false
        }
    }

    return true

}

console.log(isAnagram(s, t))