//! IS PALINDROME?

const chosenWord = prompt("Enter a word");

/**
 * function that checks whether the given word is a palindrome 
     split('') change "radar" in ["r", "a", "d", "a", "r"]
     reverse() reverses the array
     join('') return the string to "radar" 
 * @param {string} word 
 * @returns {boolean}
 */
function isPalindroma(word) {
  let reversedWord = word.split("").reverse().join("");

  if (word === reversedWord) {
    return true;
  }
  return false;
}


if (isPalindroma(chosenWord)) {
  console.log(`The word: ${chosenWord} is a palindrome`);
} else {
  console.log(`The word: ${chosenWord} is not a palindrome`);
}


//! EVEN OR ODD

const sceltaUtente = prompt("Choose even or odd?")
const numeroUtente = prompt("Choose a number from 1 to 5?")

/** */
function 