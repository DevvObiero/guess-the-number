


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
const secretnumber = Math.trunc(Math.random() * 20) + 1;

// Initialize the score to 20
let score = 20;

// Display the secret number on the webpage
document.querySelector('.number').textContent = secretnumber;

document.querySelector('.check').addEventListener
('click', function () {
    // Get the user's guessed number as a number
    const guess = Number(document.querySelector('.guess').value);
    console.log(typeof guess, guess);

    // Check if the user hasn't entered a number and display the correct message
    if (!guess) {
        document.querySelector('.message').textContent = "No Number!⛔";
    }

    // Check if the user has guessed the secret number correctly
    else if (guess === secretnumber) {
        document.querySelector('.message').textContent = "Correct Number!😎";
    }

    // Check if the user's guess is higher than the secret number
    else if (guess > secretnumber) {
        if (score > 0) {
            // Update the message to indicate that the user's guess is too high
            document.querySelector('.message').textContent = "Too High!📈";

            // Decrement the score
            score--;

            // Update the score displayed on the webpage
            document.querySelector('.score').textContent = score;
        } else {
            // Inform the user that the game is over because they ran out of attempts
            document.querySelector('.message').textContent = "game over😂";
        }
    }

    // Check if the user's guess is lower than the secret number
    else if (guess < secretnumber) {
        if (score > 0) {
            // Update the message to indicate that the user's guess is too low
            document.querySelector('.message').textContent = "Too Low!📉";

            // Decrement the score
            score--;

            // Update the score displayed on the webpage
            document.querySelector('.score').textContent = score;
        } else {
            // Inform the user that they lost the game because they ran out of attempts
            document.querySelector('.message').textContent = "you lose😂";
        }
    }
});