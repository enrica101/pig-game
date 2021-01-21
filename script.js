'use strict';

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const diceEl = document.querySelector('.dice');
const newBtn = document.querySelector('.btn--new');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const name0 = document.getElementById('name--0')
const name1 = document.getElementById('name--1')

let score = [0, 0];
let currentScore = 0;
let activePlayer = 0;

function switchPlayer(){
    document.getElementById(
      `current--${activePlayer}`
    ).textContent = currentScore;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceEl.classList.add('hidden');
 
//rolling a dice
rollBtn.addEventListener('click', () => {
  //Generate a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  //display the dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  //check for rolled 1,
  if (dice !== 1) {
    //Add dice to current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  }else {
      switchPlayer();
  }

});

holdBtn.addEventListener('click', () => {
    //Add current score to score to active player
    score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];

if(score[activePlayer] >=20){
  document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
  document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
}else{
  switchPlayer();
}

})
