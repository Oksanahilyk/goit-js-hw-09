
const startColor = document.querySelector('button[data-start]');
const stopColor = document.querySelector('button[data-stop]');
const bodyColor = document.querySelector('body');

let timerId = null;

startColor.addEventListener('click', onStartColor); 
stopColor.addEventListener('click', onStopColor);


function onStartColor() {
  timerId = setInterval(getBgColor, 1000);
  startColor.setAttribute('disabled', true);
  stopColor.removeAttribute('disabled');
}

function onStopColor() {
  clearInterval(timerId);
  startColor.removeAttribute('disabled');
  stopColor.setAttribute('disabled', true);
}

function getBgColor() {
  bodyColor.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
 }