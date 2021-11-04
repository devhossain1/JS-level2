var scores, roundScore, activePlayer, dice, gamePlaying;
init();
var lastDice;
document.querySelector('.dice').style.display='none';

document.querySelector('.btn--roll').addEventListener('click',function(){

    if(gamePlaying){
      //1. random number
    let dice1 = Math.floor(Math.random()*6)+1;
    let dice2 = Math.floor(Math.random()*6)+1;
    //2. display the result
    document.getElementById('dice-1').style.display='block';
    document.getElementById('dice-2').style.display='block';
   
    document.getElementById('dice-1').src='dice-' + dice1 +'.png';
    document.getElementById('dice-2').src='dice-' + dice2 +'.png';

    //3. update the round score if the rolled number is not a 1
    if(dice1 !==1 && dice2 !==1){
        roundScore += dice1 + dice2;
        document.querySelector('#current--' + activePlayer).textContent = roundScore;
    }else{
        nextPlayer();
        //  document.querySelector('.player--0').classList.remove('player--active');
       //  document.querySelector('.player--1').classList.add('player--active');
    }
    /*
    if(dice===6 && lastDice===6){
        //scores will be lossed
        scores[activePlayer]=0;
        document.querySelector('#score--' + activePlayer).textContent = 0;
        nextPlayer();
    }else if(dice!==1){
         roundScore += dice;
         document.querySelector('#current--' + activePlayer).textContent = roundScore;
     }else{
         nextPlayer();
         //  document.querySelector('.player--0').classList.remove('player--active');
        //  document.querySelector('.player--1').classList.add('player--active');
     }
     lastDice = dice;
     */
    }
});

document.querySelector('.btn--hold').addEventListener('click',function(){
    if(gamePlaying){
      //add current score to global
     scores[activePlayer] += roundScore

     //update UI
     document.querySelector('#score--' + activePlayer).textContent = scores[activePlayer];
     var input = document.querySelector('.final-score').value;
     var winningScore;
     //undefined, null, 0, "" are coerce to false
     //anything else coerse to true
    if(input){
       winningScore=input;
    }else{
        winningScore=30;
    } 

     //check if player won the game
     if(scores[activePlayer] >= winningScore){
         document.querySelector('#name--' + activePlayer).textContent= 'Winner!';
         displayNone();
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
   
    displayNone();
   
}
document.querySelector('.btn--new').addEventListener('click', init);

function init(){
    scores=[0,0];
    roundScore= 0;
    activePlayer=0;
    gamePlaying =true;
document.getElementById('score--0').textContent='0';
document.getElementById('score--1').textContent='0';
document.getElementById('current--0').textContent='0';
document.getElementById('current--1').textContent='0';

displayNone();

document.getElementById('name--0').textContent= 'player 1';
document.getElementById('name--1').textContent= 'player 2';

document.querySelector('.player--0').classList.remove('player--winner');
document.querySelector('.player--1').classList.remove('player--winner');
document.querySelector('.player--0').classList.remove('player--active');
document.querySelector('.player--1').classList.remove('player--active');
document.querySelector('.player--0').classList.add('player--active');
}

function displayNone(){
    document.getElementById('dice-1').style.display='none';
    document.getElementById('dice-2').style.display='none';
}

// document.querySelector('#current--' + activePlayer).textContent = dice;
// document.querySelector('#current--' + activePlayer).innerHTML ='<emp>'+dice+'</emp>'
// let x = document.querySelector('#score--0').textContent;
