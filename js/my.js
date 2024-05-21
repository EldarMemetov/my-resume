// document.addEventListener("DOMContentLoaded", function () {
//   // Проверяем, является ли устройство мобильным
//   function isMobileDevice() {
//     return (
//       typeof window.orientation !== "undefined" ||
//       navigator.userAgent.indexOf("IEMobile") !== -1
//     );
//   }

//   // Инициализация Swiper только на мобильных устройствах
//   if (isMobileDevice()) {
//     // Создаем новый экземпляр Swiper с нужными параметрами
//     const swiper = new Swiper(".swiper", {
//       // Navigation (arrows)
//       navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//       },

//       // Pagination (indicators)
//       pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//       },
//       // Scrollbar
//       scrollbar: {
//         el: ".swiper-scrollbar",
//       },
//     });
//   }
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const isMobile = window.matchMedia("(max-width: 767px)").matches;
//   const isTablet = window.matchMedia(
//     "(min-width: 768px) and (max-width: 1023px)"
//   ).matches;

//   let slidesPerView = 3; // По умолчанию на компьютере отображаем 3 слайда
//   if (isMobile) {
//     slidesPerView = 1; // На мобильных устройствах отображаем по 1 слайду
//   } else if (isTablet) {
//     slidesPerView = 2; // На планшетах отображаем по 2 слайда
//   }

//   const swiper = new Swiper(".swiper", {
//     slidesPerView: slidesPerView,
//     spaceBetween: 10,
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     scrollbar: {
//       el: ".swiper-scrollbar",
//     },
//     breakpoints: {
//       // На планшетах и меньше отображаем 1 слайд
//       767: {
//         slidesPerView: 1,
//       },
//       // На компьютере и больше отображаем 3 слайда
//       1440: {
//         slidesPerView: 3,
//       },
//       320: {
//         slidesPerView: 1,
//       },
//     },
//   });
// });
