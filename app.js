'use strict';

var allInfo = [];

function Info(age, phoneNumber, firstName, lastName, address) {
  this.age = age;
  this.phoneNumber = phoneNumber;
  this.firstName = firstName;
  this.lastName = lastName;
  this.address = address;
  this.Message = Message;
  allInfo.push(this);
  theForm.addEventListener('eMail', convertForm);
}

function handleEvent(event) {
  event.preventDefault();
  var dropDownMenu = document.getElementById('dropDownMenu');
  var firstName = document.getElementById('firstName');
  var lastName = document.getElementById('lastName');
  var phoneNumber = document.getElementById('phoneNumber');
  var address = document.getElementById('address');
  var age = document.getElementById('age');
  var Message = document.getElementById('Message');
  new Info(age, firstName, lastName, address, phoneNumber, Message);
  pushInfo();
}

function handleForm(event) {

  console.log(event);
  var dropDownMenu = event.target.form.elements.dropDownMenu.value;
  var phoneNumber = event.target.form.elements.phoneNumber.value;
  var firstName = event.target.form.elements.firstNameInput.value;
  var lastName = event.target.form.elements.lastNameInput.value;
  var address = event.target.form.elements.addressInput.value;
  var message = event.target.form.elements.MessageInput.value;

  if(!dropDownMenu || !phoneNumber || !firstName || !lastName || !address || !Message) {
    return null;
  }

  event.target.form.elements.dropDownMenu.value = null;
  event.target.form.elements.phoneNumber.value = null;
  event.target.form.elements.firstNameInput.value = null;
  event.target.form.elements.lastNameInput.value = null;
  event.target.form.elements.addressInput.value = null;
  event.target.form.elements.MessageInput.value = null;

}

  // info + eMail //
function pushInfo(){
  localStorage.clear();
  var allInfoJSON = JSON.stringify(allInfo);
  localStorage.allInfo = allInfoJSON;
}

function pullInfo() {
  var retrieveInfoData = localStorage.allInfo;
  var parseInfoData = JSON.parse(retrieveInfoData);
  for (var i = 0; i < parseInfoData.length; i++) {
    allInfo[i] = parseInfoData[i];
  }
  theForm.addEventListener('eMail', convertForm);
}

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
      console.log ('Incorrect.')
  }

  else if (equality.toLowerCase() === 'no' || equality.toLowerCase() === 'n') {
    // Show 'Outcome'
    alert('Actually, my middle name is Dwayne.');
      console.log ('Incorrect.')
  }

  else {
    // Show 'Outcome'
    alert('Like I said, I really know a lot about you, already.');
      console.log ('Incorrect.')
  }
}

// Question 2
function question2() {
  var share = prompt('Do you believe I like to share?');
  if (share.toLowerCase() === 'yes' || share.toLowerCase() === 'y') {
    // Show 'Outcome'
    alert('You are correct.');
      console.log ('Correct.')

  }
  else if (share.toLowerCase() === 'no' || share.toLowerCase() === 'n') {
    // Show 'Outcome'
    alert('Good try.  Sometimes, I do not feel like sharing; but I do it anyway, as if I do');
      console.log ('Incorrect.')
  }
  else {
    // Show 'Outcome'
    alert('Come on: think of your fellow man...And the world, will be a better place...');
      console.log ('Incorrect.')
  }
}

