let axe = document.getElementById("axe");
let sword = document.getElementById("sword");
let shield = document.getElementById("shield");
let userDisplayEl = document.getElementById("userDisplayEl");
let computerDisplayEl = document.getElementById("computerDisplayEl");
let wordsDisplayEl = document.getElementById("wordsDisplayEl");
let tiesDisplayEl = document.getElementById("tiesDisplayEl");

let compScore = 0;
let tieCount = 0;
let userScore = 0;
let decisions = ["axe", "sword", "shield"];

axe.addEventListener("click", (e) => {
  if (e.target.id === "axe") {
    rpsRound("axe");
    checkWinner();
  }
});

sword.addEventListener("click", (e) => {
  if (e.target.id === "sword") {
    rpsRound("sword");
    checkWinner();
  }
});

shield.addEventListener("click", (e) => {
  if (e.target.id === "shield") {
    rpsRound("shield");
    checkWinner();
  }
});

function computerChoice() {
  let choices = decisions[Math.floor(Math.random() * 3)];
  return choices;
}

function rpsRound(playerSelection) {
  playerSelection = "axe";
  let computerSelection = computerChoice();

  if (playerSelection === computerSelection) {
    ++tieCount;
    tiesDisplayEl.innerText = tieCount;
    wordsDisplayEl.innerText =
      "Both sides are neck and neck! I am on the edge of my seat!";
  } else if (playerSelection === "axe" && computerSelection === decisions[2]) {
    ++compScore;
    computerDisplayEl.innerText = compScore;
    wordsDisplayEl.innerText =
      "The opponent's shield parried your axe! The opponent has you on the ropes!";
  } else if (
    playerSelection === "sword" &&
    computerSelection === decisions[0]
  ) {
    ++userScore;
    userDisplayEl.innerText = userScore;
    wordsDisplayEl.innerText =
      "Your sword overcomes the opponent's blunt axe! You have a fighting chance!";
  } else if (
    playerSelection === "shield" &&
    computerSelection === decisions[0]
  ) {
    ++userScore;
    userDisplayEl.innerText = userScore;
    wordsDisplayEl.innerText =
      "You parried your opponent's hasty attack and knocked off their balance!";
  } else if (playerSelection === "axe" && computerSelection === decisions[1]) {
    ++userScore;
    userDisplayEl.innerText = userScore;
    wordsDisplayEl.innerText =
      "Your axe overcame the opponent's hastiness with his sword! You have him on the ropes!";
  } else if (playerSelection === "axe" && computerSelection === [1]) {
    ++compScore;
    computerDisplayEl.innerText = compScore;
    wordsDisplayEl.innerText =
      "The opponent's sword overpowered your axe, but you still have a fighting chance!";
  }
}

function checkWinner() {
  if (userScore === 5) {
    wordsDisplayEl.innerText = "You sent your opponent to Valhalla!";
    resetPrompt();
  } else if (compScore === 5) {
    wordsDisplayEl.innerText =
      "You are sent to Valhalla! A funeral will be held in your heroic name.";
    resetPrompt();
  }
}

function resetPrompt() {
  let user = prompt("Would you like to reset the game? y for yes or n for no?");
  if (user === "y") {
    compScore = 0;
    computerDisplayEl.innerText = compScore;
    tieCount = 0;
    tiesDisplayEl.innerText = tieCount;
    userScore = 0;
    userDisplayEl.innerText = userScore;
    wordsDisplayEl.innerText = "Who will be sent to Valhalla today?";
  } else if (user === "n"){
    compScore = 0;
    computerDisplayEl.innerText = compScore;
    tieCount = 0;
    tiesDisplayEl.innerText = tieCount;
    userScore = 0;
    userDisplayEl.innerText = userScore;
    wordsDisplayEl.innerText = "Who will be sent to Valhalla today?";
  } 

}
