var navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  // Jika sudah turun lebih dari 60px, navbar jadi solid
  if (window.scrollY > 60) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

});

AOS.init({
  duration: 800,   // lama animasi (ms)
  once: true,      // animasi hanya sekali
  offset: 80
});