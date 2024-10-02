'use strict';
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';

let score = 20;
let highScore = 0;
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;
document.querySelector('.score').textContent = score;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct  number';
    highScore = Math.max(highScore, score);
    console.log(score, highScore);
    document.querySelector('.highscore').textContent = highScore;
  } else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too high number';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost';
    }
  } else if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too low  number';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost';
    }
  }
});
