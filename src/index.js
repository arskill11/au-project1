import './style.css';
import { renderHome } from './home';
import { renderMenu } from './menu';
import { renderAbout } from './about';

const content = document.querySelector('#content');
const heading = document.querySelector('.heading');
const homeSection = document.querySelector('#home');
const menuSection = document.querySelector('#menu');
const aboutSection = document.querySelector('#about');
const footer = document.querySelector('.footer');
const mainContent = document.querySelector('.mainContent');
const timeline = document.querySelector('.timeline');
const lightSchemeBtn = document.querySelector('#whiteScheme');
const darkScheme = document.querySelector('#blackScheme');
let isBlack = false;

function checkReset () {
  if (homeSection.getAttribute('class') == 'active') {
    homeSection.classList.remove('active');
    homeSection.classList.add('section');
  }
  else if (homeSection.getAttribute('class') == 'active darkScheme') {
    homeSection.classList.remove('darkScheme');
    homeSection.classList.remove('active');
    homeSection.classList.add('section');
    homeSection.classList.add('darkScheme');
  }
  if (menuSection.getAttribute('class') == 'active') {
    menuSection.classList.remove('active');
    menuSection.classList.add('section');
  }
  else if (menuSection.getAttribute('class') == 'active darkScheme') {
    menuSection.classList.remove('darkScheme');
    menuSection.classList.remove('active');
    menuSection.classList.add('section');
    menuSection.classList.add('darkScheme');
  }
  else if (aboutSection.getAttribute('class') == 'active') {
    aboutSection.classList.remove('active');
    aboutSection.classList.add('section');
  }
  else if (aboutSection.getAttribute('class') == 'active darkScheme') {
    aboutSection.classList.remove('darkScheme');
    aboutSection.classList.remove('active');
    aboutSection.classList.add('section');
    aboutSection.classList.add('darkScheme');
  }
  else {return;}
} 

function home () {
  while (mainContent.hasChildNodes()){
    mainContent.removeChild(mainContent.lastChild);
  }
  checkReset();
  homeSection.classList.remove('darkScheme');
  homeSection.classList.remove('section');
  homeSection.classList.add('active');
  homeSection.classList.add('darkScheme');
  renderHome();
}

function menu () {
  while (mainContent.hasChildNodes()){
    mainContent.removeChild(mainContent.lastChild);
  }
  checkReset();
  menuSection.classList.remove('darkScheme');
  menuSection.classList.remove('section');
  menuSection.classList.add('active');
  menuSection.classList.add('darkScheme');
  renderMenu();
}

function about () {
  while (mainContent.hasChildNodes()){
    mainContent.removeChild(mainContent.lastChild);
  }
  checkReset();
  aboutSection.classList.remove('darkScheme');
  aboutSection.classList.remove('section');
  aboutSection.classList.add('active');
  aboutSection.classList.add('darkScheme');
  renderAbout();
}

function changeSchemeToDark () {
  lightSchemeBtn.classList.remove('activeBtn');
  darkScheme.classList.add('activeBtn');
  const all = document.querySelectorAll('*');
  all.forEach(item => {
    if (!item.classList.contains('darkScheme')) {
      item.classList.add('darkScheme');
    }
  })
  isBlack = true;
}

function changeSchemeToLight () {
  const all = document.querySelectorAll('*');
  all.forEach(item => {
    if (item.classList.contains('darkScheme')) {
      item.classList.remove('darkScheme');
    }   
  })
  isBlack = false;
  darkScheme.classList.remove('activeBtn');
  lightSchemeBtn.classList.add('activeBtn');
}

home();

document.addEventListener('click', (e) => {
  let target = e.target.getAttribute('id');
  switch (target) {
    case "menu": 
      menu();
      break;
    case "menuBtn":
      menu();
      break; 
    case "home":
      home();
      break;
    case "about": 
      about();
      break;
    case "blackScheme":
      changeSchemeToDark();
      break;
    case "whiteScheme":
      changeSchemeToLight();
      break;
  }
})

/*snow*/
const snowContainer = document.getElementById("snow-container");
const snowContent = ['&#10052', '&#10053', '&#10054']

const random = (num) => {
  return Math.floor(Math.random() * num);
}

const getRandomStyles = () => {
  const top = random(100);
  const left = random(100);
  const dur = random(10) + 10;
  const size = random(25) + 25;
  return `
    top: -${top}%;
    left: ${left}%;
    font-size: ${size}px;
    animation-duration: ${dur}s;
  `;
}

const createSnow = (num) => {
  for (var i = num; i > 0; i--) {
    var snow = document.createElement("div");
    snow.className = "snow";
    snow.style.cssText = getRandomStyles();
    snow.innerHTML = snowContent[random(3)]
    snowContainer.append(snow);
  }
}

window.addEventListener("load", () => {
  createSnow(30)
});

export { mainContent, isBlack };