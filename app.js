'use strict';

// Collect user's name, and customize greeting to user based on their input
function greeting() {
  var userName = prompt('What is your name?');
  alert('Very nice to meet you, ' + userName + '.  I always need new friends.  Say, do you want to play a guessing game about each other- I will go, first.');

  var userChoice = prompt();

  // What if a user makes an inappropriate choice like 'Get out of my face!'? How can I extend the function to handle that? //
  if (userChoice.toLowerCase() === 'yes' || userChoice.toLowerCase() === 'y') {
    // Show 'Outcome'
    alert('Yes, you want to play; GREAT!');
  }

  else if (userChoice.toLowerCase() === 'no' || userChoice.toLowerCase() === 'n') {
    // Show 'Outcome'
    alert('No, you do not want to play...I guess that about you, too!');
  }

  else {
    // Show 'Outcome'
    alert('No, you do not want to play...I guess that about you, too!');
  }

// Question 1
function question1() {
  var equality = prompt('Is my middle name, Dwayne?');
  if (equality.toLowerCase() === 'yes' || equality.toLowerCase() === 'y') {
    // Show 'Outcome'
    alert('Great, guess!');
  }

  else if (equality.toLowerCase() === 'no' || equality.toLowerCase() === 'n') {
    // Show 'Outcome'
    alert('Actually, my middle name is Dwayne.');
  }

  else {
    // Show 'Outcome'
    alert('Like I said, I really know a lot about you, already.');
  }
}

// Question 2
function question2() {
  var share = prompt('Do you believe I like to share?');
  if (share.toLowerCase() === 'yes' || share.toLowerCase() === 'y') {
    // Show 'Outcome'
    alert('You are correct.');

  }
  else if (share.toLowerCase() === 'no' || share.toLowerCase() === 'n') {
    // Show 'Outcome'
    alert('Good try.  Sometimes, I do not feel like sharing; but I do it anyway, as if I do');
  }
  else {
    // Show 'Outcome'
    alert('Come on: think of your fellow man...And the world, will be a better place...');
  }
}

// Question 3
function question3(){
  var love = prompt('Do you believe that I am a Marine?');
  if (love.toLowerCase() === 'yes' || love.toLowerCase() === 'y') {
    // Show 'Outcome'
    alert('You are terrific!');
  }
  else if (love.toLowerCase() === 'no' || love.toLowerCase() === 'n') {
  // Show 'Outcome'
    alert('Actually, I served 3 combat deployments, 2 humanitarian operations; and several temporary assignment duties- just saying.');
  }

  else {
    // Show 'Outcome'
      alert('Guess.');
  }

// Question 4
function question4() {
  var wings = prompt('Do you think I like chicken wings?');
  if (wings.toLowerCase() === 'yes' || wings.toLowerCase() === 'y') {
    // Show 'Outcome'
    alert('Yes! Actually, it depends on who makes them.');
  }
  else if (wings.toLowerCase() === 'no' || wings.toLowerCase() === 'n') {
    // Show 'Outcome'
    alert('That was not a trick question; but thanks for not stereotyping me.');
  }

  else {
    // Show 'Outcome'
    alert('Guess.');
  }

// Question 5
function question5() {
  var lunch = prompt('So, where are we going for lunch- I knew you like me- you are buying me lunch, right?');
  if (lunch.toLowerCase() === 'yes' || lunch.toLowerCase() === 'y') {
    // Show 'Outcome'
    alert('Yes, I knew I like you!');}
  else if (lunch.toLowerCase() === 'no' || lunch.toLowerCase() === 'n') {
    // Show 'Outcome'
    alert('I eat cheap...');
  }
  else {
    // Show 'Outcome'
    alert('Think of your fellow man...put a little love in your heart.');
  }

// Call the functions
greeting();
question1();
question2();
question3();
question4();
question5();
