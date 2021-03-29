$(function(){
  new WOW().init();
  $('.hamburger').on('click', function(){
    $('.hamburger').toggleClass('is-active');
    $('.header__menu').toggleClass('active');
    $('body').toggleClass('fixed-page');
  });
  $('.header__menu-link').on('click',function(){
    $('.header__menu').removeClass('active');
    $('.hamburger').removeClass('is-active');
   });
    $('.work__slider').slick({
        centerMode: true,
        centerPadding: '280px',
        slidesToShow: 3,
        arrows: false,
        responsive: [
          {
            breakpoint: 1700,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              centerPadding: '0px',
              centerMode: false,
            }
          },
          {
            breakpoint: 1376,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              centerPadding: '0px',
              centerMode: false,
            }
          },
          {
            breakpoint: 925,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerPadding: '200px',
              centerMode: true,
            }
          },
          {
            breakpoint: 820,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerPadding: '150px',
              centerMode: true,
            }
          },
          {
            breakpoint: 680,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerPadding: '100px',
              centerMode: true,
            }
          },
          {
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerPadding: '50px',
              centerMode: true,
              autoplay: true,
              autoplaySpeed: 1000,
            }
          },
          {
            breakpoint: 471,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerPadding: '10px',
              centerMode: false,
              autoplay: true,
              autoplaySpeed: 1000,
            }
          },
        
        ]
       
      });
      $(window).on("scroll", function() {
        $('.header').toggleClass("active", $(this).scrollTop() > $(window).height());
   
        var $sections = $('section');
 $sections.each(function(i,el){
       var top  = $(el).offset().top-100;
       var bottom = top +$(el).height();
       var scroll = $(window).scrollTop();
       var id = $(el).attr('id');
     if( scroll > top && scroll < bottom){
           $('a.active').removeClass('active');
     $('a[href="#'+id+'"]').addClass('active');

       }
   });
  
});

$("nav").on("click","a", function (event) {
       // исключаем стандартную реакцию браузера
       event.preventDefault();

       // получем идентификатор блока из атрибута href
       var id  = $(this).attr('href'),

       // находим высоту, на которой расположен блок
           top = $(id).offset().top;
        
       // анимируем переход к блоку, время: 800 мс
       $('body,html').animate({scrollTop: top}, 800);
   });
});
var show = true;
var countbox = ".counter__item";
$(window).on("scroll load resize", function () {
    if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
    var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
    var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
    var w_height = $(window).height(); // Высота окна браузера
    var d_height = $(document).height(); // Высота всего документа
    var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
    if (w_top + 900 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
      
      $('.counter__item-number').spincrement({
        thousandSeparator: "",
        duration: 3000,
        easing: 'swing',
    });
         
        show = false;
    }
});
$('.about__accordeon-line').on('click',function(){
  $('.about__accordeon-item').removeClass('active');
  $(this).parent().addClass('active');
  });
 

 
