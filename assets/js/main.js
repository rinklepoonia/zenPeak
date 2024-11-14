 $('#logo-slider').slick({
            arrows: false,
            dots: false,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            variableWidth: true,
            slidesToShow: 5,
            autoplay: true,
            autoplaySpeed: 0,
            speed: 2000,
            pauseOnHover: false,
            cssEase: 'linear',
        });
$(".team-slider").slick({
  dots: false,
  loop: false,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  arrows: true,
  slidesToScroll: 1,
  prevArrow: ".prev",
  nextArrow: ".next",
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
        dots: true,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        dots: true,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        dots: true,
      },
    },
  ],
});

// ===============================bio =============================
function initializeBioToggle() {
  document.querySelectorAll('[data-toggle="bio"]').forEach((button) => {
    button.addEventListener("click", function () {
      const targetId = button.getAttribute("data-target");
      const bioInfo = document.getElementById(targetId);
      document.querySelectorAll('[id^="bioInfo"]').forEach((bio) => {
        if (bio !== bioInfo) {
          bio.classList.add("opacity-0", "translate-y-[-20px]", "invisible");
          bio.classList.remove("opacity-100", "translate-y-0");
        }
      });
      bioInfo.classList.toggle("opacity-0");
      bioInfo.classList.toggle("translate-y-[-20px]");
      bioInfo.classList.toggle("invisible");
      bioInfo.classList.toggle("opacity-100");
      bioInfo.classList.toggle("translate-y-0");
    });
  });
  document.querySelectorAll('[data-close="bio"]').forEach((button) => {
    button.addEventListener("click", function () {
      const targetId = button.getAttribute("data-target");
      const bioInfo = document.getElementById(targetId);
      bioInfo.classList.add("opacity-0", "translate-y-[-20px]", "invisible");
      bioInfo.classList.remove("opacity-100", "translate-y-0");
    });
  });
}
document.addEventListener("DOMContentLoaded", initializeBioToggle);

// ACCORDIAN
document
  .querySelectorAll(".accordion-header-why-choose")
  .forEach((header, index) => {
    header.addEventListener("click", () => {
      const item = header.parentElement;
      const contentWrapper = item.querySelector(".accordion-content-wrapper");
      const currentlyActive = document.querySelectorAll(
        ".accordion-item-why-choose.active"
      );
      if (item.classList.contains("active") && currentlyActive.length === 1) {
        return;
      }
      if (item.classList.contains("active")) {
        item.classList.remove("active");
        contentWrapper.style.overflow = "hidden";
      } else {
        currentlyActive.forEach((activeItem) => {
          activeItem.classList.remove("active");
          activeItem.querySelector(
            ".accordion-content-wrapper"
          ).style.overflow = "hidden";
        });
        item.classList.add("active");
        contentWrapper.style.overflow = "visible";
      }
    });
    if (index === 0) {
      header.parentElement.classList.add("active");
      header.parentElement.querySelector(
        ".accordion-content-wrapper"
      ).style.overflow = "visible";
    }
  });

// back-to-top
let mybutton = document.getElementById("top-button");
function topFunction() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// Attach scrollFunction to the window's scroll event
window.onscroll = function () {
  scrollFunction();
};
// =========================YEAR FUNCTION===============
function setCurrentYear() {
  const yearSpan = document.getElementById("current-year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}
document.addEventListener("DOMContentLoaded", setCurrentYear);