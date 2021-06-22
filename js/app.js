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
const selectElement = document.querySelector('.timerSelector'); // Timer Drop Down
// let parentTimer = document.getElementById('userTimer');

// User Constructor
let UserProfile = function (name, timer) {
  this.name = name;
  this.timer = timer;
  userArray.push(this);
};

// Stretch Goal
// If there is a saved name, do not show the name form
// if (userArray >= 1) {
//   // ####### Removes Form when done
//   parentName.remove();
// }

UserProfile.prototype.displayWelcomeGreeting = function () {
  let today = new Date();
  let hourNow = today.getHours();
  let greeting;

  if (hourNow > 18) {
    greeting = `Good Evening ${this.name}, <br/>
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
  let divLeft = document.getElementById('left-content');
  let greetingDisplay = document.createElement('article');
  greetingDisplay.setAttribute('id','welcomeGreeting');
  greetingDisplay.innerHTML = greeting;
  divLeft.appendChild(greetingDisplay);
};

// Display name function
function userInfo(event) {
  event.preventDefault();
  let userEntry = event.target.name.value;

  event.target.name.value = '';

  localStorage.setItem('savedUserData', JSON.stringify(new UserProfile(userEntry, timer))); // Saving name to Local Storage
  parentName.remove(); // ####### Removes Form when done

  // STRETCH: If statement -- If local storage present, do not show name form
  let user = new UserProfile(userEntry);
  user.displayWelcomeGreeting();
  countTimer1();
}
parentName.addEventListener('submit', userInfo);

// Display timer option function
// function userTimer(event) { // No not Need
//   event.preventDefault();
//   let userTimer = event.target.timer.value;

//   event.target.timer.value = '';

//   localStorage.setItem('savedUserData', JSON.stringify(new UserProfile(userArray[0].name, userTimer))); // Saving name to Local Storage
//   parentName.remove(); // ####### Removes Form when done
// }
// parentTimer.addEventListener('submit', userTimer);

// Sretch Goal Timer:
selectElement.addEventListener('change', (event) => {
  let userTimer = parseInt(event.target.value);
  localStorage.setItem('savedUserData', JSON.stringify(new UserProfile(userArray[0].name, userTimer)));
});


// function startTimer(event) {
//   // countTimer1(); // Start Timer when Button Clicked
//   sectionButton.remove(); // Remove Button when button CLicked
// }
// buttonID.addEventListener('click', startTimer);

function countTimer1() { // adds 1 after function name because it will not run for some reason
  // setInterval starts the function with a set time in between
  countdown = setInterval(numberTimer, 1000);
}

function numberTimer() {
  // append number to screen
  timerBox.textContent = userArray[2].timer; // Adding Number to HTML
  timerDOM.appendChild(timerBox); // Append to Box
  userArray[2].timer--;
  if (userArray[2].timer === 0){
    clearInterval(countdown); // Stops countdown
    clearTimer(); // Clears last number
    window.location.href = 'html/readings_and_reflections.html'; // Moves to next page
  }
}

function clearTimer() {
  // clear number on screen
  let timerBox = document.querySelector('p');
  timerBox.textContent = '';
  timerDOM.appendChild(timerBox);
}


