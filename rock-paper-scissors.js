// exercise 1:
// Rock Paper Scissors

//     Description: Implement a basic Rock Paper Scissors game.
//     Requirements:
//         The program should take the player’s move as an input from process.argv.
//         The program should randomly generate a move for the computer.
//         Determine the winner based on the rules of Rock Paper Scissors.
//         Output the result (win, lose, or draw) to the console.
//     Example: node rockPaperScissors.js rock # Output: You chose rock. Computer chose scissors. You win!

// Planning steps:
// 1. take user input from process.argv
// declare variable that stores user input (and make it lowercase)
const userInput = process.argv[2]?.toLowerCase();
// "?" only accesses if value is not undefined or null to avoid crashes

// make sure choices are limited
const validInput = ["rock", "paper", "scissors"];

// show choice
console.log(`User picked: ${userInput}`);

// compare userInput with possible choices
// if not properly picked, end program and tell user about possible choices
if (!validInput.includes(userInput)) {
  console.log("Invalid input! Please pick rock, paper or scissors.");
  process.exit(1);
}

// 2. let pc generate random move (rock, paper, scissors)
// we need math.random() and math.floor()

const random = Math.floor(Math.random() * validInput.length);
const pcPick = validInput[random];
console.log(`PC picked: ${pcPick}`);

// 3. compare both values to a "library"
// 4. return output
