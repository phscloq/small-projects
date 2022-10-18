console.log('Hello from script.js');
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

// Add event listener to each button
buttons.forEach(button => {
  button.addEventListener('click', calculate);
  console.log("basuıldı");
});

// Calculate function
function calculate(event) {
  console.log(event.target.value);
  console.log("basuıldı");
    const clickedButtonValue = event.target.value;
}