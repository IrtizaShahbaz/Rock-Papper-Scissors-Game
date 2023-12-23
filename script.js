let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const drawGame = () => {
  msg.innerText = "Game was Dream. Try Again:)";
  msg.style.backgroundColor = "#C38EDC";
};

const gencompChoice = () => {
  options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorepara.innerText = userScore;
    msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "#1fff0a";
  } else {
    compScore++;
    compScorepara.innerText = compScore;
    msg.innerText = `You Lose! Comp choice ${compChoice} beats yours ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  const compChoice = gencompChoice();

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? true : false;
    } else if (userChoice === "papper") {
      userWin = compChoice === "scissors" ? true : false;
    } else {
      userWin = compChoice === "rock" ? true : false;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
