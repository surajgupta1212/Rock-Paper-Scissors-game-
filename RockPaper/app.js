let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genComChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
    //rock, paper, Scissors

}

const drawGame = () => {
    // console.log("game was draw.");
    msg.innerText = "Game Drawed😒";
    msg.style.backgroundColor = "black";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        // console.log("You Won!👌");
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `YOU Won!👌 Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        // console.log("Computer Won!");
        computerScore++;
        compScorePara.innerText = computerScore;
        msg.innerText = `YOU Lose!🖥️ ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    // console.log("user choice = ", userChoice);
    //Generate Computer Choice
    const compChoice = genComChoice();
    // console.log("comp choice = ", compChoice);
    
    if (userChoice === compChoice) {
        //game is draw
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            //scissors, paper are the choices left for comp
            userWin = compChoice === "paper" ? false : true;
        }

        else if (userChoice === "paper") {
            // rock, paper are the left choices for comp
            userWin = compChoice === "scissors" ? false : true;
        }

        else {
            // rock, scissors are the left choices for comp
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
