     $(document).ready(function() {
         var swiper = new Swiper('.supporter', {
             slidesPerView: 1,
             spaceBetween: 10,
             loop: false,
             pagination: {
                 el: '.swiper-pagination',
                 clickable: true,
             },
             breakpoints: {
                 320: {
                     slidesPerView: 2,
                     spaceBetween: 20,
                     loop: true,
                 },
                 640: {
                     slidesPerView: 2,
                     spaceBetween: 20,
                     loop: true,
                 },
                 768: {
                     slidesPerView: 2,
                     spaceBetween: 40,
                     loop: true,
                 },
                 992: {
                     slidesPerView: 2,
                     spaceBetween: 40,
                     draggable: false,
                     allowTouchMove: false,
                 },
             }
         });


         var swiper = new Swiper('.project-slider', {
             slidesPerView: 1,
             spaceBetween: 10,
             // init: false,
             pagination: {
                 el: '.swiper-pagination',
                 clickable: true,
             },
             breakpoints: {
                 576: {
                     slidesPerView: 2,
                     spaceBetween: 20,
                 },
                 768: {
                     slidesPerView: 2,
                     spaceBetween: 20,
                 },
                 992: {
                     slidesPerView: 3,
                     spaceBetween: 46,
                 },
             }
         });
     })