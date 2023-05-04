
const swiper = new Swiper('.team__swiper', {
  slideClass: 'team__swiper-slide',
  wrapperClass: 'team__swiper-wrapper',
  containerClass: 'team__swiper',
  slidesPerView:1,
  direction: 'horizontal',
  loop: false,
  spaceBetween: 50,
  pagination: {
    el: '.team__swiper-pagination',
    clickable:true,
  },
  initialSlide: 1,
  breakpoints: {
    480: {
      spaceBetween: 50,
    },
    360: {
      spaceBetween: 15,
    },
    320: {
      spaceBetween: 15,
    },
  }
});

const swiper2 = new Swiper('.cases__swiper', {
  slideClass: 'cases__swiper-slide',
  wrapperClass: 'cases__slider',
  containerClass: 'cases__swiper',
  direction: 'horizontal',
  centeredSlides: true,
  spaceBetween: 250,
  slidesPerView: 2,
  initialSlide: 0,
  speed: 600,
  loop: true,
  autoplay: {
    delay: 5000
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1920: {
      spaceBetween: 250,
    },
    1600: {
      spaceBetween: 100,
    },
    1440: {
      spaceBetween: 50,
    },
    1280: {
      spaceBetween: 20,
    },
    768: {
      spaceBetween: 0,
    },
    480: {
      spaceBetween: 0,
    },
    360: {
      spaceBetween: 0,
    },
    320: {
      spaceBetween: 0,
    },
  }
});
var list = ['Design and ideation', 'Architecture planning', 'Development', 'QA and testing', 'Deployment']
var swiper3 = new Swiper('.principals__swiper', {
  direction: 'vertical',
  speed: 500,
  slidesPerView:1,
  allowTouchMove: false,
  spaceBetween: 400,
  initialSlide: 0,
  loop: false,
  slideClass: 'principals__swiper-slide',
  wrapperClass: 'principals__slider',
  containerClass: 'principals__swiper',
  pagination: {
    el: '.principals__pagination',
    clickable: true,
    type: 'bullets',
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (list[index]) + '</span>';
    }
  },
  
    }
);

const swiper4 = new Swiper('.main__cases-swiper', {
  direction: 'horizontal',
  speed: 600,
  slidesPerView:1,
  centeredSlides: true,
  spaceBetween: 0,
  initialSlide: 1,
  slideClass: 'main__cases-swiper-slide',
  wrapperClass: 'main__cases-swiper-wrapper',
  containerClass: 'main__cases-swiper',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    1920: {
      spaceBetween: 0,
    },
    1600: {
      spaceBetween: 100,
    },
    1440: {
      spaceBetween: 100,
    },
    1280: {
      spaceBetween: 100,
    },
    768: {
      spaceBetween: 100,
    },
    480: {
      spaceBetween: 50,
    },
    360: {
      spaceBetween: 50,
    },
    320: {
      spaceBetween: 50,
    },
  }
});
