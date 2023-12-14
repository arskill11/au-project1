import './style.css';
import { mainContent } from '.';

function render () {
    const homeMainContent = document.createElement('div');
    const restName = document.createElement('div');
    const name = document.createElement('h1');
    const subname = document.createElement('h2');
    const menuBtn = document.createElement('button');
    const info = document.createElement('div');
    const emptyDiv = document.createElement('div');

    /*timer*/
    const timer = document.createElement('section');
    const para = document.createElement('p');
    const timerContainer = document.createElement('div');
    const days = document.createElement('span');
    const hours = document.createElement('span');
    const minutes = document.createElement('span');
    const seconds = document.createElement('span');

    timer.setAttribute('id', 'timer');
    days.setAttribute('id', 'days');
    hours.setAttribute('id', 'hours');
    minutes.setAttribute('id', 'minutes');
    seconds.setAttribute('id', 'seconds');
    timerContainer.classList.add('timer-container');

    para.textContent = 'До Нового Года осталось';
    days.textContent = ' 0 days ';
    hours.textContent = ' 0 hours ';
    minutes.textContent = ' 0 minutes ';
    seconds.textContent = ' 0 seconds ';


    homeMainContent.classList.add('homeMainContent');

    restName.classList.add('restName');
    name.classList.add('name');
    name.textContent = 'муженко арсений';
    subname.classList.add('subname');
    subname.textContent = 'student';

    menuBtn.classList.add('menuBtn');
    menuBtn.setAttribute('id', 'menuBtn');
    menuBtn.textContent = 'Обо мне';

    info.classList.add('info');
    info.textContent = 'Студент 3 курса Академии Управления';

    emptyDiv.classList.add('emptyDiv');

    timerContainer.appendChild(days);
    timerContainer.appendChild(hours);
    timerContainer.appendChild(minutes);
    timerContainer.appendChild(seconds);
    timer.appendChild(para);
    timer.appendChild(timerContainer);
    restName.appendChild(subname);
    restName.appendChild(name);
    homeMainContent.appendChild(restName);
    homeMainContent.appendChild(emptyDiv);
    homeMainContent.appendChild(info);
    homeMainContent.appendChild(menuBtn);
    homeMainContent.appendChild(timer);
    mainContent.appendChild(homeMainContent);

    let countdownDate = new Date(2024, 0, 1, 0, 0, 0, 0);
    let timerInterval;


const formatTime = (time, string) => {
  return time == 1 ? ` ${time} ${string} ` : ` ${time} ${string}s `;
};

const startCountdown = () => {
  const now = new Date().getTime();
  const countdown = new Date(countdownDate).getTime();

  const difference = (countdown - now) / 1000;

  if (difference < 1) {
    endCountdown();
  }

  let daysC = Math.floor(difference / (60 * 60 * 24));
  let hoursC = Math.floor((difference % (60 * 60 * 24)) / (60 * 60));
  let minutesC = Math.floor((difference % (60 * 60)) / 60);
  let secondsC = Math.floor(difference % 60);

  days.textContent = formatTime(daysC, "day");
  hours.textContent = formatTime(hoursC, "hour");
  minutes.textContent = formatTime(minutesC, "minute");
  seconds.textContent = formatTime(secondsC, "second");
};


    startCountdown();
    timerInterval = setInterval(startCountdown, 1000);
}

export { render as renderHome };