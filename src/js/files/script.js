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

// btnsPrev.forEach((btn, btnIndex) => {
//   btn.addEventListener('click', (event) => {
//     event.preventDefault();
//     console.log(btnIndex);
//     quizeItems[btnIndex + 1].style.display = 'none';
//     quizeItems[btnIndex].style.display = 'block';
//   });
// });

for (let i = 0; i < btnsPrev.length; i++) {
  // const element = array[index];
  btnsPrev[i].addEventListener('click', (event) => {
    event.preventDefault();
    quizeItems[i + 1].style.display = 'none';
    quizeItems[i].style.display = 'block';
  })
}

quizeItems.forEach((quizeItem, quizeItemIndex) => {
  if (quizeItemIndex === 0) {
    quizeItem.style.display = 'block';
  } else {
    quizeItem.style.display = 'none';
  }
})
// console.log(item);



// let current = 0;
// let setNewActive = function(duration) {
//   let elements = document.getElementById('quiz-form').getElementsByTagName('fieldset');
//   for (let i = 0; i < elements.length; i++) {
//     if (elements[i].classList.contains('active')) {
//       current = i;
//     }
//     elements[i].removeAttribute("class");
//   }
//   if (duration === 'up' && current > 0)
//     current--;
//   if (duration === 'down' && current < elements.length - 2)
//     current++;
//   elements[current].setAttribute('class', 'active');
// }




// let quiz_form = document.querySelector('.quiz-form');
// if (quiz_form) {
//   let PrevBtn = quiz_form.querySelector('.quiz-form__button_prev');
//   let nextBtn = quiz_form.querySelector('.quiz-form__button_next"');
//   let quizAll = quiz_form.querySelectorAll('.quiz-form__fieldset');
//   // let currentQ = quiz_form.querySelector('.currentQ');
//   // let progressQ = quiz_form.querySelector('.progress');
//   // let progress = 0;
//   let count = 0;
//   // let progressPercent = 100 / (quizAll.length - 1);
//   // initProgress();
//   removeBtn();



//   // quiz_form.querySelector('.allQ').textContent = `${quizAll.length}`;

//   nextBtn.addEventListener('click', (event) => {
//     event.preventDefault();
//     // currentQ.textContent++;
//     count++
//     // progress += Number(progressPercent.toFixed(3));
//     initQuiz();
//     // initProgress();
//     // removeBtn();
//     // blockBtn();
//   })


//   PrevBtn.addEventListener('click', (event) => {
//     event.preventDefault();
//     count--
//     // currentQ.textContent--;
//     // progress -= Number(progressPercent.toFixed(3));
//     initQuiz();
//     // initProgress();
//     // removeBtn();
//     // blockBtn();
//   })

//   function initQuiz() {
//     quizAll.forEach((element, i) => {
//       element.classList.remove('active')
//       if (i === count) {
//         element.classList.add('active')
//       }
//     })
//   }

//   function initProgress() {
//     progressQ.style.width = `${progress}%`;
//   }

//   function removeBtn() {
//     if (count === 0) {
//       PrevBtn.style.display = 'none'
//     } else if (count !== 0) {
//       PrevBtn.style.display = 'block'
//     }
//     if (count === quizAll.length - 1) {
//       nextBtn.style.display = 'none'
//     } else if (count !== quizAll.length) {
//       nextBtn.style.display = 'block'
//     }
//   }


//   function blockBtn() {
//     let select = quiz_form.querySelector('.select');
//     let phone = quiz_form.querySelector('#phone');
//     let gender = quiz_form.querySelectorAll("[name = 'gender']");
//     let nameInput = quiz_form.querySelector('[name = "name"]');
//     let skill = quiz_form.querySelectorAll('[name = "skill"]');
//     let contact = quiz_form.querySelectorAll('[name = "contact"]');
//     let nextBtnParent = nextBtn.parentElement;
//     let formBtn = quiz_form.querySelector('.form_btn');
//     let countGender = gender.length;
//     let countSkill = skill.length;

//     if (count === 0) {
//       if ((!nameInput.value) || (nameInput.value === ' ')) {
//         nextBtnParent.classList.add('blockBtn');
//       } else {
//         nextBtnParent.classList.remove('blockBtn');
//       }
//       nameInput.addEventListener('keyup', function () {
//         if ((!this.value) || (this.value === ' ')) {
//           nextBtnParent.classList.add('blockBtn');
//         } else {
//           nextBtnParent.classList.remove('blockBtn');
//         }
//       })
//     }

//     if (count === 1) {
//       function addSelectClass() {
//         if (select.options.selectedIndex === 0) {
//           nextBtnParent.classList.add('blockBtn');
//         } else {
//           nextBtnParent.classList.remove('blockBtn');
//         }
//       }
//       addSelectClass();

//       select.addEventListener('click', function () {
//         addSelectClass();
//       })
//     }

//     if (count === 2) {
//       gender.forEach(element => {
//         function addGenderClass() {
//           if (element.checked) {
//             nextBtnParent.classList.remove('blockBtn');
//             countGender++
//           } else {
//             nextBtnParent.classList.add('blockBtn');
//             countGender--
//           }
//           if (countGender > 0) {
//             nextBtnParent.classList.remove('blockBtn');
//           }
//         }
//         addGenderClass();

//         element.addEventListener('click', function () {
//           addGenderClass();
//         })
//       })
//     }

//     if (count === 3) {
//       skill.forEach((element, i, arr) => {

//         function addSkillClass() {
//           if (element.checked) {
//             countSkill++
//             nextBtnParent.classList.remove('blockBtn');
//           } else {
//             nextBtnParent.classList.add('blockBtn');
//             countSkill--
//           }
//           if (countSkill > 0) {
//             nextBtnParent.classList.remove('blockBtn');
//           }
//         }

//         addSkillClass();

//         element.addEventListener('click', function () {
//           addSkillClass();
//         })
//       })
//     }

//     if (count === quizAll.length - 1) {

//       contact.forEach((element) => {
//         if ((!element.value) || (element.value === ' ')) {
//           formBtn.classList.add('blockBtn');
//         } else {
//           formBtn.classList.remove('blockBtn');
//         }

//         element.addEventListener('keyup', function () {
//           if ((!element.value) || (element.value === ' ')) {
//             formBtn.classList.add('blockBtn');
//           } else {
//             formBtn.classList.remove('blockBtn');
//           }
//         })

//       })

//     }

//     // VALID FORM THE END

//   }

// }