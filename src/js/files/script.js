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
  // console.log(playBtn.classList);
  // console.log(pauseBtn.classList);
});


pauseBtn.addEventListener("click", () => {
  music.pause();
  pauseBtn.classList.remove('active');
  playBt.classList.add('active');
});


// const setMusic = () => {
//   seekBar.value = 0;

//   setTimeout(() => {
//     seekBar.max = music.duration;
//     musicDuration.innerHTML = formatTime(music.duration)
//   }, 300);
//   currentMusicTime.innerHTML = '00 : 00';
// }

// setMusic(0);

// const formatTime = (time) => {
//   let min = Math.floor(time / 60);
//   if (min < 10) {
//     min = '0' + min;
//   }

//   let sec = Math.floor(time % 60);
//   if (sec < 10) {
//     sec = '0' + sec;
//   }

//   return '${min} : ${sec}';
// }


// setInterval(() => {
//   seekBar.value = music.currentTime;
//   currentMusicTime.innerHTML = formatTime(music.currentTime);

// }, 500)

// seekBar.addEventListener('change', () => {
//   music.currentTime = seekBar.value;
// })









// let classNamesRE = /^(start|stop|status)$/;

// let input = document.getElementById("my-field");

// let div = document.querySelector(".sos");



// let onInputHandler = event => {

//   let match = event.target.value.match(classNamesRE);



//   if (!match) match = ["", "error"];



//   event.target.className = div.className = ["sos", match[1]].join(" ");

// };



// input.addEventListener("input", onInputHandler);