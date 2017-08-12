var navBar = $('.page-header nav'),
    navIcon = $('.nav-icon'),
    navLink = $('.menu a'),
    posY = 60,
	breakPointMD = 768;

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
	if (window.innerWidth >= breakPointMD) {
		navBar.removeClass('change-nav');
		navIcon.removeClass('change-nav-icon');
	}
});

$('.menu, .nav-icon').click(function () {
	if (window.innerWidth < breakPointMD) {
		navBar.toggleClass('change-nav');
		navIcon.toggleClass('change-nav-icon');
	}
});

// $(window).width() - browser window width
// window.innerWidth - viewport width