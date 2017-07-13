$(document).on('click', 'a[href^="#"]', function(event){
    event.preventDefault();
    $('body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 700);
});