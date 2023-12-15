import imgOne from './img/aulogo.png';
import imgTwo from './img/school.jpg';
import imgThree from './img/vitebsk.png';
import imgFour from './img/hobbies.png';
import imgFive from './img/books.jpg';
import imgSix from './img/series.png'
import { mainContent } from '.';

function render () {
    const timeline = document.querySelector('.timeline');
    timeline.classList.remove('disabled');
    timeline.classList.add('on');
    const menuMainContent = document.createElement('div');
    const menuDiv = document.createElement('div');
    const menuHeading = document.createElement('h1');
    const subname = document.createElement('h2');
    const menuList = document.createElement('div');
    const emptyDiv = document.createElement('div');

    const lotOne = document.createElement('div');
    const lotTwo = document.createElement('div');
    const lotThree = document.createElement('div');
    const lotFour = document.createElement('div');
    const lotFive = document.createElement('div');
    const lotSix = document.createElement('div');

    const picOne = document.createElement('img');
    const picTwo = document.createElement('img');
    const picThree = document.createElement('img');
    const picFour = document.createElement('img');
    const picFive = document.createElement('img');
    const picSix = document.createElement('img');

    const linkOne = document.createElement('a');
    const linkTwo = document.createElement('a');

    const titleOne = document.createElement('h3');
    const titleTwo = document.createElement('h3');
    const titleThree = document.createElement('h3');
    const titleFour = document.createElement('h3');
    const titleFive = document.createElement('h3');
    const titleSix = document.createElement('h3');

    const infoOne = document.createElement('p');
    const infoTwo = document.createElement('p');
    const infoThree = document.createElement('p');
    const infoFour = document.createElement('p');
    const infoFive = document.createElement('p');
    const infoSix = document.createElement('p');


    menuMainContent.classList.add('menuMainContent');
    menuDiv.classList.add('menuDiv');
    emptyDiv.classList.add('emptyDivMenu');

    menuHeading.classList.add('menuHeading');
    menuHeading.textContent = 'обо мне';

    subname.classList.add('subname');
    subname.textContent = 'about';

    linkOne.href = "https://ru.wikipedia.org/wiki/%D0%92%D0%B8%D1%82%D0%B5%D0%B1%D1%81%D0%BA";
    linkOne.textContent = 'г.Витебске';
    linkTwo.href = "https://ru.wikipedia.org/wiki/%D0%A1%D0%BA%D0%BE%D1%80%D0%BE%D1%81%D1%82%D0%BD%D0%B0%D1%8F_%D1%81%D0%B1%D0%BE%D1%80%D0%BA%D0%B0_%D0%BA%D1%83%D0%B1%D0%B8%D0%BA%D0%B0_%D0%A0%D1%83%D0%B1%D0%B8%D0%BA%D0%B0";
    linkTwo.textContent = 'спидкубингом'
    menuList.classList.add('menuList');

    lotOne.classList.add('lot');
    lotTwo.classList.add('lot');
    lotThree.classList.add('lot');
    lotFour.classList.add('lot');
    lotFive.classList.add('lot');
    lotSix.classList.add('lot');

    titleOne.classList.add('lotTitle');
    titleOne.textContent = 'Высшее образование';
    titleTwo.classList.add('lotTitle');
    titleTwo.textContent = 'Среднее образование';
    titleThree.classList.add('lotTitle');
    titleThree.textContent = 'Родной город';
    titleFour.classList.add('lotTitle');
    titleFour.textContent = 'Увлечения';
    titleFive.classList.add('lotTitle');
    titleFive.textContent = 'Любимые книги';
    titleSix.classList.add('lotTitle');
    titleSix.textContent = 'Любимые сериалы';

    infoOne.classList.add('lotInfo');
    infoOne.textContent = 'Являюсь студентом Академии Управления при Президенте Республики Беларусь. Дата поступления: 2021г. Спеицальность: Управление информационными ресурсами';
    infoTwo.classList.add('lotInfo');
    infoTwo.textContent = 'C 2015 по 2021 гг. учился в средней школе №40 г.Витебска имени М.М.Громова. Активно участвовал в спортивной жизни школы. Окончил со средним баллом 9.4.';
    infoThree.classList.add('lotInfo');
    infoThree.textContent = 'Родился и до 18 лет жил в ';
    infoThree.appendChild(linkOne);
    infoFour.classList.add('lotInfo');
    infoFour.textContent = 'Занимаюсь волейболом 3+ года, состою в сборной Академии. Люблю читать. Увлекался ';
    infoFour.appendChild(linkTwo);
    infoFive.classList.add('lotInfo');
    infoFive.textContent = 'В.Дудинцев - Белые одежды; В.Набоков - Соглядатай, Отчаяние, Приглашение на казнь; А.Куприн - Яма, Нарцисс, Сильнее смерти';
    infoSix.classList.add('lotInfo');
    infoSix.textContent = 'Shameless, Teen Wolf, Sherlock, American Gods, Lupin, Peaky Blinders, Mindhunter, Mr. Robot, Black Mirror';

    picOne.classList.add('lotPic');
    picOne.src = imgOne;
    picTwo.classList.add('lotPic');
    picTwo.src = imgTwo;
    picThree.classList.add('lotPic');
    picThree.src = imgThree;
    picFour.classList.add('lotPic');
    picFour.src = imgFour;
    picFive.classList.add('lotPic');
    picFive.src = imgFive;
    picSix.classList.add('lotPic');
    picSix.src = imgSix;

    
    lotOne.appendChild(titleOne);
    lotOne.appendChild(picOne);
    lotOne.appendChild(infoOne);
    lotTwo.appendChild(titleTwo);
    lotTwo.appendChild(picTwo);
    lotTwo.appendChild(infoTwo);
    lotThree.appendChild(titleThree);
    lotThree.appendChild(picThree);
    lotThree.appendChild(infoThree);
    lotFour.appendChild(titleFour);
    lotFour.appendChild(picFour);
    lotFour.appendChild(infoFour);
    lotFive.appendChild(titleFive);
    lotFive.appendChild(picFive);
    lotFive.appendChild(infoFive);
    lotSix.appendChild(titleSix);
    lotSix.appendChild(picSix);
    lotSix.appendChild(infoSix);

    menuDiv.appendChild(subname);
    menuDiv.appendChild(menuHeading);
    menuList.appendChild(lotOne);
    menuList.appendChild(lotTwo);
    menuList.appendChild(lotThree);
    menuList.appendChild(lotFour);
    menuList.appendChild(lotFive);
    menuList.appendChild(lotSix);   
    menuMainContent.appendChild(menuDiv);
    menuMainContent.appendChild(emptyDiv);
    menuMainContent.appendChild(menuList);
    menuMainContent.appendChild(timeline);
    mainContent.appendChild(menuMainContent);

    (function () {
      // VARIABLES
      const timeline = document.querySelector(".timeline ol"),
        elH = document.querySelectorAll(".timeline li > div"),
        arrows = document.querySelectorAll(".timeline .arrows .arrow"),
        arrowPrev = document.querySelector(".timeline .arrows .arrow__prev"),
        arrowNext = document.querySelector(".timeline .arrows .arrow__next"),
        firstItem = document.querySelector(".timeline li:first-child"),
        lastItem = document.querySelector(".timeline li:last-child"),
        xScrolling = 280,
        disabledClass = "disabled";
    
      // START    
      function init() {
        setEqualHeights(elH);
        animateTl(xScrolling, arrows, timeline);
        setSwipeFn(timeline, arrowPrev, arrowNext);
        setKeyboardFn(arrowPrev, arrowNext);
      }

      init();
    
      // SET EQUAL HEIGHTS
      function setEqualHeights(el) {
        let counter = 0;
        for (let i = 0; i < el.length; i++) {
          const singleHeight = el[i].offsetHeight;
    
          if (counter < singleHeight) {
            counter = singleHeight;
          }
        }
    
        for (let i = 0; i < el.length; i++) {
          el[i].style.height = `${counter}px`;
        }
      }
    
      // CHECK IF AN ELEMENT IS IN VIEWPORT
      // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
      function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
      }
    
      // SET STATE OF PREV/NEXT ARROWS
      function setBtnState(el, flag = true) {
        if (flag) {
          el.classList.add(disabledClass);
        } else {
          if (el.classList.contains(disabledClass)) {
            el.classList.remove(disabledClass);
          }
          el.disabled = false;
        }
      }
    
      // ANIMATE TIMELINE
      function animateTl(scrolling, el, tl) {
        let counter = 0;
        for (let i = 0; i < el.length; i++) {
          el[i].addEventListener("click", function () {
            if (!arrowPrev.disabled) {
              arrowPrev.disabled = true;
            }
            if (!arrowNext.disabled) {
              arrowNext.disabled = true;
            }
            const sign = this.classList.contains("arrow__prev") ? "" : "-";
            if (counter === 0) {
              tl.style.transform = `translateX(-${scrolling}px)`;
            } else {
              const tlStyle = getComputedStyle(tl);
              // add more browser prefixes if needed here
              const tlTransform =
                tlStyle.getPropertyValue("-webkit-transform") ||
                tlStyle.getPropertyValue("transform");
              const values =
                parseInt(tlTransform.split(",")[4]) +
                parseInt(`${sign}${scrolling}`);
              tl.style.transform = `translateX(${values}px)`;
            }
    
            setTimeout(() => {
              isElementInViewport(firstItem)
                ? setBtnState(arrowPrev)
                : setBtnState(arrowPrev, false);
              isElementInViewport(lastItem)
                ? setBtnState(arrowNext)
                : setBtnState(arrowNext, false);
            }, 1100);
    
            counter++;
          });
        }
      }
    
      // ADD SWIPE SUPPORT FOR TOUCH DEVICES
      function setSwipeFn(tl, prev, next) {
        const hammer = new Hammer(tl);
        hammer.on("swipeleft", () => next.click());
        hammer.on("swiperight", () => prev.click());
      }
    
      // ADD BASIC KEYBOARD FUNCTIONALITY
      function setKeyboardFn(prev, next) {
        document.addEventListener("keydown", (e) => {
          if (e.which === 37 || e.which === 39) {
            const timelineOfTop = timeline.offsetTop;
            const y = window.pageYOffset;
            if (timelineOfTop !== y) {
              window.scrollTo(0, timelineOfTop);
            }
            if (e.which === 37) {
              prev.click();
            } else if (e.which === 39) {
              next.click();
            }
          }
        });
      }
    })();

}

export { render as renderMenu };