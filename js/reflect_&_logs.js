// save object to local storage
// On new page bring down local storage
//     Example:
//       this.name.constructor.logs
//          this is how we want to relate the code here after we brought it down
// no?? maybe put the variable inside the 'new Constructor(variable)'
// once they have exeriecne save that to local storage
// save to local store

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

// let userLog = event.target.log.value;
let userQuote = 'Try out this new log please';
new UserLogs (retrievedUser.name, retrievedUser.timer, userQuote);

localStorage.setItem('savedUserlogs', JSON.stringify(userLogArray));

// ##### Grabbing stuff from Array #######
// userLogArray[0].name

// Everything on TOP will be information purpose


// ###### Readings Page ######

// create 2 boxes
// left box will be quotes
// right box will be logs

// ###### Left Side ######
// Place Quotes in an Array through function
// Display array in a Box for user to see

// create two div boxes below quotes with eventListeners attached to them
//      One div will be decrement and one will be increment
//      Have event listener work on click
//        Have a variable++ inside event listener to increase
//        Have a variable-- inside event listener to decrease
//          Save to local storage

// extra stuff for information purpose only
//        push more into the exerpience
//        then bring it to the final page with everything


// Make it so the user can go back to page one after cycling through
//    Example, after last quote, goes back to first quote
//    Make the position in the array[i]
//    Make [i] a global variable
//    [i]++ when event listener is clicked
//    if i === last quote
//      make i === 0

// Stretch: Make it load from the beginning again

// ###### Right Side ######
// Create a form
// Have a big enough box for user to type long passages
// On submit
//      Save reflections in local storage
//      Save the quote that is being shown along side the log
// try to find a way to link it through the constructor
//    We have to bring down the constructor information first
//    unpack it then save the logs along side it



