const formCari   = document.getElementById("formCari");
const inputCari  = document.getElementById("inputCari");
const pesanCari  = document.getElementById("pesanCari");

// Ambil data semua flora dari kartu yang sudah ada di HTML
const semuaKartu = document.querySelectorAll(".fl-card");
const dataFlora = [];
semuaKartu.forEach(function (kartu) {
    dataFlora.push({
        nama:  kartu.querySelector("h5").textContent,
        latin: kartu.querySelector("small").textContent,
        popup: kartu.dataset.bsTarget          // contoh: "#detail-rafflesia"
    });
});

// Fungsi untuk menampilkan pesan dengan warna sesuai jenisnya
function tampilkanPesan(teks, jenis) {
    pesanCari.className = "mt-3 alert alert-" + jenis;  // success / warning / danger
    pesanCari.textContent = teks;
}

// Dijalankan saat tombol "Cari" ditekan (atau Enter)
formCari.addEventListener("submit", function (e) {
    e.preventDefault();                                  // cegah halaman reload

    const kata = inputCari.value.trim().toLowerCase();   // teks yang diketik

    // Cari semua flora yang namanya (atau nama latinnya) mengandung kata tadi
    const hasil = dataFlora.filter(function (f) {
        return f.nama.toLowerCase().includes(kata) || f.latin.toLowerCase().includes(kata);
    });

    // ---------- INI BAGIAN IF / ELSE ----------
    if (kata === "") {
        // 1. Kolom masih kosong
        tampilkanPesan("Ketik nama flora dulu, ya.", "warning");

    } else if (kata.length < 3) {
        // 2. Terlalu pendek
        tampilkanPesan("Ketik minimal 3 huruf.", "warning");

    } else if (hasil.length === 0) {
        // 3. Tidak ada yang cocok
        tampilkanPesan('Flora "' + inputCari.value + '" tidak ditemukan.', "danger");

    } else if (hasil.length === 1) {
        // 4. Tepat satu yang cocok -> buka pop-up-nya
        tampilkanPesan("Ditemukan: " + hasil[0].nama, "success");
        const popup = document.querySelector(hasil[0].popup);
        bootstrap.Modal.getOrCreateInstance(popup).show();

    } else {
        // 5. Lebih dari satu yang cocok -> minta lebih spesifik
        const daftarNama = hasil.map(function (f) { return f.nama; }).join(", ");
        tampilkanPesan("Ada " + hasil.length + " hasil: " + daftarNama + ". Ketik lebih spesifik.", "warning");
    }
});