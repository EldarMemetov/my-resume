window.addEventListener("load", function () {
  const sliderContainer = document.querySelector(".keen-slider");
  if (sliderContainer) {
    const slider = new KeenSlider(sliderContainer, {
      loop: true,
      slidesPerView: 1,
      spacing: 20,
      dragStart: () => {
        console.log("Drag started");
      },
      dragEnd: () => {
        console.log("Drag ended");
      },
    });
  }
});
