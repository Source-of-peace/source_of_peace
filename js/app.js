'use strict';

// Global Variables

let parentName = document.getElementById('userName'); // Form
let timerBox = document.createElement('p'); // Timer number
let timerDOM = document.getElementById('timer'); // Timer Box
let timer = 15; // CountDown Timer
let sectionButton = document.getElementById('button'); // Button Box
let buttonID = document.getElementById('buttonID'); // Button
let countdown; // Setinterval Countdown
const userArray = [];


// User Constructor
let UserProfile = function (name) {
  this.name = name;
  this.timer = timer;
  // this.logs = logs;
  userArray.push(this);
  // this.callPrototypeFunctions();

};

// This is where you put all prototype functions for the UserProfile construer!!!!
UserProfile.prototype.displayWelcomeGreeting = function () {
  let today = new Date();
  let hourNow = today.getHours();
  let greeting;

  if (hourNow > 18) {
    greeting = `Good Evening ${this.name}, <b/>
     Making Time For Your Self Even After A Long Day, <br/> Will Result In Positive Habits, <br/>
    To Form.`;
  } else if (hourNow > 12) {
    greeting = `Good Afternoon ${this.name}, <br/>  
    Whatever The Weather, <br/>
    It's A Beautiful Day To Just Take In A Deep Breath And Remember, <br/>
    It's Free.`;
  } else if (hourNow > 0) {
    greeting = `Good Morning ${this.name}, <br/>
    It's A Great Day To Make Time For Your Self, <br/>
    Keep Setting Healthy Habit's.`;
  } else {
    greeting = `${this.name}, <br/>
    I Don't Want To Alarm You! <br/>
    But I Don't Know What Time It Is, <br/>
    Just Breath And It Will All Be Ok.`;
  }
  let divLeft = document.getElementById('div-left');
  let greetingDisplay = document.createElement('article');
  greetingDisplay.setAttribute('id','welcomeGreeting');
  greetingDisplay.innerHTML = greeting;
  divLeft.appendChild(greetingDisplay)
};
    


// UserProfile.prototype.callPrototypeFunctions = function () {
  
// };

// Display name function
function userInfo(event) {
  event.preventDefault();
  let userEntry = event.target.name.value;

  event.target.name.value = '';

  new UserProfile(userEntry);

  localStorage.setItem('savedUserData', JSON.stringify(new UserProfile(userEntry))); // Saving name to Local Storage
  parentName.remove();
// STRETCH: If statement -- If local storage present, do not show name form
  let user = new UserProfile(userEntry);
  user.displayWelcomeGreeting();
}
parentName.addEventListener('submit', userInfo);



function startTimer(event) {
  countTimer1(); // Start Timer when Button Clicked
  sectionButton.remove(); // Remove Button when button CLicked
}
buttonID.addEventListener('click', startTimer);

function numberTimer() {
  // append number to screen
  timerBox.textContent = timer; // Adding Number to HTML
  timerDOM.appendChild(timerBox); // Append to Box
  timer--;
  if (timer === 0){
    clearInterval(countdown); // Stops countdown
    clearTimer(); // Clears last number
    window.location.href = 'html/readings_&_reflections.html'; // Moves to next page
  }
}

function clearTimer() {
  // clear number on screen
  let timerBox = document.querySelector('p');
  timerBox.textContent = '';
  timerDOM.appendChild(timerBox);
}

function countTimer1() { // adds 1 after function name because it will not run for some reason
  // setInterval starts the function with a set time in between
  countdown = setInterval(numberTimer, 1000);
}

// Display Greeting
// this.name + time() save to variable
// Greeting Function: Display variable(name)through DOM on HTML page through an ID
// *** Stretch goal 30 second

//Function to allow next chapter of Tao to load
//Save reflections in local storage
//Clear reflection page once submitted for next entry

// When recording each log on Zen page
// Attach index's to each (refer to lab 14b shopping cart)
// display 2 tables
// Left table will have past Logs
// Right table will display logs in detail
// Attach EventListeners with their ID on each log on the left
// when eventListeners(logs) are clicked display that log with quotes on right side
// Each log will have an index
// It will display the whole log with which quote(s) they were written next to(which were seen by user when they clicked save log)
// Remove that eventListener when log is shown
// Either have a close function to close out detailed log, or when clicking on a new log
//      will re-populate the right table with the new log

// quotes function
