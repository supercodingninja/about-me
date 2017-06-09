// As a developer, I want to provide five questions to the user,
// so that they can guess the answers and get to know me.
//
// As a developer, I want to notify the user after each question,
// so they are aware whether they were correct or not in their answers. -->
//
// As a developer, I want to be able to debug my code by using well structured
// console messages.
//
// As a developer, I want to manage my code through an online version control
// system, so I have the ability to work with others, manage my revisions,
// and keep a thorough record of my progress.
'use strict';

// Collect user's name, and customize greeting to user based on their input
function greeting() {
  var userName = prompt('What is your name?');
  alert('Very nice to meet you, ' + userName + '.  I always need new friends.');

  var userChoice = prompt('Do you know I can tell a lot about a person, when I meet them?  I can; and I will prove it to you!  I will ask you 5 yes or no questions; and I will guess them right: do you want to see if I am right?!');

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
}

// Question 1
function question1() {
  var equality = prompt('Do you believe in equality?');
  if (equality.toLowerCase() === 'yes' || equality.toLowerCase() === 'y') {
    // Show 'Outcome'
    alert('GREAT!');
  }
  else if (equality.toLowerCase() === 'no' || equality.toLowerCase() === 'n') {
    // Show 'Outcome'
    alert('Call the police!  Rutabagas and squashs have rights!');
  }
  else {
    // Show 'Outcome'
    alert('Like I said, I really know a lot about you, already.');
  }
}

// Question 2
function question2() {
  var share = prompt('Do you believe people are nice when they share?');
  if (share.toLowerCase() === 'yes' || share.toLowerCase() === 'y') {
    // Show 'Outcome'
    alert('I think you are correct.');
    console.log('In reponse to being asked if people are nice when they share, the user correctly answered yes.'); // example of correct console.log(), Fred will fill in the rest
  }
  else if (share.toLowerCase() === 'no' || share.toLowerCase() === 'n') {
    // Show 'Outcome'
    alert('Stop watching too many movies.');
  }
  else {
    // Show 'Outcome'
    alert('And the world, will be a better place...');
  }
}

// Question 3
function question3(){
  var love = prompt('Do you believe that we just need to show love one to another?');
  if (love.toLowerCase() === 'yes' || love.toLowerCase() === 'y') {
    // Show 'Outcome'
    alert('You are terrific!');
  }
  else if (love.toLowerCase() === 'no' || love.toLowerCase() === 'n') {
  // Show 'Outcome'
    alert('You know, I have a teddy bear...');}
  else {
    // Show 'Outcome'
    alert('...for you, and me- just wait, and see.');
  }
}

// Question 4
function question4() {
  var wings = prompt('Do you like wings?');
  if (wings.toLowerCase() === 'yes' || wings.toLowerCase() === 'y') {
    // Show 'Outcome'
    alert('Really? Me, too!');
  }
  else if (wings.toLowerCase() === 'no' || wings.toLowerCase() === 'n') {
    // Show 'Outcome'
    alert('No problem.');
  }
  else {
    // Show 'Outcome'
    alert('Think of your fellow man.');
  }
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
    alert('Think of your fellow man...');
  }
}

// Call the functions
greeting();
question1();
question2();
question3();
question4();
question5();
