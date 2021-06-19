'use strict';
// Global Variables
let userLogForm = document.getElementById('userLog'); // User Log Form
let back = document.getElementById('chapter-back');
let forward = document.getElementById('chapter-forward');
let chapters = document.getElementById('taoReadings');


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
let readingObjectArray = [
  {
    chapter: 'Chapter: 1',
    readings: [
      'Simplicity, patience, compassion.',
      'These three are your greatest treasures.',
      ' Simple in actions and thoughts, you return to the source of being. ',
      'Patient with both friends and enemies,',
      ' you accord with the way things are.',
      ' Compassionate toward yourself,',
      ' you reconcile all beings in the world.'
    ]
  },
  {
    chapter: 'Chapter: 2',
    readings: ['Knowing others is intelligence;',
      'knowing yourself is true wisdom.',
      'Mastering others is strength;',
      ' mastering yourself is true power.']
  },
  {
    chapter: 'Chapter: 3',
    readings: ['Those who know do not speak. Those who speak do not know.']
  },
];

let readingIndex = 0;

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



function backClick(event) {
  clearReading();
  readingIndex--;
  if (readingIndex === 0) {
    readingIndex === 2;
  }
  displayTaoReadings();
}
back.addEventListener('click', backClick);

function forwardClick(event) {
  readingIndex++;
  if (readingIndex === 2) {
    readingIndex === 0;
  }
  clearReading();
  displayTaoReadings();
}
forward.addEventListener('click', forwardClick);

// Render through with a for loop
function displayTaoReadings() {
  for (let i = 0; i < readingObjectArray[readingIndex].readings.length; i++) {
    let chapterPlaceHolder = document.createElement('aside');
    chapterPlaceHolder.textContent = readingObjectArray[readingIndex].readings[i];
    chapters.appendChild(chapterPlaceHolder);
  }
}
displayTaoReadings();

function clearReading() {
  // clear readings on screen
  while (chapters.firstChild) {
    let firstChild1 = chapters.firstElementChild;
    chapters.removeChild(firstChild1);
  }
}

// const selectElement = document.querySelector('.readingChapters');


// selectElement.addEventListener('change', (event) => {

//   event.target.value

//   const result = document.querySelector('.result');

//   result.textContent = `You like ${}`;
// });
