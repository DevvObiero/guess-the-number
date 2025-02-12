'use strict';

// Log the current message in the '.message' element in the console
// console.log(document.querySelector('.message').textContent);

// Display a message when the user correctly guesses the number
// document.querySelector('.message').textContent = "Correct Number!😎"

// Display the secret number on the webpage
// document.querySelector('.number').textContent =13;

// Display the initial score on the webpage
// document.querySelector('.score').textContent =10;

// Set an initial guess value for the user
// document.querySelector('.guess').value =29;

// Generate a secret number that the user has to guess
let secretnumber = Math.trunc(Math.random() * 20) + 1;

// Initialize the score to 10
let score = 10;
let highscore = 0;
// Display the secret number on the webpage
let displaymessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  // Get the user's guessed number as a number
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);

  // Check if the user hasn't entered a number and display the correct message
  if (!guess) {
    displaymessage('No Number!⛔');
  }

  // Check if
  // document.querySelector('.message').textContent = "No Number!⛔";

  // Check if the user has guessed the secret number correctly
  else if (guess === secretnumber) {
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    document.querySelector('.message').textContent = 'Correct Number!😎';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretnumber;
    document.querySelector('number').style.width = '30rem';
  } else if (guess !== secretnumber) {
    if (score > 0) {
      // Update the message to indicate that the user's guess is too high
      document.querySelector('.message').textContent =
        guess > secretnumber ? 'Too High!📈' : 'Too Low!📉';

      // Decrement the score
      score--;
      document.querySelector('body').style.backgroundColor = '#800000';
      // Update the score displayed on the webpage
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.number').textContent = secretnumber;
      // Inform the user that the game is over because they ran out of attempts
      document.querySelector('.message').textContent = 'game over😂';
      document.querySelector('body').style.backgroundColor = 'red';
    }
  }
});

document.querySelector('.btn.reset').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  score = 10;
  secretnumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'start Guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').textContentvalue = '';
  document.querySelector('number').style.width = '30rem';
});

// play btn
// Get references to the audio element and play button
const audio = document.getElementById('myAudio');
const playButton = document.getElementById('playButton');

// Toggle play and pause on click
playButton.addEventListener('click', function () {
  if (audio.paused) {
    audio.play();
    // Change icon to pause when audio is playing
    playButton.innerHTML = "<i class='bx bx-pause'></i>";
  } else {
    audio.pause();
    // Change icon back to play when audio is paused
    playButton.innerHTML = "<i class='bx bx-play'></i>";
  }
});
