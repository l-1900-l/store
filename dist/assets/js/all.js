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
  $(".norification").slideDown();
  $(".hamburger").click(function (e) {
    e.preventDefault();
    hamburgerMenuAnimation(this);
  });
  $("#hideNotification").click(function (e) {
    e.preventDefault();
    $(".notification").slideUp();
  })
});



// slider for down of the header
const swiper1 = new Swiper('.swiper.swiper1', {
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


// slider for bestseller
const swiper2 = new Swiper('.swiper.swiper2', {
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
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
  slidesPerView: 1,
  spaceBetween: 10,
  // init: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    375: {
      slidesPerView: 1.5,
      spaceBetween: 15,
    },
    480: {
      slidesPerView: 1.9,
      spaceBetween: 15,
    },
    520: {
      slidesPerView: 2.1,
      spaceBetween: 15,
    },
    600: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    710: {
      slidesPerView: 2.9,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3.1,
      spaceBetween: 20,
    },
    890: {
      slidesPerView: 3.8,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4.6,
      spaceBetween: 30,
    },
    1400: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  }
});


// Countdown Timer
var countDownDate = new Date("Jan 10, 2023 15:37:25").getTime();

i = true;

// Update the count down every 1 second
var x = setInterval(function () {
  if (i == true) {
    i = false;
    // console.log("biy");
    document.getElementById("new").innerHTML = "50%";
  } else if (i == false) {
    i = true;
    // console.log("seeeee");
    document.getElementById("new").innerHTML = "جدید";
  }



  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // document.getElementById("countdownTimer").innerHTML = days + "d " + hours + "h " +
  //   minutes + "m " + seconds + "s ";
  // document.getElementById("countdownTimerDay").innerHTML = days + "d " + `<i class="far fa-clock">${title}</i>`;
  document.getElementById("countdownTimerDay").innerHTML = days;
  document.getElementById("time-day").innerHTML = "days";
  document.getElementById("clock-icon").innerHTML = `<i class="far fa-clock"></i>`;
  document.getElementById("countdownTimerH").innerHTML = hours;
  document.getElementById("time-hour").innerHTML = "hour ";
  document.getElementById("countdownTimerMin").innerHTML = minutes;
  document.getElementById("time-minute").innerHTML = "min ";
  document.getElementById("countdownTimerSecond").innerHTML = seconds;
  document.getElementById("time-second").innerHTML = "second ";
  document.getElementById("colon1").innerHTML = ":";
  document.getElementById("colon2").innerHTML = ":";

  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdownTimer").innerHTML = "زمان به پایان رسید";
  }
}, 1000);