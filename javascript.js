console.log("Javascript Test");

let humanScore = 0;
let computerScore = 0;

// write a function that gets computer getComputerChoice
function getComputerChoice() {
  // create a variable for the choice, and math value to determine which one to use
  let choice, mathVal;

  // use math random to generate a number0-1
  mathVal = Math.random();
  console.log(mathVal);

  // if it is .0-.33 set computer choice to "rock"
  if (mathVal <= 0.33) {
    choice = "rock";
  }
  // if it is .34-.66 set computer choice to "paper"
  else if (mathVal > 0.33 && mathVal <= 0.66) {
    choice = "paper";
  }
  // if it is .66-1 set computer choice to "scissor"
  else if (mathVal > 0.66) {
    choice = "scissor";
  }
  // return string
  return choice;
}
console.log(getComputerChoice());

//create a function to getHumanChoice
function getHumanChoice() {
  // create a variable to save their choice
  let choice;
  // ask the user to enter rock paper or scissor
  choice = prompt("Enter your choice - rock, paper, or scissor.");
  // return their choice
  return choice;
}

console.log(getHumanChoice());
