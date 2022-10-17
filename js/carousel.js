let swiper = new Swiper(".mySwiper",{
	slidesPerView: "auto",
	spaceBetween: 10,
	loop: true,
	speed: 2000,
	autoplay:{
		delay: 2000,
		disableOnInteraction: false,
		pauseOnMouseEnter: true,
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
})
