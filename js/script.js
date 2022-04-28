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

$('.filter__item').click(function (event) {
	var i = $(this).data('filter');
	if (i == 1) {
		$('.find__card').show();
	} else {
		$('.find__card').hide();
		$('.find__card.f_' + i).show();
	}
	$('.filter__item').removeClass('active');
	$(this).addClass('active')
	return false;
})
