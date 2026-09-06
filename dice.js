
let player1Score=0;
let player2Score=0;
function rollDice(){
  let roll= Math.floor(Math.random() * 6) + 1;
  let rollSec= Math.floor(Math.random() * 6) + 1;
  document.querySelector(".dice").src=`dice ${roll}.jpg`;
  document.querySelector(".dice-sec").src=`dice ${rollSec}.jpg`;
  let score1=document.querySelector(".score-1");
  let score2=document.querySelector(".score-2");
  if(roll>rollSec){
    document.querySelector("#result").innerHTML="Player 1 Wins! 🎉";
    document.querySelector("#result").classList.add("result");
    player1Score+=1;
    score1.innerHTML=player1Score;

  }else if(roll<rollSec){
    document.querySelector("#result").innerHTML="Player 2 Wins! 🎉";
    document.querySelector("#result").classList.add("result");
    player2Score+=1;
    score2.innerHTML=player2Score;
  }else{
    document.querySelector("#result").innerHTML="Draw!";
    document.querySelector("#result").classList.add("result");
  }
 
}


 

  


  
  



