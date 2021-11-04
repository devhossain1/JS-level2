
var scores, roundScore, activePlayer, dice, gamePlaying;

init();
document.querySelector('.dice').style.display='none';

document.querySelector('.btn--roll').addEventListener('click',function(){
    if(gamePlaying){
      //1. random number
    let dice = Math.floor(Math.random()*6)+1;
    //2. display the result
    let diceDom = document.querySelector('.dice');
    diceDom.style.display='block';
    diceDom.src='dice-' + dice +'.png';

    //3. update the round score if the rolled number is not a 1
     if(dice!==1){
         roundScore += dice;
         document.querySelector('#current--' + activePlayer).textContent = roundScore;
     }else{
         nextPlayer();
         //  document.querySelector('.player--0').classList.remove('player--active');
        //  document.querySelector('.player--1').classList.add('player--active');
     }
    }
});

document.querySelector('.btn--hold').addEventListener('click',function(){
    if(gamePlaying){
      //add current score to global
     scores[activePlayer] += roundScore

     //update UI
     document.querySelector('#score--' + activePlayer).textContent = scores[activePlayer];
     
     //check if player won the game

     if(scores[activePlayer] >= winningScore){
         document.querySelector('#name--' + activePlayer).textContent= 'Winner!';
         document.querySelector('.dice').style.display = 'none';
         document.querySelector('.player--' + activePlayer).classList.add('player--winner');
         document.querySelector('.player--' + activePlayer).classList.remove('player--active');
         gamePlaying=false;
     }else{
         //next play
         nextPlayer();
     }
    }
    
})

function nextPlayer(){
    //next player
    activePlayer===0 ? activePlayer=1 :activePlayer=0;
    roundScore=0;
    document.getElementById('current--0').textContent='0';
    document.getElementById('current--1').textContent='0';

    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');
   
   document.querySelector('.dice').style.display='none';
   
}
document.querySelector('.btn--new').addEventListener('click', init);

function init(){
    scores=[0,0];
    roundScore= 0;
    activePlayer=0;
    gamePlaying = true;
document.getElementById('score--0').textContent='0';
document.getElementById('score--1').textContent='0';
document.getElementById('current--0').textContent='0';
document.getElementById('current--1').textContent='0';

document.querySelector('.dice').style.display='none';

document.getElementById('name--0').textContent= 'player 1';
document.getElementById('name--1').textContent= 'player 2';

document.querySelector('.player--0').classList.remove('player--winner');
document.querySelector('.player--1').classList.remove('player--winner');
document.querySelector('.player--0').classList.remove('player--active');
document.querySelector('.player--1').classList.remove('player--active');
document.querySelector('.player--0').classList.add('player--active');
}


// document.querySelector('#current--' + activePlayer).textContent = dice;
// document.querySelector('#current--' + activePlayer).innerHTML ='<emp>'+dice+'</emp>'
// let x = document.querySelector('#score--0').textContent;
