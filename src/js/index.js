const hamburger = document.querySelector(".hamburger");
const Menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  Menu.classList.toggle("active");
});
