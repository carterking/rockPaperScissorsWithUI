let computerSelection = computerPlay()
const buttons = document.querySelectorAll("button");
let playerSelection;

//add click event for each button
buttons.forEach((button) => {
    button.addEventListener("click", function () {
        myFunction(this.id);
    });
    button.addEventListener("click", function () {
        playRound(playerSelection, computerSelection);
    });
});

//set playerSelection = to the id of the button that they clicked
function myFunction(btnId) {
    playerSelection = btnId;
    console.log("you: ", playerSelection);
    let computerSelection = computerPlay();
    console.log("computer: ", computerSelection);
    console.log(playRound(playerSelection, computerSelection))
}

function computerPlay() {
    const choices = ["rock", "paper", "scissors"]
    let x = choices[Math.floor(Math.random() * 3)];
    return x;
}

function playRound(playerSelection, computerSelection) {
    //if it's a tie
    if (playerSelection === computerSelection) {
        return "it's a tie";
    }

    //if player choose rock
    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return ("You lose: Paper beats Rock");
        } else {
            return ("You win: Rock beats Scissors");
        }
    }
    //if play choose paper
    if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            return ("You lose: Scissors beats Paper");
        } else {
            return ("You win: Paper beats Rock");
        }
    }
    //if player choose scissors
    if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return ("You lose: Rock beats Scissors");
        } else {
            return ("You win: Scissors beats Paper");
        }
    }
}