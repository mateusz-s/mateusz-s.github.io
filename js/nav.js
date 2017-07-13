var navBar = $('.page-header nav'),
    navIcon = $('#navIcon'),
    navLabel = $('label[for="navIcon"] i.fa'),
    navLink = $('.menu a'),
    posY = 100;
    posWw = 0;

function navbarIcon() {
    if($(this).is(':checked')) {
        navLabel.removeClass('fa-bars').addClass('fa-times');
    } else {
        navLabel.removeClass('fa-times').addClass('fa-bars');
    }
    
    if($(this).is(':checked') && (posWw < posY)) {
        navBar.css('background-color', 'rgba(0, 0, 0, .8)');
        navLink.css('color', '#F5F5F5');
    } else if(navIcon.not(':checked') && (posWw < posY)) {
        navBar.css('background-color', 'transparent');
    }
}

$(window).scroll(function () {
    var posW = $(window).scrollTop();
    posWw = posW;
    if((posW > posY) || ((posW < posY) && navIcon.is(':checked')))  {
        navBar.css('background-color', 'rgba(0, 0, 0, .8)');
        navLink.css('color', '#F5F5F5');
    } else {
        navBar.css('background-color', 'transparent');
        navLink.css('color', '#000000');
    }
});

navIcon.click(navbarIcon);