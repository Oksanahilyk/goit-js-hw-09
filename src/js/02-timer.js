import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const input = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('button[data-start]');
const secondsTame = document.querySelector('span[data-seconds]');
const minutesTame = document.querySelector('span[data-minutes]');
const hoursTame = document.querySelector('span[data-hours]');
const daysTame = document.querySelector('span[data-days]');
const blockTamer = document.querySelector('.timer');
// const blockValue = document.querySelectorAll('.value');

blockTamer.style.display = 'flex';
blockTamer.style.fontSize = '24px';
blockTamer.style.gap = '20px';
blockTamer.style.marginTop = '40px';
// blockValue.style.fontSize = '48px';
// blockField.style.flexDirection = 'column';
// blockField.style.alignItems = 'center';

btnStart.setAttribute(`disabled`, true);
btnStart.addEventListener('click', onStartTimer);  
let choosingDate = null;
let timerId = null;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
      onChoiceValidDate(selectedDates[0]);
    },
  };

 function onChoiceValidDate(selectedDates){

  choosingDate = selectedDates.getTime()
  if (selectedDates < Date.now()) {
    Notify.failure("Please choose a date in the future");
  };

  if (selectedDates>=Date.now()) {
    btnStart.removeAttribute('disabled');
  };
  };

function onStartTimer(){
timerId = setInterval(startTimer, 1000);
btnStart.setAttribute(`disabled`, true);
input.setAttribute(`disabled`, true);
}

function startTimer(){
  const differentDate = choosingDate - Date.now();
  const formatDate = convertMs(differentDate);
  renderDate(formatDate)
  if (secondsTame.textContent === '00' && minutesTame.textContent === '00') {
    Notify.success('Time end');
    clearInterval(timerId);
}
}

function renderDate({ days, hours, minutes, seconds }){
secondsTame.textContent = addLeadingZero(seconds);
minutesTame.textContent = addLeadingZero(minutes);
hoursTame.textContent = addLeadingZero(hours);
daysTame.textContent = addLeadingZero(days);
}


flatpickr(input, options);



function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value){
  return String(value).padStart(2, '0');
}