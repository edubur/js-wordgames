// exercise 2:
// English to Pig Latin Translator

//     Description: Create a program that translates English text to Pig Latin.
//     Requirements:
//         The program should take an English phrase as an input from process.argv.
//         Convert each word to Pig Latin:
//             If a word starts with a consonant and a vowel, put the first letter of the word at the end of the word and add “ay.”
//                 Example: Happy = appyh + ay = appyhay
//             If a word starts with two consonants move the two consonants to the end of the word and add “ay.”
//                 Example: Child = Ildch + ay = Ildchay
//             If a word starts with a vowel add the word “way” at the end of the word.
//                 Example: Awesome = Awesome +way = Awesomeway
//         Output the translated phrase to the console.

// Planning steps:
// 1. take user input from process.argv
// declare variable that stores user input

const userInput = process.argv[2]?.toLowerCase();

// missing: error catching, if userInput is faulty

// 2. define all possible scenarios
// 2.1 consonants[0] + vowels[1]
// 2.2 consonants[0] + consonants[1]
// 2.3 vowels[0]

const vowels = ["a", "e", "i", "o", "u"];

const consonants = [
  "b",
  "c",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "m",
  "n",
  "p",
  "q",
  "r",
  "s",
  "t",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// search the userInput string with userInput.search()
// the output needs to be stored in a let variable, so it can be edited

let pigLatin = "";

if (vowels.includes(userInput[0])) {
  pigLatin = userInput + "way";
} else if (vowels.includes(userInput[1])) {
  pigLatin = userInput.slice(1) + userInput.slice(0, 1) + "ay";
} else {
  pigLatin = userInput.slice(2) + userInput.slice(0, 2) + "ay";
}

// output to the user
console.log(`${pigLatin}`);

// find case for 1 letter input?
