$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger, .header__items').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$('.comments__slider').slick({
		arrows: true,
		dots: true,
	});
});

if (document.documentElement.clientWidth <= 992) {
	$('.welcome__card').click(function (event) {
		if ($('.welcome__row').hasClass('one')) {
			$('.welcome__card').not($(this)).removeClass('active');
		}
		$(this).toggleClass('active');

	});

}
if (document.documentElement.clientWidth > 992) {
	$('.welcome__card').addClass('hover');

}