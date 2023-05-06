'use strict';

// Generating a random number
let secretNumber = Math.trunc(Math.random() * 20);

let score = 20;

let highscore = 0;

// to displaying message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// to displaying score
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

// Creating a click event for check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //   when input is empty
  if (!guess) {
    displayMessage('⛔ Not a number!');

    // when input is greater then 20
  } else if (guess > 20) {
    displayMessage('Please enter number btween 1 and 20!');

    // when input is equle to secretnumber
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct number!');

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('body').style.color = '#000';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;

      document.querySelector('.highscore').textContent = highscore;
    }

    // when input is not equle to secretnumber
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too Low!');

      score--;

      displayScore(score);
    } else {
      displayMessage('💥 You lose!');

      displayScore(0);

      document.querySelector('body').style.backgroundColor = '#ff0202';
    }
  }
});

// Creating event listner for Again button click

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayScore(score);
  displayMessage('Start guessing...');

  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('body').style.color = '#eee';
  document.querySelector('.number').style.width = '15rem';
});
