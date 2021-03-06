$(function(){
  $('.main-banner').slick({
    autoplay: false,
    draggable: false,
    dots: true,
    speed: 600,
    customPaging: function (slider, i) {
      var thumb = $(slider.$slides[i]).data();
      return '<span>' + 0 + (i+1) + '</span>';
    },
    responsive: [{
      breakpoint: 768,
      settings: {
        draggable: true,
        dots: false
      }
    }
      
    ]
  });
  $('.recent-carousel').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    responsive: [{
      breakpoint: 860,
      settings: {
        slidesToShow: 2,
        arrows: false
        
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        arrows: false

      }
    }

    ]
  });
  $('.discount-carousel').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,

    prevArrow: $('.discount-prev'),
    nextArrow: $('.discount-next'),
    responsive: [{
      breakpoint: 860,
      settings: {
        slidesToShow: 2,
        arrows: false

      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        arrows: false

      }
    }

    ]
  })
  $('.shops-container').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    prevArrow: $('.shops-prev'),
    nextArrow: $('.shops-next'),
    responsive: [
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  })
  $('.sizes >div').each(function(){
    if(!$(this).hasClass('strike')){
      $(this).click(function () {
        $('.sizes >div').removeClass('choise');
        $(this).addClass('choise');
      })
    }
  })
  $('.mobile-menu>ul>li').each(function(){
    if ($(this).find('ul').length > 0) {
      $(this).append('<div class="plus">+</div>')
    }
   
  })
  $('.humb').click(function(){
    $('.mobile-menu-wrap').show();
  })
  $(document).mouseup(function(e){
    var div = $('.mobile-sidebar');
    if (!div.is(e.target) && !$('.humb').is(e.target)// если клик был не по нашему блоку
      && div.has(e.target).length === 0 && $('.humb').has(e.target).length === 0) { // и не по его дочерним элементам
      div.parent().hide(); // скрываем его
    }
  })
  $('.plus').click(function (e) { 
    e.preventDefault();
    e.stopPropagation();
    $(this).parent().find('.submenu').slideToggle();
    
  });
  
  $('.header-icon .icon').click(function (e) {
    $(this).parent().toggleClass('active');
  })
  $('.header-cart').click(function() {
    $('.user-account').hide();
    $('.header-user').removeClass('active');
    $('.cart-widget').toggle();
  })
  $('.header-user').click(function(){
    $('.cart-widget').hide();
    $('.header-cart').removeClass('active');
    $('.user-account').toggle();
  })
  $('.plus').click(function(){
    $(this).parent().find('.tab-inputs').slideToggle();
  })
  $('.product-full-image').slick({
    dots: false,
    arrows: false,
    draggable: false,
    fade: true,
    asNavFor: '.product-gallery'
  })
  $('.product-gallery').slick({
    vertical: true,
    verticalSwiping: true,
    dots: false,
    arrows: false,
    slidesToScroll: 1,
    slidesToShow: 4,
    focusOnSelect: true,
    infinite: false,
    asNavFor: '.product-full-image'
  })
  $('.product-radio-group input[type=radio]:disabled').parent().css({
    'text-decoration': 'line-through',
    'opacity': '0.5',
    'cursor': 'default'
  })
  $('.product-radio-group input[type=radio]').change(function(){
    $('.product-radio-group input[type=radio]').parent().removeClass('active');
    $(this).parent().addClass('active');
  })
  $('.open-popup-link').magnificPopup();
  var $set = $('.rating-input-wrap .fa');
  $('.rating-input-wrap').on('click', '.fa', function(){
    $set.removeClass('fa-star-o');
    $set.removeClass('fa-star');
    var n = $set.index(this);
    for(var i = 0;i<$set.length;i++){
      if(i<=n){
        $set.eq(i).addClass('fa-star')
      }
      else {
        $set.eq(i).addClass('fa-star-o')
      }
    }
    console.log(n);
  })
});
