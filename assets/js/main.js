 $("#logo-slider").slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 0,
            speed: 3000,
            pauseOnHover: false,
            variableWidth: true,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 5,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 2,
                    },
                },
            ],
 });
        
      $(".team-slider").slick({
            dots: false,
            infinite: true,
            autoplay: false,
            cssEase: "linear",
            autoplaySpeed: 1000,
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
                        slidesToShow: 2,
                        dots: true,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1.59,
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
      

      // ACCORDIAN
document
    .querySelectorAll(".accordion-header-why-choose")
    .forEach((header, index) => {
        header.addEventListener("click", () => {
            const item = header.parentElement;
            const contentWrapper = item.querySelector(".accordion-content-wrapper");
            const currentlyActive = document.querySelectorAll(".accordion-item-why-choose.active");

            // Check if item is active
            if (item.classList.contains("active") && currentlyActive.length === 1) {
                return;
            }

            // If item is active, remove it, and reset overflow
            if (item.classList.contains("active")) {
                item.classList.remove("active");
                contentWrapper.style.overflow = "hidden"; // Reset overflow to hidden when closing
            } else {
                // Close all active items and reset their overflow
                currentlyActive.forEach((activeItem) => {
                    activeItem.classList.remove("active");
                    activeItem.querySelector(".accordion-content-wrapper").style.overflow = "hidden";
                });
                
                // Open the clicked item and remove overflow hidden
                item.classList.add("active");
                contentWrapper.style.overflow = "visible"; // Remove overflow hidden when opening
            }
        });

        // Optionally, open the first accordion by default
        if (index === 0) {
            header.parentElement.classList.add("active");
            header.parentElement.querySelector(".accordion-content-wrapper").style.overflow = "visible";
        }
    });

// back-to-top
     let mybutton = document.getElementById("top-button");

        // Corrected function name
        function topFunction() {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }

        function scrollFunction() {
            if (
                document.body.scrollTop > 20 ||
                document.documentElement.scrollTop > 20
            ) {
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