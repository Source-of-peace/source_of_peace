'use strict';

// Global Variables
let parentName = document.getElementById('userName')

// User Constructor
let UserProfile = function (name, timer, logs) {
  this.name = name;
  this.timer = timer;
  this.logs = logs;
  this.callPrototypeFunctions();
};

// This is where you put all prototype functions for the UserProfile construer!!!!
UserProfile.prototype.displayWelcomeGreeting = function () {
    let today = new Date();
    let hourNow = today.getHours();
    let greeting;
  
    if (hourNow > 18) {
      greeting = `Good Evening ${this.name} Making Time For Your Self Even After A Long Day Will Result In Positive Habits To Form!`;
    } else if (hourNow > 12) {
      greeting = `Afternoon ${this.name} Whatever The Weather, It's A Beautiful Day To Just Take A Deep Breath And Remember It's Free`;
    } else if (hourNow > 0) {
      greeting = `Good Morning ${this.name} It's A Great Day To Make Time For Your Self Keep Setting Healthy Habit's!`;
    } else {
      greeting = `${this.name}, I Don't Want To Alarm You! But I Don't Know What Time It Is, Just Breath And It Will All Be Ok.`;
    }
    
    
};

UserProfile.prototype.callPrototypeFunctions = function () {
  this.displayWelcomeGreeting();
  this.displayWelcomeGreeting();
};

// Display name function
function userInfo(event) {
  event.preventDefault();
  let userEntry = event.target.name.value;

  event.target.name.value = '';
  new UserProfile(userEntry);
}
parentName.addEventListener('submit', userInfo);
// Take in ID from HTML
// DOM to create a form
// Populate the form on homepage/DOM to capture data


// Take in information
// If statement -- If local storage present, do not populate form
// 
// Set it so the user must enter in information

// Reference (name, time) through constructor function

// Click eventListener button
// Record that information through local storage
// Make sure to set through JSON of stringify


// Remove form when information is taken in
// Clear form with remove eventListener and clear form

// Display Greeting
// this.name + time() save to variable
// Greeting Function: Display variable(name)through DOM on HTML page through an ID 
// *** Stretch goal 30 second

// Button to start timer, remove greeting

// Notes:
// 'required' -- place in form in HTML
// event.preventDefault(); -- makes it so information stays on the form
//    remove this after form works

// Button to load Readings & Reflections page
//Function to allow next chapter of Tao to load
//Save reflections in local storage
//Clear reflection page once submitted for next entry
//

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

// Timer function



// quotes function
