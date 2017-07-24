var navBar = $('.page-header nav'),
    navIcon = $('.nav-icon'),
    navLink = $('.menu a'),
    posY = 100;

$(window).scroll(function () {
    var posW = $(window).scrollTop();
    
    if (posW > posY) {
        navBar.css('background-color', 'rgba(0, 0, 0, .8)');
        navLink.css('color', '#F5F5F5');
    } else {
        navBar.removeAttr('style');
        navLink.removeAttr('style');
    }
});

$(window).resize(function () {
	if ($(window).width() >= 768) {
		navBar.removeClass('change-nav');
		navIcon.removeClass('change-nav-icon');
	}
});

$('.menu, .nav-icon').click(function () {
	if ($(window).width() < 768) {
		navBar.toggleClass('change-nav');
		navIcon.toggleClass('change-nav-icon');
	}
});