const buttons = document.querySelectorAll("button");
const outcomeArea = document.getElementsByClassName("text-container");
let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
let gameResult;

//add click event for each button
buttons.forEach((button) => {
    button.addEventListener("click", function () {
        myFunction(this.id);
    });
    button.addEventListener("click", function () {
        declareWinner(computerScore, playerScore);
    });
});

//set playerSelection = to the id of the button that they clicked
function myFunction(btnId) {
    playerSelection = btnId;
    document.getElementById("player-choice").textContent = `You chose: ${playerSelection}`;
    let computerSelection = computerPlay();
    document.getElementById("computer-choice").textContent = `Computer generated: ${computerSelection}`;
    gameResult = playRound(playerSelection, computerSelection);
    document.getElementById("outcome").textContent = gameResult;
    document.getElementById("player-score").textContent = `player: ${playerScore}`;
    document.getElementById("computer-score").textContent = `computer: ${computerScore}`;
    document.getElementById("result-container").classList.add("border");
}

function computerPlay() {
    const choices = ["rock", "paper", "scissors"]
    let x = choices[Math.floor(Math.random() * 3)];
    return x;
}

function declareWinner(computerScore, playerScore) {
    if (computerScore > 4) {
        document.getElementById("result-container").classList.add("hidden");
        document.getElementById("game-result").textContent = `Computer Wins ${computerScore} - ${playerScore}`;
    } else if (playerScore > 4) {
        document.getElementById("result-container").classList.add("hidden");
        document.getElementById("game-result").textContent = `You Win ${playerScore} - ${computerScore}`;
    }
}

function playRound(playerSelection, computerSelection) {
    //if it's a tie
    if (playerSelection === computerSelection) {
        return "it's a tie";
    }

    //if player choose rock
    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            computerScore++;
            return ("You lose: Paper beats Rock");
        } else {
            playerScore++;
            return ("You win: Rock beats Scissors");
        }
    }
    //if play choose paper
    if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            computerScore++;
            return ("You lose: Scissors beats Paper");
        } else {
            playerScore++;
            return ("You win: Paper beats Rock");
        }
    }
    //if player choose scissors
    if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            computerScore++;
            return ("You lose: Rock beats Scissors");
        } else {
            playerScore++;
            return ("You win: Scissors beats Paper");
        }
    }
}