import Swiper, {
	Autoplay,
	Pagination
} from 'swiper';

import "../../scss/base/swiper.scss";

function bildSliders() {
	//BildSlider
	let sliders = document.querySelectorAll('[class*="__swiper"]:not(.swiper-wrapper)');
	if (sliders) {
		sliders.forEach(slider => {
			slider.parentElement.classList.add('swiper');
			slider.classList.add('swiper-wrapper');
			for (const slide of slider.children) {
				slide.classList.add('swiper-slide');
			}
		});
	}
}
// Инициализация слайдеров
function initSliders() {
	// Добавление классов слайдера
	// при необходимости отключить
	bildSliders();

	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.plans__slider_one')) { // Указываем класс нужного слайдера
		// Создаем слайдер
		new Swiper('.plans__slider_one', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Pagination],
			/*
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/
			scrollbar: {
				container: '.swiper-wrapper',
				hide: false,
				draggable: true,
				snapOnRelease: true
			},
			observer: true,
			observeParents: true,
			// slidesPerView: 'auto',
			spaceBetween: 44,
			// freeMode: true,
			// autoHeight: true,
			speed: 1500,
			// hashnav: true,
			// hashNavigation: {

			// },

			//touchRatio: 0,
			//simulateTouch: false,
			// loop: true,
			//preloadImages: false,
			lazy: true,
			// Dotts
			pagination: {
				el: '.swiper-pagination-plans_one',
				clickable: true,
			},
			// Arrows
			// navigation: {
			// 	nextEl: '.about__more .more__item_next',
			// 	prevEl: '.about__more .more__item_prev',
			// },

			breakpoints: {
				320: {
					spaceBetween: 20,
					slidesPerView: 1.2,

				},
				480: {
					spaceBetween: 20,
					slidesPerView: 1.7,

				},
				768: {
					slidesPerView: 2.5,
					spaceBetween: 30
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 34,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 44,
				},
			},

			on: {
				init: function (swiper) {
					num.oninput = getValue;

					const itemsStep = document.querySelectorAll('.item-step');

					function getValue() {
						const item1 = document.getElementById('12');
						const item2 = document.getElementById('35');
						const item3 = document.getElementById('69');
						const item4 = document.getElementById('10');

						// Ограничение вводимых символов
						this.value = this.value.substr(0, 2);

						// Введенное число > 50 - блокируется ввод
						if (this.value > 50) {
							this.value = this.value.substr(0, 1);
						}

						// if (numValue > 50) {
						// 	numValue == 0;
						// }
						// result.innerText = numValue;
						let numValue = this.value;

						itemsStep.forEach(box => {

							box.classList.remove('_active');
						});

						if (numValue >= 1 && numValue <= 2) {
							item1.classList.add('_active');
							swiper.slideTo(0);
						} else if (numValue >= 3 && numValue <= 5) {
							item2.classList.add('_active');
							swiper.slideTo(1);
						} else if (numValue >= 6 && numValue <= 9) {
							item3.classList.add('_active');
							swiper.slideTo(2);
						} else if (numValue >= 10 && numValue <= 50) {
							item4.classList.add('_active');
							swiper.slideTo(3);
						};

					};
				}
			}
		});
	}

	if (document.querySelector('.plans__slider_two')) { // Указываем класс нужного слайдера
		// Создаем слайдер
		new Swiper('.plans__slider_two', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Pagination],
			/*
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/
			scrollbar: {
				container: '.swiper-wrapper',
				hide: false,
				draggable: true,
				snapOnRelease: true
			},
			observer: true,
			observeParents: true,
			// slidesPerView: 'auto',
			spaceBetween: 44,

			speed: 1500,

			pagination: {
				el: '.swiper-pagination-plans_two',
				clickable: true,
			},

			breakpoints: {
				320: {
					spaceBetween: 20,
					slidesPerView: 1.2,

				},
				480: {
					spaceBetween: 20,
					slidesPerView: 1.7,

				},
				768: {
					slidesPerView: 2.5,
					spaceBetween: 30
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 34,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 44,
				},
			},

			on: {
				init: function (swiper) {

					num2.oninput = getValueTwo;
					const itemsStep = document.querySelectorAll('.item-step');

					function getValueTwo() {
						const item1 = document.getElementById('13');
						const item2 = document.getElementById('47');
						const item3 = document.getElementById('811');
						const item4 = document.getElementById('120');
						this.value = this.value.substr(0, 2);
						let numValue = this.value;
						if (this.value > 50) {
							this.value = this.value.substr(0, 1);
						}
						itemsStep.forEach(box => {

							box.classList.remove('_active-2');
						});

						if (numValue >= 1 && numValue <= 3) {
							item1.classList.add('_active-2');
							swiper.slideTo(0);
						} else if (numValue >= 4 && numValue <= 7) {
							item2.classList.add('_active-2');
							swiper.slideTo(1);
						} else if (numValue >= 8 && numValue <= 11) {
							item3.classList.add('_active-2');
							swiper.slideTo(2);
						} else if (numValue >= 12 && numValue <= 50) {
							item4.classList.add('_active-2');
							swiper.slideTo(3);
						};
					};
				}

			}
		});
	}
	if (document.querySelector('.clients-reviews__slider')) { // Указываем класс нужного слайдера
		// Создаем слайдер
		new Swiper('.clients-reviews__slider', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Autoplay],
			/*  
			effect: 'fade', */
			autoplay: {
				delay: 800,
				disableOnInteraction: false,
			},

			observer: true,
			observeParents: true,
			slidesPerView: 'auto',
			spaceBetween: 45,
			// freeMode: true,
			// autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,
			// Dotts
			// pagination: {
			// 	el: '.swiper-pagination-plans_two',
			// 	clickable: true,
			// },
			// Arrows
			// navigation: {
			// 	nextEl: '.about__more .more__item_next',
			// 	prevEl: '.about__more .more__item_prev',
			// },

			breakpoints: {
				320: {
					spaceBetween: -10,
				},
				480: {
					spaceBetween: 20,
				},
				768: {
					spaceBetween: 40,
				},
				992: {
					spaceBetween: 45,
				}
			},

			on: {

			}
		});
	}
	if (document.querySelector('.reviews-clients__slilder')) { // Указываем класс нужного слайдера
		// Создаем слайдер
		new Swiper('.reviews-clients__slilder', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Pagination],

			scrollbar: {
				container: '.swiper-wrapper',
				hide: false,
				draggable: true,
				snapOnRelease: true
			},
			observer: true,
			observeParents: true,
			slidesPerView: 'auto',
			spaceBetween: 30,
			// freeMode: true,
			// autoHeight: true,
			speed: 1500,

			//touchRatio: 0,
			//simulateTouch: false,
			// loop: true,
			//preloadImages: false,
			//lazy: true,
			// Dotts
			pagination: {
				el: '.swiper-pagination-reviews',
				clickable: true,
			},
			// Arrows
			// navigation: {
			// 	nextEl: '.about__more .more__item_next',
			// 	prevEl: '.about__more .more__item_prev',
			// },

			breakpoints: {
				320: {
					spaceBetween: 15,
				},
				768: {
					spaceBetween: 20
				},
				992: {
					spaceBetween: 30,
				},
				// 1268: {
				// 	spaceBetween: 40,
				// },
			},

			on: {

			}
		});
	}
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	// Добавление классов слайдера
	// при необходимости отключить
	bildSliders();

	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});