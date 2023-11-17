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

export { mainContent };