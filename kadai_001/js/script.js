$(function () {

  $('.fade-nav').on('mouseover', function () {
    $(this).animate({
      opacity: 0.6,
    },200);
  });

  $('.fade-nav').on('mouseout', function () {
    $(this).animate({
      opacity: 1,
    },200);
  });

  $('#carousel').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 3500,
    fade: true,
    speed: 1000,
  });

  $('.fade').on('mouseover', function () {
    $(this).animate({
      opacity: 0.6,
      cssEase: 'ease-out',
    }, 300);
  });

  $('.fade').on('mouseout', function () {
    $(this).animate({
      opacity: 1,
      cssEase: 'ease-in'
    }, 300);
  });

  $(window).on('scroll', function () {
    let scroll = $(this).scrollTop();
    if (scroll >= 100) {
      $('#topIcon').fadeIn(300);
    } else {
      $('#topIcon').fadeOut(300);
    }
  });

  $('#topIcon').on('mouseover', function () {
    $(this).animate({
      opacity: 0.6,
    }, 200);
  });

  $('#topIcon').on('mouseout', function () {
    $(this).animate({
      opacity: 1,
    }, 200);
  });

  $('.fade').on('click', function () {
    const src = $(this).attr('src');
    $('#modalImg').attr('src', src);
    $('.modal').fadeIn(300);
  });
  
  $('#close-button').on('click', function () {
    $('.modal').fadeOut();
  });
  
  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    let href = $(this).attr('href');
    let target = href === '#' ? 'html' : href;
    let position = $(target).offset().top;
    $('html, body').animate({
      scrollTop: position,
    }, 500, 'swing');
  });

  let offsetAbout = $('.about').offset().top;
  let offsetWorks = $('.works').offset().top;
  let height = $(window).height();
  
  $(window).on('scroll', function() {
    let scroll = $(window).scrollTop();
    if (scroll >= offsetAbout - height) {
      $('.about').animate({
        opacity: 1,
      }, 1000);
    }
    if (scroll >= offsetWorks - height) {
      $('.works').animate({
        opacity: 1,
      }, 1000);
    }
  });

});