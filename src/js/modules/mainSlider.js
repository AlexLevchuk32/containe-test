import Swiper from 'swiper/bundle';

export const mainSlider = new Swiper('.main-slider-swiper', {
	watchOverflow: true,
	loop: true,
	// autoplay: {
	// 	delay: 4000,
	// 	disableOnInteraction: false,
	// 	pauseOnMouseEnter: true,
	// },
	breakpoints: {
		320: {
			spaceBetween: 10,
			slidesPerView: 1.06666,
		},
		460: {
			spaceBetween: 10,
			slidesPerView: 1.5,
		},
		576: {
			spaceBetween: 15,
			slidesPerView: 2.5,
		},
	},

	pagination: {
		el: '.main-slider-pagination',
		clickable: true,
	},

	navigation: {
		nextEl: '.main-slider-btn-next',
		prevEl: '.main-slider-btn-prev',
	},
});
