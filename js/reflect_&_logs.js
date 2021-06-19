'use strict';

// Global Variables
let userLogForm = document.getElementById('userLog'); // User Log Form
let back = document.getElementById('back');
let forward = document.getElementById('forward')


let userLogArray = [];
// User Constructor
let UserLogs = function (name, timer, logs) {
  this.name = name;
  this.logs = logs;
  this.timer = timer;
  userLogArray.push(this);
};

let retrievedUser = JSON.parse(localStorage['savedUserData']);

new UserLogs (retrievedUser.name, retrievedUser.timer, 'Recorded Logs go here');


// User Log Textbox Function
function userLog(event) {
  event.preventDefault(); 
  let userLogEntry = event.target.reflectionLog.value; // grabs data from textbox
  new UserLogs (retrievedUser.name, retrievedUser.timer, userLogEntry);
  event.target.reflectionLog.value = ''; // clears out box after sumbiting

  localStorage.setItem('savedUserLogs', JSON.stringify(userLogArray)); // Saving Logs to Local Storage
}
userLogForm.addEventListener('submit', userLog);


// array length will change to 81 
let readingsArray = ['A','B','C'];

let readingIndex = 0

readingsArray[readingIndex];

// function backClick(event) {
//   readingIndex--;
//   if (readingIndex === 0) {
//     readingIndex === 2
//   };
//   console.log(readingsArray[readingIndex]);
// }
// back.addEventListener('click', backClick);

// function forwardClick(event) {
//   readingIndex++;
//   if (readingIndex === 2) {
//     readingIndex === 0
//   };
//   console.log(readingsArray[readingIndex]);
// }
// forward.addEventListener('click', forwardClick);

function populateForm() {
  const selectChapter = document.getElementById('chapter-content');
  const optionDiv = document.createElement('div');
  for (let i = 0; i < userLogArray.length; i++ ) {
    let option = document.createElement('option');
    option.textContent = userLogArray[i].name;
    option.value = userLogArray[i].name;
    optionDiv.appendChild(option);
  }
  selectChapter.appendChild(optionDiv);
  optionDiv.addEventListener('click', optionClick);
}

function optionClick(){
  alert('clicked');
}
populateForm();




