// Have the function CodelandUsernameValidation(str) take the str parameter being passed and determine if the string is a valid username according to the following rules:

// 1. The username is between 4 and 25 characters.
// 2. It must start with a letter.
// 3. It can only contain letters, numbers, and the underscore character.
// 4. It cannot end with an underscore character.

// If the username is valid then your program should return the string true, otherwise return the string false.
// Examples
// Input: "aa_"
// Output: false
// Input: "u__hello_world123"
// Output: true

function CodelandUsernameValidation(str) {
  if (str.length < 4 || str.length > 25) {
    return false;
  }
  let firstChar = str.charAt(0);
  if (!"/[a-zA-Z]/".test(firstChar)) {
    return false;
  }

  if (!"/^[a-zA-Z0-9_]+$/".test(str)) {
    return false;
  }

  if (!str.endsWidth("_")) {
    return false;
  }
  return true;
}

// keep this function call here
console.log(CodelandUsernameValidation("aa_"));
console.log(CodelandUsernameValidation("u__hello_world123"));
