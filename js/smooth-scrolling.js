$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    $('**html, body**').animate({ // Bugfix jQuery animate scrolling for Mozilla Firefox
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});