$( document ).ready(function() {
    console.log( "ready!" );
    $('.js-humburger').click(function() {
        $('.js-humburger').toggleClass('menu-humburger--open');
        $('.header_nav').toggleClass('header_nav--open');
    });
});