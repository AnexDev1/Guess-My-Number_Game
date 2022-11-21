'use strict';

let score = 20;
let randomNum = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.check').addEventListener('click', function () {
  let guess = document.querySelector('.guess').value;
  if (guess == randomNum) {
    if (score > document.querySelector('.highscore').textContent) {
      document.querySelector('.highscore').textContent = score;
    }
    document.querySelector('.message').textContent = '🎉🍾Correct Answer';
    document.querySelector('.number').textContent = guess;
    document.body.style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (!guess) {
    document.querySelector('.message').textContent = '⛔NO Number';
  } else if (score > 0) {
    document.querySelector('.message').textContent = `${
      guess > randomNum ? '📈Too High' : '📉Too Low'
    }`;
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.message').textContent = '😭GameOver';
    score = 0;
  }
});
document.querySelector('.again').addEventListener('click', function () {
  randomNum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.body.style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  score = 20;
  document.querySelector('.guess').value = '';
});
