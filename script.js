let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice")
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score")

//generate computer choice using modules//
const genCompChoice=()=>{
    const options=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame=()=>{
    msg.innerText="game was draw! try again";
    msg.style.backgroundColor="#081b31";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`you win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`you lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame=()=>{
    console.log("user choice = ",userChoice);
    //generate computer choice
    const compChoice=genCompChoice();
    console.log("computer choice = ",compChoice);

    if(userChoice==compChoice){
        //Draw Game
        drawGame()    }
    else{
        let userWin=true;
        if(userChoice=="rock"){
            //paper or scissor
            userWin= compChoice==="paper"?false : true;
        }
        else if(userChoice=="paper"){
            //rock or scissor
            userWin=compChoice==="scissor"?false : true;
        }
        else{
            //rock or paper
            userWin=compChoice==="rock"?false : true;
        }
        showWinner(userWin,userChoice,compChoice)
    }


}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        userChoice=choice.getAttribute("id")
        playGame();
    })
    })