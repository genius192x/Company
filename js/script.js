$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger, .header__items').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$('.header__items').click(function (event) {
		$('.header__burger, .header__items').removeClass('active');
		$('body').removeClass('lock');

	});
	$('.comments__slider').slick({
		arrows: true,
		dots: true,
		slidesToShow: 1,
		autoplay: true,
		autoplaySpeed: 2000,

		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 900,
				settings: {
					arrows: false,
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
				}
			}
		]
	});
	$('.find__slider').slick({
		arrows: false,
		dots: true,
		slidesToShow: 3,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 2000,



		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 770,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					arrows: false,
					dots: true
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			}
		]
	});

	$(".find__list li").on('click', function () {
		var filter = $(this).data('filter');
		$(".find__slider").slick('slickUnfilter');

		if (filter == '2') {
			$(".find__slider").slick('slickFilter', '.find__card.f_2');
		}
		else if (filter == '3') {
			$(".find__slider").slick('slickFilter', '.find__card.f_3');
		}
		else if (filter == '4') {
			$(".find__slider").slick('slickFilter', '.find__card.f_4');
		}
		else if (filter == '5') {
			$(".find__slider").slick('slickFilter', '.find__card.f_5');
		}
		else if (filter == '6') {
			$(".find__slider").slick('slickFilter', '.find__card.f_6');
		}
		else if (filter == '1') {

			$(".find__slider").slick('slickUnfilter');
		}
		return false;

	})
});

if (document.documentElement.clientWidth <= 992) {
	$('.welcome__card').click(function (event) {
		if ($('.welcome__row').hasClass('one')) {
			$('.welcome__card').not($(this)).removeClass('active');
		}
		$(this).toggleClass('active');

	});


}
if (document.documentElement.clientWidth <= 992) {
	$('.find__card').click(function (event) {
		if ($('.find__row').hasClass('one')) {
			$('.find__card').not($(this)).removeClass('active');
		}
		$(this).toggleClass('active');

	});


}

if (document.documentElement.clientWidth > 992) {
	$('.welcome__card, .find__card').addClass('hover');


}


$('.filter__item').click(function (event) {
	// var i = $(this).data('filter');
	// if (i == 1) {
	// 	$('.find__card').show();
	// } else {
	// 	$('.find__card').hide();
	// 	$('.find__card.f_' + i).show();
	// }
	$('.filter__item').removeClass('active');
	$(this).addClass('active')
	return false;
})

$("a.menu__link").on("click", function (e) {
	e.preventDefault();
	var anchor = $(this).attr('href');
	$('html, body').stop().animate({
		scrollTop: $(anchor).offset().top - 0
	}, 700);
});

