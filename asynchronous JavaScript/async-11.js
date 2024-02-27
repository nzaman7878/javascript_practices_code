// Event Handling:

const button = document.getElementById('myButton');
button.addEventListener('click', () => {
  console.log('Button clicked');
});


//Interval with Callback: 

const intervalId = setInterval(() => {
    console.log('Interval callback executed');
  }, 1000);
  