// final page
// grab final local storage doc
// re use the same local storage

// title and reflections
// click on box
// give text content to div-right
let retrievedUser = JSON.parse(localStorage['savedUserLogs']);
let rightDiv = document.getElementById('div-right');

function displayLogs () {
  for (let i = 0; i < retrievedUser.length; i++) {
    let logQuotes = document.createElement('p');
    logQuotes.textContent = retrievedUser[i].logs;
    rightDiv.appendChild(logQuotes);
  }
}

function displayWelcomeGreeting () {
  let today = new Date();
  let hourNow = today.getHours();
  let greeting;
  if (hourNow > 18) {
    greeting = `Good Evening ${retrievedUser[0].name}, <br/>
    Making Time For Your Self Even After A Long Day, <br/> Will Result In Positive Habits, <br/>
    To Form.`;
  } else if (hourNow > 12) {
    greeting = `Good Afternoon ${retrievedUser[0].name}, <br/>  
    Whatever The Weather, <br/>
    It's A Beautiful Day To Just Take In A Deep Breath And Remember, <br/>
    It's Free.`;
  } else if (hourNow > 0) {
    greeting = `Good Morning ${retrievedUser[0].name}, <br/>
    It's A Great Day To Make Time For Your Self, <br/>
    Keep Setting Healthy Habit's.`;
  } else {
    greeting = `${retrievedUser[0].name}, <br/>
    I Don't Want To Alarm You! <br/>
    But I Don't Know What Time It Is, <br/>
    Just Breath And It Will All Be Ok.`;
  }
  let divLeft = document.getElementById('div-left');
  let greetingDisplay = document.createElement('article');
  greetingDisplay.setAttribute('id','welcomeGreeting');
  greetingDisplay.innerHTML = greeting;
  divLeft.appendChild(greetingDisplay);
}
displayLogs();
displayWelcomeGreeting();

// ###### Recording Page ######
// When recording each log on Zen page
// Attach index's to each (refer to lab 14b shopping cart)

// display 2 tables
// Left table will have user info/greeting
// Right table will display logs in detail

// Attach EventListeners with their ID on each log on the left
// when eventListeners(logs) are clicked display that log with quotes on right side
// Each log will have an index
// It will display the whole log with which quote(s) they were written next to(which were seen by user when they clicked save log)
// Remove that eventListener when log is shown
// Either have a close function to close out detailed log, or when clicking on a new log
//      will re-populate the right table with the new log
