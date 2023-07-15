let prevScrollPos = window.pageYOffset;
const navbar = document.querySelector(".navbar");
const scrollDistance = 200;

window.addEventListener("scroll", function() {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    // Scrolling up
    navbar.classList.remove("hide");
  } else {
    // Scrolling down
    if (currentScrollPos > scrollDistance) {
      navbar.classList.add("hide");
    }
  }

  prevScrollPos = currentScrollPos;

  if (currentScrollPos === 0) {
    navbar.classList.remove("hide");
    navbar.classList.remove("top");
  } else {
    navbar.classList.add("top");
  }
});

