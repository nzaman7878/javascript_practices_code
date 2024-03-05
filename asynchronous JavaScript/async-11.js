// Event Handling:

// Get a reference to the button element with the id 'myButton'
const button = document.getElementById('myButton');

// Add an event listener to the button for the 'click' event
button.addEventListener('click', () => {
  console.log('Button clicked'); // Log a message when the button is clicked
});


// Define an interval that executes a callback function every 1000 milliseconds (1 second)
const intervalId = setInterval(() => {
  console.log('Interval callback executed'); // Log a message each time the interval callback is executed
}, 1000);

/* Explanation:

We retrieve a reference to an HTML button element with the id 'myButton' using document.getElementById('myButton').
We attach an event listener to the button for the 'click' event using addEventListener(). When the button is clicked, the provided callback function is executed, logging "Button clicked" to the console.
We define an interval using setInterval(). This function takes two arguments: a callback function and a time interval in milliseconds. The callback function provided will be executed repeatedly at the specified interval. In this case, the callback function logs "Interval callback executed" to the console every 1000 milliseconds (1 second).
The setInterval() function returns an interval ID, which can be used later to stop the interval using clearInterval() if needed.

 */

