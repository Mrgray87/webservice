$(document).ready(function(){
	if ($(window).width() < 480) {
		sliderInitSmall();
	} else {
		sliderInitBig();
	}

	function sliderInitBig() {
		$('.portfolio__slider').slick({
			rows: 2,
			variableWidth: true,
			dots: true,
			arrows: false,
			infinite: true,
			speed: 600,
			cssEase: 'ease-in-out',
			autoplay: true,
			slidesToShow: 4,
			slidesToScroll: 4
	});
	}

	function sliderInitSmall() {
		$('.portfolio__slider').slick({
			dots: false,
			arrows: false,
			infinite: true,
			speed: 600,
			variableWidth: true,
			cssEase: 'ease-in-out',
			autoplay: true,
			slidesToShow: 1,
			slidesToScroll: 1,
	});

	let wEl = $(".portfolio__slider ").width();
	$(".slick-slide").css("width", wEl);
	} 
	
$(window).resize(function() {
	var w = $(window).width();
	if(w < 480) {
		$('.portfolio__slider').slick("unslick");
		sliderInitSmall();
	} else {
		$('.portfolio__slider').slick("unslick");
		sliderInitBig();
	}
});
	

$("input[type='tel']").mask("+7 (999) 999-99-99");
$(".header__btn-menu").on("click", function() {
	$(".menu__list").slideToggle();
});
})