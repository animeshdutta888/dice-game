/*
GAME RULES:ec

- The game has 2 players, playing in rounds
- In each turn, a player rolls 2 dice and predicts whether the combined value is more than 7 or less than 7 or equal to 7.
- Then its the next player's turn
- The first player to reach 5 correct predictions wins the game

*/
var activePlayer=0;
var scores=[0,0];
var b=0;
var d;var dice1; var dice2;
var d1=document.querySelector('.dice1');
var d2=document.querySelector('.dice2');
var game=true;
d1.style.display='none';
d2.style.display='none';
function init()
{
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');

  document.querySelector('.player-0-panel').classList.add('active');
  activePlayer=0;
  scores=[0,0];
  d1.style.display='none';
  d2.style.display='none';
  document.getElementById('score-0').textContent='0';
  document.getElementById('score-1').textContent='0';
  document.getElementById('name-0').textContent='Player 1';
  document.getElementById('name-1').textContent='Player 2';

}
document.querySelector('.btn-new').addEventListener('click',function(){
  init();
  game=true
});

document.querySelector('.btn-roll').addEventListener('click',function(){
  if(game)
  {
    if(document.getElementById('radio1').checked==false && document.getElementById('radio2').checked==false && document.getElementById('radio3').checked==false)
    {
      alert("Select an option");
    }
    else {
dice1=Math.floor(Math.random()*6+1);
dice2=Math.floor(Math.random()*6+1);
d1.style.display='block';
d2.style.display='block';
d1.src='dice1-' +dice1+ '.png';
d2.src='dice1-' +dice2+ '.png';
d=dice1+dice2;
 if(document.getElementById('radio1').checked==true) {
  if(d<7)
 {
  scores[activePlayer]++;
  document.getElementById('score-'+activePlayer).textContent=scores[activePlayer];
 }
  document.getElementById('radio1').checked = false;
}
else if(document.getElementById('radio2').checked==true) {
 if(d===7)
  {
  scores[activePlayer]++;
  document.getElementById('score-'+activePlayer).textContent=scores[activePlayer];
  }
  document.getElementById('radio2').checked = false;
}
else if(document.getElementById('radio3').checked==true) {
 if(d>7)
  {
  scores[activePlayer]++;
  document.getElementById('score-'+activePlayer).textContent=scores[activePlayer];
  }
  document.getElementById('radio3').checked = false;
}
console.log("checked");
if(scores[activePlayer]==5)
{
  document.getElementById('name-'+activePlayer).textContent='Winner!';
  game=false;}
if(game)
{
setTimeout(
    function() {
      nextPlayer();
    }, 700);
}
}
}
});




function nextPlayer()
 {
   activePlayer===0?activePlayer=1:activePlayer=0;
   document.querySelector('.player-0-panel').classList.toggle('active')
   document.querySelector('.player-1-panel').classList.toggle('active')
   d1.style.display='none';
   d2.style.display='none';
 }
