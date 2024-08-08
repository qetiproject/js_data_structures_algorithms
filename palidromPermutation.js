function checkPalindromePermutation(str) {
    const charCount = new Map()

    for (const char of str.toLowerCase()){
        if(char >= 'a' && char <= 'z') {
            charCount.set(char, (charCount.get(char) || 0) + 1)
        }
    }
    
    let oddCount = 0
    for(const count of charCount.values()) {
        if(count %2 == 1) oddCount ++;
        if(oddCount > 1) return false
    }
    
    return true
}
console.log(checkPalindromePermutation("Tact Coa")); // true
console.log(checkPalindromePermutation("abcd")); // false