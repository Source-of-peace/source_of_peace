'use strict';
// Global Variables
let userLogForm = document.getElementById('userLog'); // User Log Form
let back = document.getElementById('chapter-back');
let forward = document.getElementById('chapter-forward');
let chapters = document.getElementById('taoReadings');
let userLogEntry;
let clear = document.getElementById('reflections-back');
let readingIndex = 0;
let DOM = document.querySelector('textarea');

let userLogArray = [];
// User Constructor
let UserLogs = function (name, timer, logs) {
  this.name = name;
  this.logs = logs;
  this.timer = timer;
  userLogArray.push(this);
};

let retrievedUser = JSON.parse(localStorage['savedUserData']);

// User Log Textbox Function
function userLog(event) {
  event.preventDefault();
  userLogEntry = event.target.reflectionLog.value; // grabs data from textbox
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

function populateForm() {
  const selectChapter = document.getElementById('chapter-content');
  const optionDiv = document.createElement('div');
  for (let i = 0; i < userLogArray.length; i++ ) {
    let option = document.createElement('option');
    option.textContent = userLogEntry;
    option.value = userLogEntry;
    optionDiv.appendChild(option);
  }
  selectChapter.appendChild(optionDiv);
  optionDiv.addEventListener('click', optionClick);
}

// look into clicking on something and having it itendify the logs to get an idea of how many logs
// have a way to clear the form with a button

function optionClick(){
  // alert('clicked');
  DOM.textContent = userLogEntry;
  // run the function, display which log was clicked into the form
  // be able to over write past logs with new ones when clicking on saved logs
}

function clearDOM(event) {
  console.log('in clearDOM');
  DOM.innerHTML = '';
}

function backClick(event) {
  clearReading();
  readingIndex--;
  if (readingIndex === 0) {
    readingIndex === 2;
  }
  displayTaoReadings();
}

function forwardClick(event) {
  readingIndex++;
  if (readingIndex === 2) {
    readingIndex === 0;
  }
  clearReading();
  displayTaoReadings();
}

function displayTaoReadings() {
  for (let i = 0; i < readingObjectArray[readingIndex].readings.length; i++) {
    let chapterPlaceHolder = document.createElement('aside');
    chapterPlaceHolder.textContent = readingObjectArray[readingIndex].readings[i];
    chapters.appendChild(chapterPlaceHolder);
  }
}

function clearReading() {
  // clear readings on screen
  while (chapters.firstChild) {
    let firstChild1 = chapters.firstElementChild;
    chapters.removeChild(firstChild1);
  }
}

// Function Calls
populateForm();
displayTaoReadings();
back.addEventListener('click', backClick);
forward.addEventListener('click', forwardClick);
clear.addEventListener('click', clearDOM);



const selectElement = document.querySelector('.readingChapters');

selectElement.addEventListener('change', (event) => {
  const result = document.querySelector('.result');
  let resultDOM = document.createElement('p');
  resultDOM.textContent = userLogEntry;
  result.appendChild(resultDOM);

});
