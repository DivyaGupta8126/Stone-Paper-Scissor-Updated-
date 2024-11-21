let userScore=document.getElementById("userScore");
let compScore=document.getElementById("compScore");
userVal=0
compVal=0;
let msg=document.getElementById("msg");
let choices=document.getElementsByClassName("choice");
console.log(choices);

function genRan() {
   let values=["rock","paper","scissors"];
   let randomIndex=Math.floor(Math.random()*3);
   return values[randomIndex];
}

function playGame(userChoice) {
    let compChoice=genRan();
    console.log(userChoice+" "+compChoice);
    if(userChoice===compChoice)
    {
        drawGame();
    }
    else if(userChoice==="rock" &&compChoice==="scissors")
    {
        userVal++;
        userWin(compChoice);
       
    }
    else if(userChoice==="paper" && compChoice==="rock")
    {
        userVal++;
        userWin(compChoice);
        
    }
    else if (userChoice==="scissors" && compChoice==="paper")
    {
        userVal++;
        userWin(compChoice);
       
    }
    else
    {
        compVal++;
        compWin(compChoice);
        
    }
    }
    

function drawGame()
{
console.log("Game is draw.");
msg.innerText="Game is draw.";
}

function userWin(compChoice)
{

    userScore.innerHTML= userVal;
    console.log("User Wins");
    msg.innerText="User wins as computer chosed "+compChoice;
    msg.style.backgroundColor="green";

}

function compWin(compChoice) {

    compScore.innerText=compVal;
    console.log("Computer Wins");
    msg.innerText="Computer wins as computer chosed " +compChoice;
    msg.style.backgroundColor="red";
}


for(let val of choices) {
   let userChoice=val.getAttribute("id");
    val.addEventListener("click",()=>{
        playGame(userChoice)
    })
}

