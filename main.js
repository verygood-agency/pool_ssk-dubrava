window.addEventListener('DOMContentLoaded', function () {
  // var widget = document.querySelector('.pool-soon');
  var closeButton = document.querySelector('.pool-soon__close-btn');

  // widget.classList.add('show');

  // closeButton.addEventListener('click', function () {
  //   widget.classList.remove('show');
  // });

  const swiper = new Swiper('.photogallery-slider .swiper', {
    // Optional parameters
    loop: true,
    // slidesPerView: 2,
    // spaceBetween: 32,

    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.photogallery-slider .swiper-button-next',
      prevEl: '.photogallery-slider .swiper-button-prev',
    },
    breakpoints: {
      // when window width is >= 320px
      // 320: {
      //   slidesPerView: 2,
      //   spaceBetween: 20
      // },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 16
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 2,
        spaceBetween: 32
      }
    }

  });
});
