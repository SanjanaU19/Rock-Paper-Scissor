let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const getCompChoice = () => {
    let options = ["Rock", "Paper", "Scissor"];
    const randIDX = Math.floor(Math.random() * 3);
    return options[randIDX];
};


const drawGame = () => {
    console.log("Game was a Draw!");
    msg.innerText = "Game Was Draw!.Play Again.";
};

const showWinner =(userWin ,userChoice ,compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "You win!";
        msg.style.backgroundColor="Green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = "You lost!";
        msg.style.backgroundColor="Red";
    }
}

const playGame = (userChoice) => {
    console.log("User choice:", userChoice);

    const compChoice = getCompChoice();
    console.log("Computer choice:", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin =true;
        if(userChoice==="Rock"){
           userWin = compChoice ==="paper" ? false: true;
        }else if(userChoice === "paper"){
            userWin = compChoice ==="scissors" ? false:true;
        }else{
            userWin = compChoice ==="Rock" ?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("Choice was clicked:", userChoice);
        playGame(userChoice);
    });
});
