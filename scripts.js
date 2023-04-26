"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
const changeColor = function (body){
  document.querySelector("body").style.backgroundColor = body;
}

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  // When the input button is empty
  if (!guess) {
    displayMessage("❌ No Number!");
    // When the player is win
  } else if (guess === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    displayMessage("🎉 Correct Number !");
    changeColor("rgb(157, 255, 127)");
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
    // When the player higher than secretnumber
  } else if (guess !== secretNumber) {
    // When the player guess wrong and score is still bigger than zero
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 too high" : "📈 too low");
      score--;
      document.querySelector(".score").textContent = score;
      // When the score is less than 1 stop the game
    } else {
      displayMessage("💥 You losing the game!");
      document.querySelector(".score").textContent = 0;
      changeColor("#e28743");
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = 20;
  changeColor("white");
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
});
  