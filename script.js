// 'use strict';
// // console.log(document.querySelector('.message').textContent);

// // document.querySelector('.message').textContent = "Correct Number!😎"
// // document.querySelector('.number').textContent =13;
// // document.querySelector('.score').textContent =10;
// // document.querySelector('.guess').value =29;

// const secretnumber=Math.trunc(Math.random()*20)+1;

// let score=20

// document.querySelector('.number').textContent = secretnumber;

// document.querySelector('.check').addEventListener
// ('click',function() {
// const guess =Number (document.querySelector('.guess').value);
// console.log(typeof guess,guess)

// if(!guess){
//     document.querySelector('.message').textContent = "No Number!⛔" 
// }else if(guess===secretnumber){
//     document.querySelector('.message').textContent = "Correct Number!😎" 
// }else if(guess>secretnumber){
//     if(score>0){
//     document.querySelector('.message').textContent = "Too High!📈";
// score--;
// document.querySelector('.score').textContent =score;
// }else{document.querySelector('.message').textContent = " game over😂";}
// }else if(guess<secretnumber){
//     if(score>0){
//     document.querySelector('.message').textContent = "Too Low!📉";
//     score--;
//     document.querySelector('.score').textContent =score;
// }else{
//     document.querySelector('.message').textContent = "you lose😂";
// }}

// });



'use strict';

// This is a number guessing game script

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = "Correct Number!😎"
// document.querySelector('.number').textContent =13;
// document.querySelector('.score').textContent =10;
// document.querySelector('.guess').value =29;

// Generate a secret number between 1 and 20
const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20; // Initialize the score to 20

// Display the secret number on the webpage
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  // Retrieve the user's guess from the input field
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);

  // Check if the user has entered a guess
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!⛔';
    // If the user has not entered a guess, do not change the score
    // and do not check if the guess is correct
  } else if (guess === secretNumber) {
    document.querySelector('body').style.backgroundColor = 'rgba(255, 255, 255,
    document.querySelector('.message').textContent = 'Correct Number!😎';
    // If the user's guess is correct, do not change the score
  } else if (guess > secretNumber) {
    // Check if the user still has a score remaining
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too High!📈';
      score--; // Decrease the score by 1
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Game Over!😂';
    }
  } else if (guess < secretNumber) {
    // Check if the user still has a score remaining
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too Low!📉';
      score--; // Decrease the score by 1
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Game Over!😂';
    }
  }
});

// The rest of the code is for styling the game and handling edge cases