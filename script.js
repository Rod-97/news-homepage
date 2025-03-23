const mobileNav = document.querySelectorAll(".mobile-nav")[0];
const hamburgerIcon = document.querySelectorAll(".hamburger-icon")[0];
const closeIcon = document.querySelectorAll(".close-icon")[0];
const shadow = document.querySelectorAll(".shadow")[0];

hamburgerIcon.addEventListener("click", () => {
  mobileNav.classList.add("active");
  shadow.classList.add("active");
});

closeIcon.addEventListener("click", () => {
  mobileNav.classList.remove("active");
  shadow.classList.remove("active");
});