// Question 3
function question3(){
  var love = prompt('Do you believe that I am a Marine?');
  if (love.toLowerCase() === 'yes' || love.toLowerCase() === 'y') {
    // Show 'Outcome'
    alert('You are terrific!');
      console.log ('Correct.')
  }
  else if (love.toLowerCase() === 'no' || love.toLowerCase() === 'n') {
  // Show 'Outcome'
    alert('Actually, I served 3 combat deployments, 2 humanitarian operations; and several temporary assignment duties- just saying.');
      console.log ('Incorrect.')
  }

  else {
    // Show 'Outcome'
      alert('Guess.');
        console.log ('Incorrect.')
  }

// Question 4
function question4() {
  var wings = prompt('Do you think I like chicken wings?');
  if (wings.toLowerCase() === 'yes' || wings.toLowerCase() === 'y') {
    // Show 'Outcome'
    alert('Yes! Actually, it depends on who makes them.');
      console.log ('Correct.')
  }
  else if (wings.toLowerCase() === 'no' || wings.toLowerCase() === 'n') {
    // Show 'Outcome'
    alert('That was not a trick question; but thanks for not stereotyping me.');
      console.log ('Incorrect.')
  }

  else {
    // Show 'Outcome'
    alert('Guess.');
      console.log ('Incorrect.')
  }

// Question 5
function question5() {
  var lunch = prompt('So, where are we going for lunch- I knew you like me- you are buying me lunch, right?');
  if (lunch.toLowerCase() === 'yes' || lunch.toLowerCase() === 'y') {
    // Show 'Outcome'
    alert('Yes, I knew I like you!');
      console.log ('Correct.')
  }
  else if (lunch.toLowerCase() === 'no' || lunch.toLowerCase() === 'n') {
    // Show 'Outcome'
    alert('I eat cheap...');
      console.log ('Incorrect.')
  }
  else {
    // Show 'Outcome'
    alert('Think of your fellow man...put a little love in your heart.');
    console.log ('Incorrect.')
  }

  // Question 6
  function question6() {
    var instrument = prompt('What is my favorite instrument?');
    if (userChoice === 'Alto Saxophone' || 'Tenor Saxophone') {
      // Show 'Outcome'
      alert('Yes, I knew I like you!');
        console.log ('Correct.')
    }

    else if (userChoice !== 'Alto Saxophone' || 'Tenor Saxophone') {
      for (i=0; i<guess.length; i++)
      if (userChoice === 'Saxophone' || 'Alto Saxophone' || 'Tenor Saxophone') {
        // Show 'Outcome'
        alert('Yes, I knew I like you!');
          console.log ('Correct.')
      }
      else if (userChoice !== 'Saxophone' || 'Alto Saxophone' || 'Tenor Saxophone') {
      // Show 'Outcome'
      alert('I love to play the saxophone; especially Alto and Tenor Saxophones!');
        console.log ('Incorrect.')
    }
}

  // Question 7
  function question7() {
    var instruments = prompt('What other instruments do I like?');
    if (userChoice === Piano, Trumpet, Cello, Violin) {
      // Show 'Outcome'
      alert('Yes, I knew I like you!');
        console.log ('Correct.')
    }

  else if (userChoice !== 'Alto Saxophone' || 'Tenor Saxophone') {
    for (i=0; i<guesses.length; i++)
    if (userChoice === Piano, Trumpet, Cello, Violin) {
      // Show 'Outcome'
      alert('Yes, I knew I like you!');
        console.log ('Correct.')
    }
    else if (userChoice !== 'Alto Saxophone' || 'Tenor Saxophone') {
    // Show 'Outcome'
    alert('I also like the Piano, Trumpet, Cello, and Violin.');
      console.log ('Incorrect.')
  }
}

// Question 8
function results() {
  var userResult1 = console.log ('Correct.');
  var userResult2 = console.log ('Incorrect.');
  if (userChoice !== userResult2 && userChoice > userResult2) {
  for (i=0; i<guesses.length; i++)
    // Show 'Outcome'
    alert ( userResult1 + 'answers guessed correctly.');
      console.log ('Correct.')
  }

  else if (userChoice === userResult1 && userChoice === userResult2) {
  for (i=0; i<guesses.length; i++)
    // Show 'Outcome'
    alert ( userResult1 && userResult2 + 'It is a tie!');
      console.log ('It is a tie!  That was fun!')
  }

  else if (userChoice !== userResult1 && userChoice > userResult1) {
  for (i=0; i<guesses.length; i++)
    // Show 'Outcome'
    alert ( userResult2 + 'answers guessed incorrectly.');
      console.log ('Nice try.  Better luck, next time.')
  }
}
  alert ( userResult1 + 'answers guessed correctly.')

// Call the functions
greeting();
question1();
question2();
question3();
question4();
question5();
question6();
question7();
question8();
