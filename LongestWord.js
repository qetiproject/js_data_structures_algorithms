// Longest Word
// Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. Words may also contain numbers, for example "Hello world123 567"

function LongestWord(sen) {
  const words = sen.replace(/[^\w\s]/g, "").split(" ");
  console.log(words);

  let longestWord = words[0]; // Assume the first word is the longest initially

  for (let i = 1; i < words.length; i++) {
    const currentWord = words[i].replace(/[^\w]/g, ""); // Remove punctuation from the current word
    const currentLongestWord = longestWord.replace(/[^\w]/g, ""); // Remove punctuation from the current longest word
    if (currentWord.length > currentLongestWord.length) {
      longestWord = words[i]; // Update longestWord if a longer word is found
    }
  }
  return longestWord;
}

console.log(LongestWord("fun@d final"));
