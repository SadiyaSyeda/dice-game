  /*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/




var totalScore,roundScore,activePlayer,dice;
totalScore=[0,0];
roundScore=0;
activePlayer=0;
document.getElementById("score-0").innerHTML=0;
document.getElementById("score-1").innerHTML=0;
document.getElementById("current-0").innerHTML=0;
document.getElementById("current-1").innerHTML=0;
//dice=Math.floor(Math.random()*6)+1;
//document.getElementById("current-" + activePlayer).innerHTML=dice;
//document.onload=function(){document.getElementById("dice").style.display="none";}
var btnRoll=document.getElementsByClassName('btn-roll');
for(var i=0;i<btnRoll.length;i++){
btnRoll[i].addEventListener("click",function(){
var dice=Math.floor(Math.random()*6)+1;
var diceDOM=document.getElementById("dice");
//diceDOM.style.display="block";
diceDOM.src="dice-"+dice+".png";

if(dice >1){
roundScore+=dice;
document.getElementById("current-"+activePlayer).innerHTML=roundScore;
}
else{
nextPlayer();
}
});}

document.querySelector('.btn-hold').addEventListener('click',function(){
totalScore[activePlayer]+=roundScore;
document.getElementById('score-'+activePlayer).innerHTML=totalScore[activePlayer];
if(totalScore[activePlayer]>=100){
document.getElementById('name-'+ activePlayer).innerHTML="Winner!!";
}
else{
nextPlayer();
}
});

function nextPlayer(){
activePlayer===0?activePlayer=1:activePlayer=0;
roundScore=0;
document.getElementById("current-0").innerHTML=0;
document.getElementById("current-1").innerHTML=0;

/*document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.add('active');*/

document.querySelector('.player-0-panel').classList.toggle('active');
document.querySelector('.player-1-panel').classList.toggle('active');
}




//document.getElementById("diceId").style.display="none";