let ready = (callback) => {
	if (document.readyState != "loading") callback();
	else document.addEventListener("DOMContentLoaded", callback);
}


ready(() => {

	//MENU
		let iconMenu=document.querySelector(".icon-menu");
		let body=document.querySelector("body");
		let menuBody=document.querySelector(".menu__body");
	iconMenu.addEventListener("click", (e) => {
		iconMenu.classList.toggle("active");
		body.classList.toggle("lock");
		menuBody.classList.toggle("active");
	});

	// // //SLIDER
	// 	let slider=document.querySelectorAll(".slider");
	// slider.forEach(el => {
	// 	let sliderItem = new Glide(el, {
	// 		type: 'carousel',
	// 		perView: 1,
	// 	});
	// 	sliderItem.mount();
	// });

	// //IBG
	document.querySelectorAll(".ibg").forEach(el => {
		if(el.querySelector('img')){
			el.style.backgroundImage = 'url('+el.querySelector('img').getAttribute('src')+')';
			el.querySelector('img').style.display = 'none';
		}
	});
});


// //SLIDERS
// if($('.slider__body').length>0){
// 	$('.slider__body').slick({
// 		//autoplay: true,
// 		//infinite: false,
// 		dots: true,
// 		arrows: false,
// 		accessibility:false,
// 		slidesToShow:1,
// 		autoplaySpeed: 3000,
// 		adaptiveHeight:true,
// 		nextArrow:'<button type="button" class="slick-next"></button>',
// 		prevArrow:'<button type="button" class="slick-prev"></button>',
// 		responsive: [{
// 			breakpoint: 768,
// 			settings: {}
// 		}]
// 	});
// }

$(document).ready(function(){
	$('.slider').slick({
	 //    стрелки: да - нет
		arrows:false,
	 //    радиокнопки: да - нет
		dots:true,
	 //    подстраиваться под высоту картинок: да - нет
		adaptiveHeight:true,
	 //    кол-во картинок в слайдере
		slidesToShow:1,
	 //    по сколько картинок перелистывать
		slidesToScroll:1,
	 //    скорость перелистывания в мили-секундах
		speed:1000,
	 //    анимация 
		easing:'ease',
	 //    слайдер бесконечный: да - нет
		infinite:true,
	 //    с какой картинки начинать показ
		 initialSlide:0,
	 // свайп (перетаскивание слайдов мышкой) для ПК
		 draggable:true,
	 // свайп (перетаскивание слайдов мышкой) для для мобильных
		 swipe:true,
	 // расстояние для свайпа, сколько надо крутить (по умолчанию 5)
		 touchThreshold:10,
	 // при свайве: перетаскивание зажатым пальцем или просто клик
		 touchMove:true,
	 // если быстро быстро кликать по кнопке будет перелистываться быстро или по времени анимации
		 waitForAnimate:true,
	 // главный слайд встает ровно по центру, можно добавить ему стили
		 centerMode:true,
	});
})
