const p1 = {
  button: document.querySelector("#p1Button"),
  score: document.querySelector("#player1Score"),
  playerTotalScore: 0
}

const p2 = {
  button: document.querySelector("#p2Button"),
  score: document.querySelector("#player2Score"),
  playerTotalScore: 0
}

const resetButton = document.querySelector("#p3Button")
const selectWinningScore = document.querySelector("#play")
let winningScore = 21
let gameIsOver = false

function scoreKeeper(player, opponent) {
  if (gameIsOver == false) {
    player.playerTotalScore += 1
    player.score.textContent = player.playerTotalScore
    if (player.playerTotalScore === winningScore) {
      gameIsOver = true
      player.score.classList.add("has-text-success")
      opponent.score.classList.add("has-text-danger")
      player.button.disabled = true
      opponent.button.disabled = true
    }
  }
}

p1Button.addEventListener("click", function () {
  scoreKeeper(p1, p2)
})

p2Button.addEventListener("click", function () {
  scoreKeeper(p2, p1)
})

selectWinningScore.addEventListener("change", function () {
  winningScore = parseInt(this.value)
  reset()
})

p3Button.addEventListener("click", reset)
function reset() {
  gameIsOver = false
  for (let p of [p1, p2]) {
    p.playerTotalScore = 0
    p.score.textContent = p.playerTotalScore
    p.score.classList.remove("has-text-success", "has-text-danger")
    p.button.disabled = false
  }
}
