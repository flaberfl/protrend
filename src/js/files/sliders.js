/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, {
	Autoplay,
	Pagination
} from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Добавление классов слайдерам
// swiper главному блоку, swiper-wrapper оболочке, swiper-slide для слайдов
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
			observer: true,
			observeParents: true,
			slidesPerView: 'auto',
			spaceBetween: 44,
			// freeMode: true,
			// autoHeight: true,
			speed: 800,
			hashnav: true,
			hashNavigation: {

			},

			//touchRatio: 0,
			//simulateTouch: false,
			// loop: true,
			//preloadImages: false,
			//lazy: true,
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
					spaceBetween: 23,
				},
				768: {
					spaceBetween: 30
				},
				// 992: {
				// 	spaceBetween: 34,
				// },
				// 1268: {
				// 	spaceBetween: 40,
				// },
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
						// result.innerText = numValue;
						let numValue = this.value;

						console.log(numValue);

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
			observer: true,
			observeParents: true,
			slidesPerView: 'auto',
			spaceBetween: 44,
			// freeMode: true,
			// autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			// loop: true,
			//preloadImages: false,
			//lazy: true,
			// Dotts
			pagination: {
				el: '.swiper-pagination-plans_two',
				clickable: true,
			},
			// Arrows
			// navigation: {
			// 	nextEl: '.about__more .more__item_next',
			// 	prevEl: '.about__more .more__item_prev',
			// },

			breakpoints: {
				320: {
					spaceBetween: 23,
				},
				768: {
					spaceBetween: 30
				},
				// 992: {
				// 	spaceBetween: 34,
				// },
				// 1268: {
				// 	spaceBetween: 40,
				// },
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

						itemsStep.forEach(box => {

							box.classList.remove('_active');
						});

						if (numValue >= 1 && numValue <= 3) {
							item1.classList.add('_active');
							swiper.slideTo(0);
						} else if (numValue >= 4 && numValue <= 7) {
							item2.classList.add('_active');
							swiper.slideTo(1);
						} else if (numValue >= 8 && numValue <= 11) {
							item3.classList.add('_active');
							swiper.slideTo(2);
						} else if (numValue >= 12 && numValue <= 50) {
							item4.classList.add('_active');
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
					spaceBetween: -20,
				},
				768: {
					spaceBetween: 20,
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
			/*
			effect: 'fade',
		*/
			// autoplay: {
			// 	delay: 800,
			// 	disableOnInteraction: false,
			// },

			observer: true,
			observeParents: true,
			slidesPerView: 'auto',
			spaceBetween: 30,
			// freeMode: true,
			// autoHeight: true,
			speed: 800,

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