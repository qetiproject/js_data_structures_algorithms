// Longest Word
// Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. Words may also contain numbers, for example "Hello world123 567"

function LongestWord(sen) {
  const words = sen.split(" ");
  if (words.length === 1) {
    return sen;
  }
  let longestWord = words[0];
  for (let i = 1; i < words.length; i++) {
    const current = words[i].replace(`/[^\w\]g\, ""`);
    const longestWordCurrent = longestWord.replace(`/[^\w\]g\, ""`);
    if (current.length > longestWordCurrent.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}

// function LongestWord(sen) {
//   const words = sen.replace(/[^\w\s]/g, "").split(" ");

//   let longestWord = words[0]; // Assume the first word is the longest initially

//   for (let i = 1; i < words.length; i++) {
//     const currentWord = words[i].replace(/[^\w]/g, ""); // Remove punctuation from the current word
//     const currentLongestWord = longestWord.replace(/[^\w]/g, ""); // Remove punctuation from the current longest word
//     if (currentWord.length > currentLongestWord.length) {
//       longestWord = words[i]; // Update longestWord if a longer word is found
//     }
//   }
//   return longestWord;
// }
// keep this function call here
console.log(LongestWord("fun#12 time"));
