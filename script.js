$(document).ready(function() {
    $('#menu').click(function() {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('active');
    });

    $(window).on('scroll load', function() {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('active');
    });

    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'linear');
    });
});