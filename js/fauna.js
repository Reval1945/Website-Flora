//ROLING LATTERS : BAGIAN JUDUL


const rollingTitle = document.getElementById("rolling-title");

if (rollingTitle && window.gsap) {
    const text = rollingTitle.textContent.trim();
    rollingTitle.textContent = "";

    const letters = [...text].map(function (char) {
        const span = document.createElement("span");

        span.className = "rolling-char";
        span.textContent = char === " " ? "\u00A0" : char;

        rollingTitle.appendChild(span);
        return span;
    });

    // Siapkan animasi tanpa langsung memutarnya
    gsap.set(letters, {
        yPercent: 150
    });

    const titleObserver = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    // Jalankan efek ketika judul masuk layar
                    gsap.fromTo(
                        letters,
                        { yPercent: 150 },
                        {
                            yPercent: 0,
                            duration: 0.7,
                            stagger: {
                                each: 0.045,
                                from: "center"
                            },
                            ease: "back.out(1.7)",
                            overwrite: true
                        }
                    );
                } else {
                    // Sembunyikan huruf agar siap dianimasikan ulang
                    gsap.set(letters, {
                        yPercent: 150
                    });
                }
            });
        },
        {
            threshold: 0.5
        }
    );

    titleObserver.observe(rollingTitle);
}


/* =========================================
   1. FUNGSI TOMBOL MULAI JELAJAHI
========================================= */

// Mengambil tombol Mulai Jelajahi dan section fauna
const startBtn = document.getElementById('startBtn');
const fauna = document.getElementById('fauna');

// Saat tombol diklik, scroll halus menuju section fauna
if (startBtn && fauna) {
    startBtn.addEventListener('click', function () {
        fauna.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}


/* =========================================
   2. EFEK TYPING PAGE 1
========================================= */

// Teks yang akan ditampilkan dengan efek mengetik
const text = "Mari mengenal berbagai fauna langka di Indonesia";

// Mengambil elemen HTML tempat teks ditampilkan
const typing = document.getElementById('typing');

// Variabel untuk menghitung karakter yang sedang ditampilkan
let index = 0;
// Fungsi untuk menampilkan teks satu karakter demi satu karakter
function ketik() {
    if (typing && index < text.length) {

        // Menambahkan satu karakter ke elemen HTML
        typing.textContent += text[index];

        // Berpindah ke karakter berikutnya
        index++;

        // Menunggu 70 milidetik sebelum mengetik karakter selanjutnya
        setTimeout(ketik, 70);
    }
}

// Menjalankan efek typing
ketik();







/* =========================================
   POPUP DESKRIPSI FAUNA
========================================= */

document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".fauna-card");

    // Simpan semua popup dan pindahkan ke body
    // agar tidak bentrok dengan transform pada card.
    const popups = [];

    cards.forEach(function (card) {
        const popup = card.querySelector(".fauna-popup");

        if (!popup) return;

        const closeBtn = popup.querySelector(".close");
        const content = popup.querySelector(".popup-content");

        if (!closeBtn || !content) return;

        // Pindahkan popup ke luar card
        document.body.appendChild(popup);

        popups.push(popup);

        // Mencegah klik isi popup menutup popup
        content.addEventListener("click", function (event) {
            event.stopPropagation();
        });

        // Klik card untuk membuka popup
        card.addEventListener("click", function () {
            // Tutup popup lain yang sedang terbuka
            popups.forEach(function (item) {
                item.classList.remove("active");
            });

            // Tampilkan popup milik card yang diklik
            popup.classList.add("active");

            // Cegah halaman belakang ikut bergulir
            document.body.style.overflow = "hidden";
        });

        // Tombol X untuk menutup popup
        closeBtn.addEventListener("click", function (event) {
            event.stopPropagation();
            tutupPopup(popup);
        });

        // Klik area gelap di luar kotak untuk menutup
        popup.addEventListener("click", function (event) {
            if (event.target === popup) {
                tutupPopup(popup);
            }
        });
    });

    // Fungsi menutup popup
    function tutupPopup(popup) {
        popup.classList.remove("active");

        // Pulihkan scroll jika tidak ada popup aktif
        const masihTerbuka = document.querySelector(
            ".fauna-popup.active"
        );

        if (!masihTerbuka) {
            document.body.style.overflow = "";
        }
    }

    // Tutup popup dengan tombol Escape
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            popups.forEach(function (popup) {
                popup.classList.remove("active");
            });

            document.body.style.overflow = "";
        }
    });
});


const observer = new IntersectionObserver(
    function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show");
            }
        });
    },
    {
        threshold: 0.3
    }
);

// Pilih elemen yang ingin diberi efek
document.querySelectorAll(
    ".page h1, .page h2, .page p, .fauna-card, .video-container"
).forEach(function (element) {
    element.classList.add("scroll-effect");
    observer.observe(element);
});

