import { mainContent } from ".";
import vkIcon from './img/vkicon.png';
import tgIcon from './img/tgicon.png';
import igIcon from './img/igicon.png';
import mailIcon from './img/mailicon.png';
import { isBlack } from ".";

function render () {
  const aboutMainContent = document.createElement('div');
  const aboutDiv = document.createElement('div');
  const aboutHeading = document.createElement('h1');
  const subname = document.createElement('h2');
  const manifesto = document.createElement('div');
  const vk = document.createElement('div');
  const tg = document.createElement('div');
  const ig = document.createElement('div');
  const mail = document.createElement('div');
  const vkLink = document.createElement('a');
  const tgLink = document.createElement('a');
  const igLink = document.createElement('a');
  const mailLink = document.createElement('a');

  vk.classList.add('contactDiv');
  tg.classList.add('contactDiv');
  ig.classList.add('contactDiv');
  mail.classList.add('contactDiv');

  const vkPic = document.createElement('img');
  vkPic.classList.add('contactLogo');
  vkPic.src = vkIcon;
  const tgPic = document.createElement('img');
  tgPic.classList.add('contactLogo');
  tgPic.src = tgIcon;
  const igPic = document.createElement('img');
  igPic.classList.add('contactLogo');
  igPic.src = igIcon;
  const mailPic = document.createElement('img');
  mailPic.classList.add('contactLogo');
  mailPic.src = mailIcon;

  vkLink.href = 'https://vk.com/arskill11';
  vkLink.textContent = 'Муженко Арсений';
  vkLink.classList.add('contLnk');
  igLink.href = 'https://www.instagram.com/17thspring/?next=%2F';
  igLink.textContent = '17thspring';
  igLink.classList.add('contLnk');
  tgLink.href = '#';
  tgLink.textContent = '@Wysyaname';
  tgLink.classList.add('contLnk');
  mailLink.href = '#';
  mailLink.textContent = 'arseniimuzenko@gmail.com';
  mailLink.classList.add('contLnk');

  aboutMainContent.classList.add('aboutMainContent');
  aboutDiv.classList.add('aboutDiv');
  aboutHeading.classList.add('aboutHeading');
  subname.classList.add('subname');

  vk.appendChild(vkPic);
  vk.appendChild(vkLink);
  ig.appendChild(igPic);
  ig.appendChild(igLink);
  tg.appendChild(tgPic);
  tg.appendChild(tgLink);
  mail.appendChild(mailPic);
  mail.appendChild(mailLink);

  manifesto.classList.add('manifesto');
  manifesto.textContent = ''
  subname.textContent = 'contacts';
  aboutHeading.textContent = 'контакты';

  aboutDiv.appendChild(subname);
  aboutDiv.appendChild(aboutHeading);
  manifesto.appendChild(vk);
  manifesto.appendChild(ig);
  manifesto.appendChild(tg);
  manifesto.appendChild(mail);
  aboutMainContent.appendChild(aboutDiv);
  aboutMainContent.appendChild(manifesto);
  mainContent.appendChild(aboutMainContent);

  if (isBlack) {
    document.querySelectorAll('*').forEach(item => {
      if (!item.classList.contains('darkScheme')) {
        item.classList.add('darkScheme');
      }
    })
  }
}

export { render as renderAbout };