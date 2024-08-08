// URLify a given string (Replace spaces with %20)

const word = "Mr John Smith   "

const urlify = function (word) {
    for(let i of word) {
        if(i === " "){
          word = word.replace(i, "%20")
        }
      }
}

urlify(word)