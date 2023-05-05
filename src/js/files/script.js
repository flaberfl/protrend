// Подключение функционала "Чертогов Фрилансера"
import {
  isMobile
} from "./functions.js";
// Подключение списка активных модулей
import {
  flsModules
} from "./modules.js";


// При скролле вниз-шапка уходит вверх

let scrollpos = window.scrollY
let lastScroll = 0;
const scrollChange = 80
const defaultOffset = 80;
const add_class_on_scroll = () => header.classList.add("_header-bg")
const remove_class_on_scroll = () => header.classList.remove("_header-bg")
const header = document.querySelector('.header');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('_hide');

window.addEventListener('scroll', () => {
  if (scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
    //scroll down
    header.classList.add('_hide');
  } else if (scrollPosition() < lastScroll && containHide()) {
    //scroll up
    header.classList.remove('_hide');
  }

  lastScroll = scrollPosition();
})

window.addEventListener('scroll', function () {
  scrollpos = window.scrollY;

  if (scrollpos >= scrollChange) {
    add_class_on_scroll()
  } else {
    remove_class_on_scroll()
  }
})

const itemsTab = document.querySelectorAll('.tabs__title');
let countTab = 0;
itemsTab[countTab].classList.add('_tab-active');

const typesItems = document.querySelectorAll('.types-crm__item');
// const contItemsTab = 0;
typesItems.forEach((element, i) => {
  if (i === 0)
    element.classList.add('types-crm__item_chess')
  if (i === 1)
    element.childNodes[1].classList.add('types-crm__image_crm')
  if (i === 2)
    element.childNodes[1].classList.add('types-crm__image_crm')
  if (i === 3) {
    element.childNodes[1].classList.add('types-crm__image_an')
  }
  if (i === 4) {
    element.childNodes[3].classList.add('w50wh');
  }
  // if (i === 4) {
  //   element.childNodes[3].classList.add('types-crm__image_an1')
  // }
  // console.log(element.childNodes); // Дочерний элемент
})

const itemsSlideOne = document.querySelectorAll('.step-one-plans__item');
const itemsSlideTwo = document.querySelectorAll('.step-two-plans__item');

itemsSlideOne.forEach((element, i) => {
  if (i === 0)
    element.setAttribute('id', '12');
  if (i === 1)
    element.setAttribute('id', '35');
  if (i === 2)
    element.setAttribute('id', '69');
  if (i === 3)
    element.setAttribute('id', '10');
  // console.log(element.childNodes[1]); // Дочерний элемент
})

itemsSlideTwo.forEach((element, i) => {
  if (i === 0)
    element.setAttribute('id', '13');
  if (i === 1)
    element.setAttribute('id', '47');
  if (i === 2)
    element.setAttribute('id', '811');
  if (i === 3) {
    element.setAttribute('id', '120');
    element.classList.add('change');
  }
  // console.log(element.childNodes[1]); // Дочерний элемент
})

const itemsStepValue = document.querySelectorAll('.list-item-step__value');

itemsStepValue.forEach((element, i) => {
  if (i === 49)
    element.classList.add('list-item-step__value_sm')
  if (i === 50)
    element.classList.add('list-item-step__value_sm')
})


// console.log(countTab);

/* Функционал КВИЗА  */

const quize = document.getElementById('quiz-form');
const quizeItems = quize.querySelectorAll('.quiz-form__fieldset');
const btnsNext = quize.querySelectorAll('.quiz-form__button_next');
const btnsPrev = quize.querySelectorAll('.quiz-form__button_prev');

// quizeItems.forEach((quizeItem, quizeItemIndex) => {
//   if (quizeItemIndex === 0) {
//     quizeItem.classList.add('_active');
//   } else {
//     quizeItem.classList.remove('_active');
//   }
// });

// btnsNext.forEach((btn, btnIndex) => {
//   btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     quizeItems[btnIndex].classList.remove('_active');
//     quizeItems[btnIndex + 1].classList.add('_active');
//   });

// });

// btnsPrev.forEach((btn, btnIndex) => {
//   btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     quizeItems[btnIndex].classList.remove('_active');
//     quizeItems[btnIndex].classList.add('_active');
//   });

// });




let count = 0;
quizeItems[count].classList.add('_active');

btnsNext.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    count++;
    initQuiz();
  });

  btn.disabled = true;

  if (btn.classList.contains('quiz-form__button_start')) {
    btn.disabled = false;
  }
});


btnsPrev.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    count--;
    initQuiz();
  });
});

function initQuiz() {
  quizeItems.forEach((element, i) => {
    element.classList.remove('_active')
    if (i === count) {
      element.classList.add('_active')
    }
  })
}

const other = document.getElementById('other');
// const answer = document.getElementById('answer');
const startNext = document.getElementById('start-next');

// document.getElementById('other').onchange = function() {
//   document.getElementById('answer').disabled = !this.checked;
// };


answer.disabled = true;

other.addEventListener('change', e => {
  answer.disabled = true;
  startNext.disabled = false;

  if (e.target.checked === true) {
    answer.disabled = false;
    startNext.disabled = true;
    console.log(startNext.disabled);
  }

  if (e.target.checked === false) {
    startNext.disabled = false;
    answer.value = '';
  }
});

answer.oninput = ValueInp;

function ValueInp() {
  console.log(this.value);

  if (this.value !== '') {
    startNext.disabled = false;
  } else {
    startNext.disabled = true;
  }
}

quizeItems.forEach((quizeItem, quizeItemIndex) => {

  quizeItem.addEventListener('change', (e) => {
    const target = e.target;
    const inputsChecked = quizeItem.querySelectorAll('input:checked');

    if (inputsChecked.length > 0) {
      // разблокировать кнопку именно эту
      btnsNext[quizeItemIndex].disabled = false;
    } else {
      // заблокировать эту кнопку
      btnsNext[quizeItemIndex].disabled = true;
    }

    if (other.checked === true) {
      btnsNext[quizeItemIndex].disabled = true;
    }
    if (answer.value !== '') {
      btnsNext[quizeItemIndex].disabled = false;
    }
  })

});

// Отключение ввода цифр в инпуте Ваше Имя

const inputName = document.querySelectorAll('.form__input_name');
const regex = /[0-9]/g;

inputName.forEach(i => {
  i.oninput = function () {
    this.value = this.value.replace(regex, '');
  };
});

// Останов проигрыывателя при запуске другого аудио проигрывателя

document.addEventListener('play', (event) => {
  const audios = [...document.getElementsByTagName('audio')];

  audios.forEach((audio) => audio !== event.target && audio.pause());
}, true);