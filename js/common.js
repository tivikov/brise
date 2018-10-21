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
        slidesToShow: 1,
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
        slidesToShow: 1,
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
});
