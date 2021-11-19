const userNumberElement = document.querySelector('#userNumber'),
  sendButton = document.querySelector('#sendButton'),
  resetButton = document.querySelector('#resetButton'),
  minNumberElement = document.querySelector('#minNumberElement'),
  maxNumberElement = document.querySelector('#maxNumberElement'),
  tipElement = document.querySelector('#tip'),
  guessesRemainigElement = document.querySelector('#guessesRemainigElement');

  userNumberElement.addEventListener('input', handleNumberInput);


const minNumber = 0,
  maxNumber = 10,
  totalGuesses = 3;

let currentNumber, userNumber, guessRemaning;

function start() {
  currentNumber = generateNumber();
  userNumber = minNumber;
  guessRemaning = totalGuesses;

  userNumberElement.value = userNumber;
  minNumberElement.innerText = minNumber;
  maxNumberElement.innerText = maxNumber;
  tipElement.innerText = " ";
  guessesRemainigElement.innerText = guessRemaning;

  userNumberElement.classList.remove("hidden");
  sendButton.classList.remove("hidden");
  resetButton.classList.add("hidden");
}

function generateNumber() {
  Math.floor(Math.random() * (maxNumber + 1 - minNumber)) + minNumber;
}


function  handleNumberInput(even){
  let value = parseInt(event.target.value || userNumber || 0);
  value = handleMinMax(minNumber, value, maxNumber);
  userNumber = value;
  event.target.value = value;
}

function handleMinMax(min, number, max){
  return Math.min(Math.max(number, min), max);
}

start();

