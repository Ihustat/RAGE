$(function(){
    $('.work__slider').slick({
        centerMode: true,
        centerPadding: '280px',
        slidesToShow: 3,
        arrows: false
       
      });
      var show = true;
      var countbox = ".counter__item";
      $(this.body).on("scroll load resize", function () {
          if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
          var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
          var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
          var w_height = $(window).height(); // Высота окна браузера
          var d_height = $(document).height(); // Высота всего документа
          var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
          if (w_top + 900 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.counter__item-number').spincrement({
              thousandSeparator: "",
              duration: 4000,
              easing: 'swing',
          });
               
              show = false;
          }
      });

});
$('.about__accordeon-line').on('click',function(){
  $('.about__accordeon-item').removeClass('active');
  $(this).parent().addClass('active');
  });

 
