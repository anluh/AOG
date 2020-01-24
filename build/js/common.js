$( document ).ready(function() {
    $('.js-humburger').click(function() {
        $('.js-humburger').toggleClass('menu-humburger--open');
        $('.header_nav').toggleClass('header_nav--open');
    });

    $('.js-nav').click(function(e) {
      if(e.target.tagName === 'A') {
        e.preventDefault();
        let anchor = e.target.getAttribute('href');
        if ($(anchor).length < 1) return

        $('html, body').animate({
            scrollTop: $(anchor).offset().top
        }, 500);
        if ($('.js-humburger').hasClass('menu-humburger--open')) {
          $('.js-humburger').click();
        }
      }
    })
});
