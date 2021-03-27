$(function(){
    $('.work__slider').slick({
        centerMode: true,
        centerPadding: '280px',
        slidesToShow: 3,
        arrows: false
       
      });
    $('.about__accordeon-line').on('click',function(){
        $('.about__accordeon-item').removeClass('active');
        $(this).parent().addClass('active');
        });

});
