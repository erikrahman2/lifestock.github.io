// loadnav
document.addEventListener("DOMContentLoaded", function () {
  fetch("navbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("navbar").innerHTML = data;
    })
    .catch((error) => console.error("Error loading navbar:", error));
});

// navscroll
// animasi nav jika di scroll kebawah nav akan hilang, jika di scroll ke atas nav akan muncul
let lastScrollTop = 0; // Posisi scroll terakhir
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Deteksi scroll ke bawah
  if (scrollTop > lastScrollTop) {
    //  navbar disembunyiin
    navbar.style.top = "-100px";
  } else {
    //  navbar ditampilkan
    navbar.style.top = "0";
  }

  lastScrollTop = scrollTop; // Perbarui posisi scroll terakhir
});
