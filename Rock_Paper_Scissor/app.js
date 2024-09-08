let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice")
let user_score=document.querySelector("#user-score")
let comp_score=document.querySelector("#comp-score")
const msg=document.querySelector("#msg")

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame=()=>{
    console.log("Game draw")
    msg.innerText="Match Draw!"
    msg.style.backgroundColor="#081b31"
    
}

const showWinner = (userWin) =>{
    if (userWin) {
        userScore++
        user_score.innerText=userScore
        msg.innerText="Congrats! You win."
        msg.style.backgroundColor="green"
    } else {
        compScore++
        comp_score.innerText=compScore
        msg.innerText="Oh! You lose."
        msg.style.backgroundColor="red"
    }
    if (userScore > compScore) {
        user_score.style.color="green";
        comp_score.style.color="red";
    } else {
        user_score.style.color="red";
        comp_score.style.color="green";
    }
}

const playGame=(userChoice)=>{
    
    // Generate computer choice;
    const compChoice=genCompChoice();
    
    if (userChoice===compChoice){
        drawGame();
    } else {
        let userWin=true;
        if (userChoice==="rock"){   //possible conditions: - i. compChoice=paper; ii. compChoice=scissors
            userWin = compChoice==="paper"?false:true;
        } else if (userChoice==="paper") {   //possible conditions: - i. compChoice=rock; ii. compChoice=scissors
            userWin = compChoice==="scissors"?false:true;
        } else {          //possible conditions: - i. compChoice=rock; ii. compChoice=paper
            userWin = compChoice==="rock"?false:true;
        }
        showWinner(userWin);
    }
    
    
    
}

let numChoice=0
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        numChoice++
        const userChoice=choice.getAttribute("id");
        
        playGame(userChoice);

        
    })

    
})