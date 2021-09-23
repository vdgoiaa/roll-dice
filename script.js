'use strict';

// const dice=Math.trunc(Math.random() * 6 +1);
// console.log(dice);

const diceEl = document.querySelector('.dice');
const currentScore1EL = document.querySelector('#current--0');
const currentScore2EL = document.querySelector('#current--1');
const score1El = document.querySelector('#score--0');
const score2El = document.querySelector('#score--1');
const sectionPlayer1El = document.querySelector('.player--0');
const sectionPlayer2El = document.querySelector('.player--1');

let dice = 0;
let currentPlayer = 0; //0:player 1 || 1:player 2
let currentScore1 = 0; //diem ng choi 1 hien tai
let currentScore2 = 0; //diem ng choi 2 hien tai
let score1=0;
let score2=0;

const switchPlayer = () => {
  currentScore1 = 0;
  currentScore1EL.textContent = currentScore1;
  currentScore2 = 0;
  currentScore2EL.textContent = currentScore2;

  currentPlayer = currentPlayer === 0 ? 1 : 0;
  if (currentPlayer === 0) {
    sectionPlayer1El.classList.add('player--active');
    sectionPlayer2El.classList.remove('player--active');
  } else if (currentPlayer === 1) {
    sectionPlayer2El.classList.add('player--active');
    sectionPlayer1El.classList.remove('player--active');
  }
};

const rollDiceButton = document.querySelector('.btn--roll');
const rollDiceLogic = () => {
  dice = Math.trunc(Math.random() * 6 + 1);
  diceEl.src = `dice-${dice}.png`;
  if (dice === 1) {
    switchPlayer();
  } else {
    if (currentPlayer === 0) {
      currentScore1 += dice;
      currentScore1EL.textContent = currentScore1;
    } else {
      currentScore2 += dice;
      currentScore2EL.textContent = currentScore2;
    }
  }
};
rollDiceButton.addEventListener('click', rollDiceLogic);

const holdButton = document.querySelector('.btn--hold');
const holdLogic = () => {
  if (currentPlayer === 0) {
    score1 += currentScore1;
    score1El.textContent = score1;

    if (score1 >= 10) {
      sectionPlayer1El.classList.add('player--winner');
    } else {
      switchPlayer();
    }
  } else {
    score2 += currentScore2;
    score2El.textContent = score2;

    if (score2 >= 10) {
      sectionPlayer2El.classList.add('player--winner');
    } else {
      switchPlayer();
    }
  }
};
holdButton.addEventListener('click', holdLogic);




const newButton = document.querySelector(".btn--new");
const newLogic=()=>{
  currentScore1 = 0;
  currentScore1EL.textContent = currentScore1;
  currentScore2 = 0;
  currentScore2EL.textContent = currentScore2;

  score1 = 0;
  score1El.textContent = score1;
  score2 = 0;
  score2El.textContent = score2;

  currentPlayer = 0;
  sectionPlayer1El.classList.add('player--active');
  sectionPlayer2El.classList.remove('player--active');

  sectionPlayer1El.classList.remove('player--winner');
  sectionPlayer2El.classList.remove('player--winner');
}
newButton.addEventListener("click",newLogic);

console.log("aaaaaa edit2");


