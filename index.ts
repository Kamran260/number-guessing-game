// Number Guessing Game

import inquirer from "inquirer";

let GuessNumber = Math.floor(Math.random()*10);

let humanNumber = await inquirer.prompt(
    {
        name: "Human Guess Number",
        message: "Enter a number you guess",
        type: "number"
    }
    )
    if(GuessNumber === humanNumber["Human Guess Number"]){
        console.log(`Hurra! your Guess is matched \n Human Guess ${humanNumber["Human Guess Number"]} Machine Guess ${GuessNumber}`);
        
    }else{
        console.log(`Alas! your Guess is not matched \n Human Guess ${humanNumber["Human Guess Number"]} Machine Guess ${GuessNumber}`);
    }