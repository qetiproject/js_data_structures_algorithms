// How to find the maximum character in a string and how many times appear

const word = "heLLLoo$$3p"

const countMaximumCharacter = function(word) {
  

    let obj = {}

    for(let char of word) {
        obj[char] = (obj[char] || 0) + 1;
    }
 
    let maximumChar = 0
    for(let char in obj) {
       if( maximumChar < obj[char]) {
         maximumChar = obj[char] 
        }
    }
    return maximumChar

}

console.log(countMaximumCharacter(word))

