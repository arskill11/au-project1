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

    restName.appendChild(subname);
    restName.appendChild(name);
    homeMainContent.appendChild(restName);
    homeMainContent.appendChild(emptyDiv);
    homeMainContent.appendChild(info);
    homeMainContent.appendChild(menuBtn);
    mainContent.appendChild(homeMainContent);
}

export { render as renderHome };