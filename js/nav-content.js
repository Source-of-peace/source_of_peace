'use strict'

let back = document.getElementById('back');
// let finderMenu = document.getElementById('finder-menu');
let forward = document.getElementById('forward')

let readingsArray = ['A','B','C'];

let readingIndex = 0

readingsArray[readingIndex];

function backClick(event) {
  readingIndex--;
  if (readingIndex === 0) {
    readingIndex === 2
  };
  console.log(readingsArray[readingIndex]);
}
back.addEventListener('click', backClick);

function forwardClick(event) {
  readingIndex++;
  if (readingIndex === 2) {
    readingIndex === 0
  };
  console.log(readingsArray);
}
forward.addEventListener('click', forwardClick);
