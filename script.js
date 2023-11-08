const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelectorAll(".nav");

menuBtn.addEventListener("click", () => {
  document.body.classList.toggle("open"); 
});

document.addEventListener("DOMContentLoaded", function () {
  const sliders = document.querySelectorAll("input[type=radio]");
  let currentIndex = 0;

  function nextSlide() {
      sliders[currentIndex].checked = false;
      currentIndex = (currentIndex + 1) % sliders.length;
      sliders[currentIndex].checked = true;
  }

  setInterval(nextSlide, 4000); // Cambia de imagen cada 3 segundos
});
