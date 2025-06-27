$(document).ready(function(){ //실행틀 시작

   $(window).scroll(function() {
      if($(window).scrollTop() > 0) {
        $('header').addClass('act');
      } else {
        $('header').removeClass('act');
      }
  });

  




   const photo_list = new Swiper(".photo-list", {
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    speed: 5000,
    loop: true,

    breakpoints: {
      665: {
          slidesPerView: 2,
          spaceBetween: 50,
      },

      765: {
          slidesPerView: 2,
          spaceBetween: 50,
      },

      1024: {
          slidesPerView: 3,
          spaceBetween: 200,
      },

      1660: {
          slidesPerView: 5,
          spaceBetween: 200,
      },

      1700: {
          slidesPerView: 5,
          spaceBetween: 100,
      },

      1920: {
          slidesPerView: 5,
          spaceBetween: 100,
      },
    },
  });

  const photo02_list = new Swiper(".photo02-list", {

      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },

      speed: 10000,
      loop: true,

      direction: "vertical",
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
  });

  const rt_list1 = new Swiper(".rt-list1", {
      loop: true,

      slidesPerView: "auto",
      spaceBetween: 1,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
    
      },
  
  });

  const rt_list2 = new Swiper(".rt-list2", {
      loop: true,

      slidesPerView: "auto",
      spaceBetween: 1,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
    
      },
  
  });

}); //실행틀 끝