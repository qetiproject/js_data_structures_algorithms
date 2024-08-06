// https://leetcode.com/problems/chunk-array/description/

var chunck = function(arr, size) {
    const chuncked = []
    let i = 0

    while(i < arr.length) {
        chuncked.push(arr.slice(i, size + i))
        i += size
    }
    return chuncked
}

console.log(chunck([1, 2, 3, 4], 2))