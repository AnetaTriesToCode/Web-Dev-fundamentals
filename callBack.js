let intervalID; //set global scope variable
let counter = 0;

let startCounter = function() {
    intervalID = setInterval(function() {  //function added
        counter++; //incrementing the counter by 1
        console.log(counter); //printing the counter to the console
    }, 1000); //with 1 second interval
}
function stopCounter() {
    clearInterval(intervalID);
}
let startButton = document.getElementById('start'); //linking the start button from HTML file
let stopButton = document.getElementById('stop'); //linking the stop button from the same HTML file

startButton.addEventListener("click", startCounter); //call back function startCounter is triggered upon click on start button

stopButton.addEventListener("click", stopCounter); //callback function stopCounter is triggered upon click on stop button
