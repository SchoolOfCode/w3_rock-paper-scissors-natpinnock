let form = document.querySelector("form");

form.addEventListener("submit", getUserName);

let userName = "";
function getUserName(e) {
  e.preventDefault();
  let letters = /^[A-Za-z]+$/;
  let capitals = /[A-Z]/;
  userName = document.getElementById("#name").value;
  console.log(userName.match(letters));
  if (userName.length >= 10) {
    let userMessage = document.getElementById("#startgame");
    userMessage.innerText = `User name must be less than 10 characters long!`;
  } else if (userName.match(letters) === null) {
    let userMessage = document.getElementById("#startgame");
    userMessage.innerText = `User name must contain letters only!`;
  } else if (userName.charAt(0) !== userName.charAt(0).toUpperCase()) {
    let userMessage = document.getElementById("#startgame");
    userMessage.innerText = `User name must start with a capital letter!`;
  } else {
    let userMessage = document.getElementById("#startgame");
    userMessage.innerText = `Hello ${userName}! Select Rock, Paper or Scissors to start the game!`;
  }
}

let gamesPlayed = 0;
let playerScore = 0;
let totalWins = 0;
let totalDraws = 0;
let totalLosses = 0;

let startButtons = document.querySelectorAll(".player-move");

for (let i = 0; i < startButtons.length; i++) {
  startButtons[i].addEventListener("click", playerMove);
}

function playerMove() {
  playerMove = this.innerText;
  gamesPlayed++;
  let totalGames = document.querySelector(".games-played");
  totalGames.innerText = gamesPlayed;
  let move = document.querySelector(".player-moves");
  move.innerText = playerMove;

  let gameChoices = ["rock", "paper", "scissors"];
  let computerMove = gameChoices[Math.floor(Math.random() * 3)];
  let computerList = document.querySelector(".computer-moves");
  computerList.innerText = computerMove;

  function getWinner(playerMove, computerMove) {
    if (playerMove === "rock") {
      if (computerMove === "rock") {
        return 0;
      } else if (computerMove === "paper") {
        return -1;
      } else if (computerMove === "scissors") {
        return 1;
      }
    } else if (playerMove === "paper") {
      if (computerMove === "rock") {
        return 1;
      } else if (computerMove === "paper") {
        return 0;
      } else if (computerMove === "scissors") {
        return -1;
      } else {
        console.log("error");
      }
    } else if (playerMove === "scissors") {
      if (computerMove === "rock") {
        return -1;
      } else if (computerMove === "paper") {
        return 1;
      } else if (computerMove === "scissors") {
        return 0;
      } else {
        console.log("error");
      }
    }
  }

  let result = "";
  let score = getWinner(playerMove, computerMove);

  if (score === 0) {
    result = "draw";
  } else if (score === 1) {
    result = "win";
  } else {
    result = "lose";
  }
  playerScore = playerScore + score;
  totalScore = document.querySelector(".total-score");
  totalScore.innerText = playerScore;

  let gameResult = document.querySelector(".result");
  gameResult.innerText = result;

  if (result === "win") {
    totalWins++;
  }

  if (result === "draw") {
    totalDraws++;
  }

  if (result === "lose") {
    totalLosses++;
  }

  let wins = document.querySelector(".win-total");
  wins.innerText = totalWins;

  let draw = document.querySelector(".draw-total");
  draw.innerText = totalDraws;

  let loss = document.querySelector(".loss-total");
  loss.innerText = totalLosses;
}

let endButton = document.querySelector("button.end-game");
endButton.addEventListener("click", endStats);

function endStats() {
  alert(
    `Thank you for playing ${userName}! You played ${gamesPlayed} games and you scored ${playerScore} points!`
  );
}
//would like to change this to moving to a new page with the results, rather than using an alert

//CODE FROM EARLIER TASKS THAT WENT ONTO BE REFACTORED
// if (result === 1 || -1) {
//   alert(
//     `You chose: ${playerMove}. The computer chose ${computerMove}. You scored ${result} point!`
//   );
// } else {
//   alert(
//     `You chose: ${playerMove}. The computer chose ${computerMove}. You scored ${result} points!`
//   );
// }
// playerScore = playerScore + result;
// console.log(`Score = ${playerScore}`);
// gamesPlayed++;
// console.log(`Games played = ${gamesPlayed}`);

// playAgain = confirm("Do you want to play again?!");
//if esc is pressed then confirm = false?

//Task 1 - Logic

//If playerMove = rock and computerMove = rock then result is draw
//If playerMove = rock and computerMove = paper then result is computerWin
//If playerMove = rock and computerMove = scissors then result is playerWin

//If playerMove = paper and computerMove = rock then result is playerWin
//If playerMove = paper and computerMove = paper then result is draw
//If playerMove = paper and computerMove = scissors then result is computerWin

//If playerMove = scissors and computerMove = rock then result is computerWin
//If playerMove = scissors and computerMove = paper then result is playerWin
//If playerMove = scissors and computerMove = scissors then result is draw

// let playerMove = "rock";
// let computerMove = "paper";

// if (playerMove === "rock") {
//   if (computerMove === "rock") {
//     console.log("draw");
//   } else if (computerMove === "paper") {
//     console.log("computer wins!");
//   } else if (computerMove === "scissors") {
//     console.log("player wins!");
//   } else {
//     console.log("error");
//   }
// } else if (playerMove === "paper") {
//   if (computerMove === "rock") {
//     console.log("player wins!");
//   } else if (computerMove === "paper") {
//     console.log("draw");
//   } else if (computerMove === "scissors") {
//     console.log("computer wins!");
//   } else {
//     console.log("error");
//   }
// } else if (playerMove === "scissors") {
//   if (computerMove === "rock") {
//     console.log("computer wins!");
//   } else if (computerMove === "paper") {
//     console.log("player wins!");
//   } else if (computerMove === "scissors") {
//     console.log("draw");
//   } else {
//     console.log("error");
//   }
// } else {
//   console.log("Try again, you must enter rock, paper or scissors");
//
