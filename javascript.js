let humanScore = 0;
let computerScore = 0;

//write a function that takes the input of computer and human to run a round.
function playRound(humanChoice, computerChoice) {
  // make human choice case insensitive, so caps or lowercase works
  let fixedHumanChoice = humanChoice.toLowerCase();

  // if they choose the same thing, return you tied
  if (fixedHumanChoice === computerChoice) {
    return "You both chose " + fixedHumanChoice + "! You Tied!";
  }

  //if human chose rock
  else if (fixedHumanChoice === "rock") {
    //determine if human won or lost
    if (computerChoice === "paper") {
      //increment score
      ++computerScore;
      return "You lost! " + computerChoice + " beats " + fixedHumanChoice;
    }
    //you win because you didn't tie, and paper was not true
    else {
      //increment score
      ++humanScore;
      return (
        "Congrats you won! " + fixedHumanChoice + " beats " + computerChoice
      );
    }
  }

  //if human chose paper
  else if (fixedHumanChoice === "paper") {
    //determine if you lost
    if (computerChoice === "scissor") {
      //increment score
      ++computerScore;
      return "You lost! " + computerChoice + " beats " + fixedHumanChoice;
    }
    //you win because you didn't tie, and scissors was not true
    else {
      //increment score
      ++humanScore;
      return (
        "Congrats you won! " + fixedHumanChoice + " beats " + computerChoice
      );
    }
  }

  //if human chose scissor
  else if (fixedHumanChoice === "scissor") {
    //determine if you lost
    if (computerChoice === "rock") {
      //increment score
      ++computerScore;
      return "You lost! " + computerChoice + " beats " + fixedHumanChoice;
    }
    //you win because you didn't tie, and rock was not true
    else {
      //increment score
      ++humanScore;
      return (
        "Congrats you won! " + fixedHumanChoice + " beats " + computerChoice
      );
    }
  }
}

// write a function that gets computer getComputerChoice
function getComputerChoice() {
  // create a variable for the choice, and math value to determine which one to use
  let choice, mathVal;

  // use math random to generate a number0-1
  mathVal = Math.random();

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

  //logs answer for testing
  console.log("getComputerChoice output: " + choice);

  // return string
  return choice;
}

//create a function to getHumanChoice
function getHumanChoice() {
  // create a variable to save their choice
  let choice;
  // ask the user to enter rock paper or scissor
  choice = prompt("Enter your choice - rock, paper, or scissor.");

  //logs answer for testing
  console.log("getHumanChoice output: " + choice);

  // return their choice
  return choice;
}

// //Play a full 5 round game
// function playGame() {
//   //make a for loop that calls play round 5 times

//   //commenting out 5 rounds so we just play one
//   // for (let i = 1; i < 6; i++) {
//   //output the score and result after each round
//   // console.log("------ Round " + i + " -----");

//   //calls the functions each round to get user and computer choice
//   // const humanSelection = getHumanChoice();
//   // const computerSelection = getComputerChoice();

//   //calls the play round function each round
//   console.log(playRound(humanSelection, computerSelection));

//   //prints the score of the
//   console.log("Human: " + humanScore + " Computer: " + computerScore);
//   // }
// }

let roundCount = 0;

//Adding JS for all buttons
const btn = document.querySelectorAll("button");
const div = document.querySelector("div");
// const subDiv = document.createElement("div");

//Create event listener for each button
btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log(btn.textContent);
    const humanSelection = btn.textContent;
    const computerSelection = getComputerChoice();
    const subDiv = document.createElement("div");
    const gameResult = document.createElement("div");

    let roundResult = "";
    //run playRound when a button is clicked
    //playRound should be input by what button was selected
    roundResult = playRound(humanSelection, computerSelection);

    div.appendChild(subDiv);
    subDiv.textContent = roundResult;

    //Set games for 5 rounds
    if (humanScore >= 5) {
      //Add div to say human wins
      div.appendChild(gameResult);
      gameResult.textContent = "------ Congrats you won this game -----";

      //reset scores
      humanScore = 0;
      computerScore = 0;
    } else if (computerScore >= 5) {
      //Add div to say computer wins
      div.appendChild(gameResult);
      gameResult.textContent = "------ Oh no, the computer won this game -----";

      //reset scores
      humanScore = 0;
      computerScore = 0;
    }
  });
});
