console.log("Javascript Test");

// psuedo code
// write a function that gets computer getComputerChoic

function getComputerChoice() {
  // inside the function

  // create a variable for the computer choice
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
