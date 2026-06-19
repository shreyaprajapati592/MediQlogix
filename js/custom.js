const swiper = new Swiper(".our-partner-swiper", {
  slidesPerView: "auto",
  spaceBetween: 80,
  loop: true,
  speed: 4000,
  autoplay: {
    delay: 1,
    disableOnInteraction: false,
  },
  freeMode: {
    enabled: true,
    momentum: false,
  },
  allowTouchMove: false,
  breakpoints: {
    0: {
      slidesPerView: "auto",
      spaceBetween: 10,
    },
    600: {
      slidesPerView: "auto",
      spaceBetween: 20,
    },
    767: {
      slidesPerView: "auto",
      spaceBetween: 20,
    },
    1025: {
      slidesPerView: "auto",
      spaceBetween: 40,
    },
    1441: {
      slidesPerView: "auto",
      spaceBetween: 80,
    },
  },
});

$(document).ready(function () {
  // Function to update the left offset and apply it as a CSS property
  function updateOffset() {
    var leftOffset = $(".header-main").offset().left;
    $(".our-team-swiper").css("margin-left", leftOffset);
  }
  // Initial offset on document ready
  updateOffset();
  // Update offset on window resize
  $(window).resize(function () {
    updateOffset();
  });
  // Update offset on window load
  $(window).on("load", function () {
    updateOffset();
  });
});


const ourteam = new Swiper(".our-team-swiper", {
  slidesPerView: 3.5,
  spaceBetween: 30,
  speed: 700,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },

    600: {
      slidesPerView: 1.2,
      spaceBetween: 10,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1025: {
      slidesPerView: 2.5,
      spaceBetween: 25,
    },
    1440: {
      slidesPerView: 3.5,
      spaceBetween: 30,
    },
  },
});

const communitySwiper = new Swiper(".community-swiper", {
  slidesPerView: 1.6,
  spaceBetween: 60,
  loop: true,
  centeredSlides: true,
  navigation: {
    nextEl: ".arrow-pre",
    prevEl: ".arrow-next",
  },
  breakpoints: {
    0: {
      slidesPerView: 1.1,
      spaceBetween: 30,
    },

    900: {
      slidesPerView: 1.2,
      spaceBetween: 35,
    },
    1024: {
      slidesPerView: 1.2,
      spaceBetween: 40,
    },
    1300: {
      slidesPerView: 1.3,
      spaceBetween: 45,
    },
    1440: {
      slidesPerView: 1.4,
      spaceBetween: 50,
    },
    1600: {
      slidesPerView: 1.6,
      spaceBetween: 60,
    },
  },
});

const hamburger = document.querySelector(".mobileicon");
const navMenu = document.querySelector(".navbar-right");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  if (navMenu.classList.contains("active")) {
    document.body.classList.add("no-scroll");
  } else {
    document.body.classList.remove("no-scroll");
  }
});


// Hero Vertical Swiper
$(document).ready(function () {
  const hero = new Swiper(".hero-banner-section", {
    direction: "vertical",
    loop: false,
    speed: 800,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});



$(".mediqm-details h3").click(function () {
  const $parent = $(this).closest(".mediqm-details");

  if ($parent.hasClass("active")) {
    $parent.removeClass("active").find("ul").slideUp();
  } else {
    $(".mediqm-details").removeClass("active").find("ul").slideUp();

    $parent
      .addClass("active")
      .find("ul")
      .css("display", "flex") // force flex
      .hide()
      .slideDown();
  }
});



$(document).ready(function () {
  $(".blogs-news-btn .btn").on("click", function (e) {
    e.preventDefault();

    // Remove active class from all buttons
    $(".blogs-news-btn .btn").removeClass("active");
    // Add active class to clicked button
    $(this).addClass("active");

    // Hide all .blogs-main sections
    $(".blogs-main").removeClass("active").hide();

    // Show the target section
    var target = $(this).data("target");
    $(target).fadeIn().addClass("active");
  });

  // Initialize: show only active
  $(".blogs-main").not(".active").hide();
});
















