//a function that makes the header position sticky
$(window).on('scroll load', function () {
    if ($(window).scrollTop() > 10) {
        $('#header').addClass('header-active');
    } else {
        $('#header').removeClass('header-active');
    }
});