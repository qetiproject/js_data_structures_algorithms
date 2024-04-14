// Questions Marks
// Have the function QuestionsMarks(str) take the str string parameter, which will contain single digit numbers, letters, and question marks, and check if there are exactly 3 question marks between every pair of two numbers that add up to 10. If so, then your program should return the string true, otherwise it should return the string false. If there aren't any two numbers that add up to 10 in the string, then your program should return false as well.

// For example: if str is "arrb6???4xxbl5???eee5" then your program should return true because there are exactly 3 question marks between 6 and 4, and 3 question marks between 5 and 5 at the end of the string.
// Examples
// Input: "aa6?9"
// Output: false
// Input: "acc?7??sss?3rr1??????5"
// Output: true

function QuestionsMarks(str) {
  var matches = str.match(/\d[\w\?]*?\d/g);
  if (!matches) return false;

  var result = false;

  for (var match of matches) {
    if (Number(match[0]) + Number(match[match.length - 1]) === 10) {
      // count the numbers of ?'s in the substring between two numbers
      if (match.split("").filter((char) => char === "?").length === 3) {
        result = true;
      } else {
        return false;
      }
    }
  }

  return result;
}

// keep this function call here
console.log(QuestionsMarks("acc?7??sss?3rr1??????5"));
