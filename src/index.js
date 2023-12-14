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

function checkReset () {
    if (homeSection.getAttribute('class') == 'active') {
        homeSection.classList.remove('active');
        homeSection.classList.add('section');
    }
    else if (menuSection.getAttribute('class') == 'active') {
        menuSection.classList.remove('active');
        menuSection.classList.add('section');
    }
    else if (aboutSection.getAttribute('class') == 'active') {
        aboutSection.classList.remove('active');
        aboutSection.classList.add('section');
    }
    else {return;}
} 

function home () {
    while (mainContent.hasChildNodes()){
        mainContent.removeChild(mainContent.lastChild);
    }
    checkReset();
    homeSection.classList.remove('section');
    homeSection.classList.add('active');
    renderHome();
}

function menu () {
    while (mainContent.hasChildNodes()){
        mainContent.removeChild(mainContent.lastChild);
    }
    checkReset();
    menuSection.classList.remove('section');
    menuSection.classList.add('active');
    renderMenu();
}

function about () {
    while (mainContent.hasChildNodes()){
        mainContent.removeChild(mainContent.lastChild);
    }
    checkReset();
    aboutSection.classList.remove('section');
    aboutSection.classList.add('active');
    renderAbout();
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


export { mainContent };