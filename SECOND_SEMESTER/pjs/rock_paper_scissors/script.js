// Math.random() "generates random values from 0-1", if we multiply if to 3 so it will generate the random values from 0-2.9

// Math.floor() "discard the values after from dot", if we want to get only number without point like only 0 1 2

// flag = when ever we create the game in which there is two participents so we create flag that defines

// flag userWin = if true -> so user wins and computer loss
// flag userLose = if false -> so user lose and computer wins

// only one flag is enough because the computer win/lose and user win/lose is parallel to each other

// initial scores

let userScore = 0
let computerScore = 0

let msg = document.getElementById("msg")

let userScoreDom = document.getElementById("user-score")
let computerScoreDom = document.getElementById("computer-score")

let choices = document.querySelectorAll(".choice")

for (let choice of choices) {
    console.log(choice)
    choice.addEventListener("click", function () {
        let userChose = choice.getAttribute("id")


        playGame(userChose)
    })
}


function genComputerChoice() {
    let computerOptions = ["rock", "paper", "scissors"]
    let randomIndex = Math.floor(Math.random() * 3)
    return computerOptions[randomIndex]

}

function playGame(userChoice) {
    console.log("You chose:", userChoice)

    const computerChoice = genComputerChoice()

    console.log("Computer Chosses:", computerChoice)

    if (userChoice === computerChoice) {
        drawGame()

    } else {

        let userWin = true

        if (userChoice === "rock") {
            userWin = computerChoice === "scissors" ? true : false
        } else if (userChoice === "paper") {
            userWin = computerChoice === "rock" ? true : false
        } else {
            userWin = computerChoice === "paper" ? true : false
        }

        showWinner(userWin)

    }

}


function showWinner(userWin) {
    if (userWin) {
        userScore++
        userScoreDom.innerText = userScore
        console.log("You Win!")
        msg.innerText = "Congratulatoins! You Win"
        msg.style.backgroundColor = "green"
    } else {
        computerScore++
        computerScoreDom.innerText = computerScore
        console.log("Computer Win!")
        msg.innerText = "Bad Luck! You Lose"
        msg.style.backgroundColor = "red"
    }
}

function drawGame() {
    console.log("Draw")
    msg.innerText = "Draw, Play Again"
    msg.style.backgroundColor = "#0f0f64"
}
