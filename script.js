const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelectorAll(".nav");

menuBtn.addEventListener("click", () => {
  document.body.classList.toggle("open"); 
});