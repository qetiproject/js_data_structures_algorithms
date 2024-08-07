const word = "hello"
const isUnique =function(word) {
    let obj = {}
    for(let char of word) {
       if(obj[char]) {
        return false
       }else {

           obj[char] = 1
       }
    }
    return true
}
console.log(isUnique(word))
