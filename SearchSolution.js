// find longest palidrome in string. თუ სიგრძე < 2 return "none"

function longestPalidrome(str) {
  if (!str || str.length < 2) return "none";
  let longest = "";
  for (let i = 0; i < str.length; i++) {
    let oddPalidrome = expandFromCenter(str, i, i);
    if (oddPalidrome.length > longest.length) {
      longest = oddPalidrome;
    }

    let evenPalidrome = expandFromCenter(str, i, i + 1);
    if (evenPalidrome.length > longest.length) {
      longest = evenPalidrome;
    }
  }
  return longest.length > 2 ? longest : "none";
}

function expandFromCenter(str, left, right) {
  while (left >= 0 && right < str.length && str[left] === str[right]) {
    left--;
    right++;
  }
  return str.slice(left + 1, right);
}

console.log(longestPalidrome("asghasgaad"));
