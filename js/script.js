// ---------- 1. Navbar berubah & tombol Back to Top saat di-scroll ----------
var navbar = document.getElementById("navbar");
var tombolAtas = document.getElementById("backTop");

window.addEventListener("scroll", function () {
  // Jika sudah turun lebih dari 60px, navbar jadi solid
  if (window.scrollY > 60) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  // Jika sudah turun lebih dari 400px, tampilkan tombol Back to Top
  if (window.scrollY > 400) {
    tombolAtas.classList.add("show");
  } else {
    tombolAtas.classList.remove("show");
  }
});


AOS.init({
  duration: 800,   // lama animasi (ms)
  once: true,      // animasi hanya sekali
  offset: 80
});