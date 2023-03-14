$(function () {
  $(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 50) {
      $('.mainHeader').addClass('on');
    } else {
      $('.mainHeader').removeClass('on');
    }
  });

  $('.mainSlide').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    arrows: true,
    dots: true,
    draggable: false,
  });

  $('.slick-dots').wrap("<div class='slick-dots-container'></div>");
  $('.slick-dots-container').append('<button class="btn"></button>');

  var sw = 0;
  $('.btn').click(function () {
    if (sw == 0) {
      $('.btn').addClass('on');
      $('.mainSlide').slick('slickPause');
      sw = 1;
    } else {
      $('.btn').removeClass('on');
      $('.mainSlide').slick('slickPlay');
      sw = 0;
    }
  });

  $('.eventSlide').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    arrows: true,
    dots: true,
    draggable: false,
  });

  $('.noticeSlide').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    arrows: true,
    draggable: false,
  });

  $('.btn-check').on('click', function () {
    $(this).toggleClass('on');
    $('.usedcar-link').toggleClass('on');
  });
});
