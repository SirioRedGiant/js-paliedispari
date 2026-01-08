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

const userChoice = prompt("Choose even or odd?").toLowerCase();
const userNumber = parseInt(prompt("Choose a number from 1 to 5?"));

/**
 **      This function generates a random integer between 1 and 5 (inclusive)
 **      Math.random(): Generates a random decimal number between 0 (inclusive) and 1 (exclusive). For example: 0.1234... or 0.9876....
 *       * 5: Multiply that number by 5. The result will be a decimal between 0 and 4,999....
 **      Math.floor(...): Rounds the number down to the nearest integer. This then transforms the range into whole numbers: 0, 1, 2, 3, 4
 **      + 1: Moves the range forward by one. So, instead of 0-4, you get a number between 1 and 5
 * @returns {number}
 */
function randomNumGenerator() {
  return Math.floor(Math.random() * 5) + 1;
}

const computerNumb = randomNumGenerator();
const pickedNumbSum = userNumber + computerNumb;

/**
 * FUNCTION THAT CHECKS IF THE SUM IS EVEN OR ODD
 * I use the "%" property to check when the parameter is even
 * @param {number} sumNumeral
 * @returns {string}
 */
function evenOrOddChecker(sumNumeral) {
  if (sumNumeral % 2 === 0) {
    return "even";
  }
  return "odd";
}

const sumResult = evenOrOddChecker(pickedNumbSum);

// The winner is...

if (sumResult === userChoice) {
  console.log(
    `the sum is (${pickedNumbSum}, so ${sumResult}. Player win, congratulation!`
  );
} else {
  console.log(
    `the sum is ${pickedNumbSum}, so ${sumResult}. Loser, try again, maybe you'll be luckier `
  );
}
