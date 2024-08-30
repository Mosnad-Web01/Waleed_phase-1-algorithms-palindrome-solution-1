function isPalindrome(word) {
  // Check if the string is the same forwards and backwards
  const length = word.length;
  for (let i = 0; i < Math.floor(length / 2); i++) {
    if (word[i] !== word[length - 1 - i]) {
      return false; // Not a palindrome
    }
  }
  return true; // It is a palindrome
}

/* 
  Pseudocode:
  1. Get the length of the input string.
  2. Loop from the start of the string to the middle:
     - Compare the character at the current index with the character at the mirrored index from the end.
  3. If any characters don't match, return false.
  4. If all characters match, return true.
*/

/*
  Explanation:
  The `isPalindrome` function checks if a string is a palindrome by comparing characters from both ends of the string, moving towards the center. If all corresponding characters match, the function returns true, indicating the string is a palindrome. Otherwise, it returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // Add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
