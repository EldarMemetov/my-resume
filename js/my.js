document.addEventListener("DOMContentLoaded", function () {
  // Проверяем, является ли устройство мобильным
  function isMobileDevice() {
    return (
      typeof window.orientation !== "undefined" ||
      navigator.userAgent.indexOf("IEMobile") !== -1
    );
  }

  // Инициализация Swiper только на мобильных устройствах
  if (isMobileDevice()) {
    // Создаем новый экземпляр Swiper с нужными параметрами
    const swiper = new Swiper(".swiper", {
      // Navigation (arrows)
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      // Pagination (indicators)
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      // Scrollbar
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    });
  }
});
