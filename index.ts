#! /usr/bin/env node

import inquirer from "inquirer";

// 1) computer will generate a random number
// 2) input from user for guessing number
// 3) compare the number picked by computer and number guessed by user and show result

//let randomNumber = 7 (to set a known value for game)
// if you want to set an unknown value for the game then

let randomNumber = Math.floor(Math.random() * 6 + 1);

let userInput = await inquirer.prompt([
  {
    name: "playerGuess",
    message:"Can you guess the number I am thinking of? Enter your guess below between 1-6",
    type: "number"
  },
]);

if (userInput.playerGuess === randomNumber) 
{console.log("congratulations! Right on target");} 

else {console.log("Oh no! That wasn't quite it. Keep guessing");}
