"use strict";
// Number Guessing Game
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var GuessNumber = Math.floor(Math.random() * 10);
var humanNumber = await inquirer_1.default.prompt({
    name: "Human Guess Number",
    message: "Enter a number you guess",
    type: "number"
});
if (GuessNumber === humanNumber["Human Guess Number"]) {
    console.log("Hurra! your Guess is matched \n Human Guess ".concat(humanNumber["Human Guess Number"], " Machine Guess ").concat(GuessNumber));
}
else {
    console.log("Alas! your Guess is not matched \n Human Guess ".concat(humanNumber["Human Guess Number"], " Machine Guess ").concat(GuessNumber));
}
