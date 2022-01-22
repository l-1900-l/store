// hamburger menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("#nav-menu");
hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

function hamburgerMenuAnimation(x) {
  x.classList.toggle("change");
}





$(document).ready(function () {
  $(".hamburger").click(function (e) {
    e.preventDefault();
    hamburgerMenuAnimation(this);
  });
  // $("button").click(function () {
  //   $(".hamburger").trigger("click");
  // });

});





// slider
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  autoplay: {
    delay: 2000,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});