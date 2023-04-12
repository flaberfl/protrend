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

let count = 0;
quizeItems[count].classList.add('_active');

btnsNext.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    count++;
    initQuiz();
  });
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

// Функционал аудио-плеера для прослушивания отзывов
/* 
const audioPlayer = document.querySelector(".audio-player");
const audio = new Audio(
  "files/audio/01.mp3"
);


console.dir(audio);

audio.addEventListener(
  "loadeddata",
  () => {
    audioPlayer.querySelector(".time .length").textContent = getTimeCodeFromNum(
      audio.duration
    );
    audio.volume = .75;
  },
  false
);

//click on timeline to skip around
const timeline = audioPlayer.querySelector(".timeline");
timeline.addEventListener("click", e => {
  const timelineWidth = window.getComputedStyle(timeline).width;
  const timeToSeek = e.offsetX / parseInt(timelineWidth) * audio.duration;
  audio.currentTime = timeToSeek;
}, false);

//click volume slider to change volume
const volumeSlider = audioPlayer.querySelector(".controls .volume-slider");
volumeSlider.addEventListener('click', e => {
  const sliderWidth = window.getComputedStyle(volumeSlider).width;
  const newVolume = e.offsetX / parseInt(sliderWidth);
  audio.volume = newVolume;
  audioPlayer.querySelector(".controls .volume-percentage").style.width = newVolume * 100 + '%';
}, false)

//check audio percentage and update time accordingly
setInterval(() => {
  const progressBar = audioPlayer.querySelector(".progress");
  progressBar.style.width = audio.currentTime / audio.duration * 100 + "%";
  audioPlayer.querySelector(".time .current").textContent = getTimeCodeFromNum(
    audio.currentTime
  );
}, 500);

//toggle between playing and pausing on button click
const playBtn = audioPlayer.querySelector(".controls .toggle-play");
playBtn.addEventListener(
  "click",
  () => {
    if (audio.paused) {
      playBtn.classList.remove("play");
      playBtn.classList.add("pause");
      audio.play();
    } else {
      playBtn.classList.remove("pause");
      playBtn.classList.add("play");
      audio.pause();
    }
  },
  false
);

audioPlayer.querySelector(".volume-button").addEventListener("click", () => {
  const volumeEl = audioPlayer.querySelector(".volume-container .volume");
  audio.muted = !audio.muted;
  if (audio.muted) {
    volumeEl.classList.remove("icono-volumeMedium");
    volumeEl.classList.add("icono-volumeMute");
  } else {
    volumeEl.classList.add("icono-volumeMedium");
    volumeEl.classList.remove("icono-volumeMute");
  }
});

//turn 128 seconds into 2:08
function getTimeCodeFromNum(num) {
  let seconds = parseInt(num);
  let minutes = parseInt(seconds / 60);
  seconds -= minutes * 60;
  const hours = parseInt(minutes / 60);
  minutes -= hours * 60;

  if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
  return `${String(hours).padStart(2, 0)}:${minutes}:${String(
    seconds % 60
  ).padStart(2, 0)}`;
}

*/

