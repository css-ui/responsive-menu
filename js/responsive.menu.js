
/*
 * Responsive menu.
 */
(function($) {

	// perfect scrollbar
	new PerfectScrollbar('.scrollbar');

	// click show/hide menu
	$('.nav .click').on('click', function() {
		$('.nav .responsive').toggleClass('expandable');
	});

	// responsive menu
	$('ul.menu li').each(function() {
		if ($(this).children('li.parent a.current').length > 0 ) {
			$(this).parent().find('ul.submenu').toggle();
			$(this).parent().find('li.parent a.employ').addClass('active');
		}
	});

	// responsive active menu
	$('ul.menu li a').on('click', function() {
		$(this).parent('li.parent').find('a.employ').toggleClass('active');
		$(this).parent().find('ul.submenu').slideToggle('fast');
		$(this).parent().find('ul.submenu ul.submenu').toggle();
	});

}(jQuery));
