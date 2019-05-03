
/*!
 * CSS UI - Responsive menu
 * Copyright Zdeněk Papučík
 * MIT License
 */
(function($) {


	// toggle sidebar menu
	$('.nav .click').on('click', function() {
		$('.nav .responsive').toggleClass('expandable');
	});


	// init menu
	$('ul.menu li').each(function() {
		$(this).parent().find('li.parent a.employ').addClass('up');
		if ($(this).find('li.parent a.current').length > 0 ) {
			$(this).parent().find('a.current').addClass('active down');
			$(this).parent().find('a.current').next('ul.submenu').show();
		}
	});


	// active menu
	$('ul.menu li a').on('click', function() {
		$(this).parent().find('a.employ').toggleClass('active');
		$(this).next('ul.submenu').slideToggle('fast');
	});


	// click transition
	$('a.employ').on('click', function() {
		$(this).addClass('transition');
		$(this).toggleClass('rotate');
		if ($(this).parent().find('a.employ').hasClass('down')) {
			$(this).toggleClass('rotate-revert');
		}
	});


}(jQuery));
