// Подключение функционала "Чертогов Фрилансера"
import {
  isMobile
} from "./functions.js";
// Подключение списка активных модулей
import {
  flsModules
} from "./modules.js";


// document.addEventListener("DOMContentLoaded", (e) => {

//   //dom объекты элементов контроля
//   var av = document.getElementById("av-tag");
//   var playTime = document.getElementsByClassName("play-time")[0];
//   var playBtn = document.getElementsByClassName("play-btn")[0];
//   var curTime = document.getElementById("cur-time");
//   var volume = document.getElementById("volume");
//   var speaker = document.getElementById("speaker");

//   //переменная для отслеживания воспроизведения звука
//   var isPlaying = false;

//   av.onloadedmetadata = function () {
//     curTime.max = av.duration;
//   };

//   //функция вывода текущего времени воспроизведения
//   av.ontimeupdate = function () {

//     var sec_num = av.currentTime;
//     var hours = Math.floor(sec_num / 3600);
//     var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
//     var seconds = sec_num - (hours * 3600) - (minutes * 60);
//     seconds = Math.round(seconds);

//     if (hours < 10) {
//       hours = "0" + hours;
//     }
//     if (minutes < 10) {
//       minutes = "0" + minutes;
//     }
//     if (seconds < 10) {
//       seconds = "0" + seconds;
//     }
//     playTime.innerHTML = minutes + ':' + seconds;
//     if (isPlaying) curTime.value = av.currentTime;
//   };
//   //функция для настройки громкости
//   volume.onchange = function () {

//     av.volume = volume.value / 10;
//   };
//   //функция для установки начала воспроизведения
//   curTime.onchange = function () {

//     av.pause();
//     av.currentTime = curTime.value;
//     av.play();
//   };
//   //функция для вкл/выкл громкости
//   speaker.onclick = function () {

//     if (volume.value == 0) {
//       volume.value = 10;
//       av.volume = 1;
//     } else {
//       volume.value = 0;
//       av.volume = 0;
//     }
//   };
//   //функция для play/pause и изображения кнопки воспроизведения
//   playBtn.addEventListener("click", (a) => {

//     if (isPlaying) {
//       av.pause();
//       isPlaying = false;
//       // playBtn.innerHTML = "►";
//     } else {
//       av.play();
//       isPlaying = true;
//       // playBtn.innerHTML = "❚❚";
//     }

//   });
// });

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


// const musicPlayerSection = document.querySelector('.music-player-section');

// let clickCount = 1;

// musicPlayerSection.addEventListener("click", () => {
//   if (clickCount >= 2) {
//     musicPlayerSection.classList.add('active');
//     clickCount = 1;
//     return;
//   }
//   clickCount++;
//   setTimeout(() => {
//     clickCount = 1;
//   }, 250)
// });


let currentMusic = 0;
const music = document.querySelector('#audio-source');

const seekBar = document.querySelector('.music-seek-bar');
const currentMusicTime = document.querySelector('.current-time');
const musicDuration = document.querySelector('.duration');

const playBtn = document.querySelector('.play-p');
const pauseBtn = document.querySelector('.pause-p');
const volumeBtn = document.querySelector('.volume-up');
const volumeSlider = document.querySelector('.volume-slider');


playBtn.addEventListener("click", () => {
  music.pLay();
  playBtn.classList.remove('active');
  pauseBtn.classList.add('active');

});


pauseBtn.addEventListener("click", () => {
  music.pause();
  pauseBtn.classList.remove('active');
  playBt.classList.add('active');
});


const setMusic = (i) => {
  seekBar.value = 0;
  currentMusic = i;

  setTimeout(() => {
    seekBar.max = music.duration;
    musicDuration.innerHTML = formatTime(music.duration)
  }, 300);
  currentMusicTime.innerHTML = '00 : 00';
}

setMusic(0);

const formatTime = (time) => {
  let min = Math.floor(time / 60);
  if (min < 10) {
    min = '0' + min;
  }

  let sec = Math.floor(time % 60);
  if (sec < 10) {
    sec = '0' + sec;
  }

  return '${min} : ${sec}';
}


setInterval(() => {
  seekBar.value = music.currentTime;
  currentMusicTime.innerHTML = formatTime(music.currentTime);

}, 500)

seekBar.addEventListener('change', () => {
  music.currentTime = seekBar.value;
})

volumeBtn.addEventListener


// Функции вывода карточек, в зависимости от введенного значениия в input

num.oninput = getValue;
const itemsStep = document.querySelectorAll('.item-step');

function getValue() {
  const item1 = document.getElementById('12');
  const item2 = document.getElementById('35');
  const item3 = document.getElementById('69');
  const item4 = document.getElementById('10');

  // Ограничение вводимых символов
  this.value = this.value.substr(0, 2);
  // result.innerText = numValue;
  let numValue = this.value;

  console.log(numValue);

  itemsStep.forEach(box => {

    box.classList.remove('_active');
  });

  if (numValue >= 1 && numValue <= 2) {
    item1.classList.add('_active');
  } else if (numValue >= 3 && numValue <= 5) {
    item2.classList.add('_active');
  } else if (numValue >= 6 && numValue <= 9) {
    item3.classList.add('_active');
  } else if (numValue >= 10 && numValue <= 50) {
    item4.classList.add('_active');
  };

};

num2.oninput = getValueTwo;

function getValueTwo() {
  const item1 = document.getElementById('13');
  const item2 = document.getElementById('47');
  const item3 = document.getElementById('811');
  const item4 = document.getElementById('120');
  this.value = this.value.substr(0, 2);
  let numValue = this.value;

  itemsStep.forEach(box => {

    box.classList.remove('_active');
  });

  if (numValue >= 1 && numValue <= 3) {
    item1.classList.add('_active');
  } else if (numValue >= 4 && numValue <= 7) {
    item2.classList.add('_active');
  } else if (numValue >= 8 && numValue <= 11) {
    item3.classList.add('_active');
  } else if (numValue >= 12 && numValue <= 50) {
    item4.classList.add('_active');
  };
};


/* Функционал КВИЗА  */

const quize = document.getElementById('quiz-form');
const quizeItems = quize.querySelectorAll('fieldset');
const btnsNext = quize.querySelectorAll('.quiz-form__button_next');
const btnsPrev = quize.querySelectorAll('.quiz-form__button_prev');

btnsNext.forEach((btn, btnIndex) => {
  btn.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(btnIndex);

    quizeItems[btnIndex].style.display = 'none';
    quizeItems[btnIndex + 1].style.display = 'block';
  });
});

btnsPrev.forEach((btn, btnIndex) => {
  btn.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(btnIndex);

    quizeItems[btnIndex + 1].style.display = 'none';
    quizeItems[btnIndex - 1].style.display = 'block';

  });
});

quizeItems.forEach((quizeItem, quizeItemIndex) => {
  if (quizeItemIndex === 0) {
    quizeItem.style.display = 'block';
  } else {
    quizeItem.style.display = 'none';
  }
})
// console.log(item);