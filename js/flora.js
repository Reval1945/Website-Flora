/* =====================================================
   DATA FLORA
   Mau menambah flora? Salin satu blok { ... } di bawah,
   lalu ganti isinya. Kartu dibuat otomatis.

   kategori : "unik" | "bunga" | "pohon" | "rempah"
   foto     : nama file di folder assets/
   video    : ID video YouTube, yaitu bagian setelah "v="
              pada https://www.youtube.com/watch?v=XXXXXXXXXXX
              Kosongkan ("") jika belum ada.
   ===================================================== */
const dataFlora = [
    {
        nama: "Rafflesia Arnoldii",
        latin: "Rafflesia arnoldii",
        kategori: "unik",
        foto: "../assets/Raflesia.jpg",
        habitat: "Hutan hujan Sumatra, seperti Bengkulu, Sumatra Barat, dan Aceh.",
        desc: "Bunga terbesar di dunia yang dijuluki padma raksasa, dengan diameter 70 hingga 110 cm. Ia tidak punya akar, batang, maupun daun karena hidup sebagai parasit pada tumbuhan inang. Bunganya hanya mekar sekitar 5 sampai 6 hari, lalu membusuk.",
        fakta: "Ditemukan pertama kali di Bengkulu pada 1818 dan ditetapkan sebagai puspa langka nasional. Sering tertukar dengan bunga bangkai, padahal keduanya berbeda.",
        video: "4dPV9UnDEFY"   // TED-Ed: Why does this flower smell like a dead body?
    },
    {
        nama: "Bunga Bangkai",
        latin: "Amorphophallus titanum",
        kategori: "unik",
        foto: "flora-bangkai.jpg",
        habitat: "Hutan hujan Sumatra.",
        desc: "Bunga majemuk tertinggi di dunia yang bisa mencapai sekitar 3 meter. Tumbuh dari umbi dan baru mekar setelah bertahun-tahun, lalu hanya bertahan beberapa hari. Aroma busuknya menarik serangga penyerbuk.",
        fakta: "Berbeda dengan Rafflesia, bunga bangkai bukan parasit dan hidup dari umbinya sendiri. Bersama Rafflesia, ia termasuk puspa langka Indonesia.",
        video: "RSiL6dLFOqU"   // Inside the World's Smelliest Plant: The Corpse Flower
    },
    {
        nama: "Kantong Semar",
        latin: "Nepenthes spp.",
        kategori: "unik",
        foto: "flora-kantong-semar.jpg",
        habitat: "Hutan hujan dan rawa di Sumatra, Kalimantan, Sulawesi, hingga Papua.",
        desc: "Tumbuhan karnivora yang daunnya membentuk kantong berisi cairan pencernaan. Serangga yang tergelincir masuk akan tercerna, sehingga tumbuhan ini mendapat tambahan nutrisi di tanah yang miskin hara.",
        fakta: "Indonesia memiliki puluhan jenis kantong semar, dan banyak di antaranya tidak ditemukan di negara lain.",
        video: "6R7rpMOUXFc"   // Nepenthes (kantong semar) beraksi
    },
    {
        nama: "Anggrek Bulan",
        latin: "Phalaenopsis amabilis",
        kategori: "bunga",
        foto: "flora-anggrek.jpg",
        habitat: "Hutan tropis dataran rendah di berbagai pulau Indonesia.",
        desc: "Ditetapkan sebagai puspa pesona, salah satu bunga nasional Indonesia. Kelopaknya putih bersih dan bunganya bisa bertahan berminggu-minggu, sehingga sangat populer sebagai tanaman hias.",
        fakta: "Anggrek bulan hidup menempel pada pohon (epifit), tetapi tidak merugikan pohon yang ditumpanginya.",
        video: "kiLoQi9wAYo"   // Anggrek bulan, Phalaenopsis amabilis
    },
    {
        nama: "Melati Putih",
        latin: "Jasminum sambac",
        kategori: "bunga",
        foto: "flora-melati.jpg",
        habitat: "Banyak ditanam di seluruh Indonesia, terutama di Pulau Jawa.",
        desc: "Ditetapkan sebagai puspa bangsa. Bunga putih mungilnya harum dan melambangkan kesucian, sehingga sering dipakai dalam rangkaian pengantin dan upacara adat.",
        fakta: "Bunga melati juga dipakai untuk mengharumkan teh melati yang terkenal di Indonesia.",
        video: "2gGhIVvxCIY"   // Melati putih / Jasminum sambac
    },
    {
        nama: "Edelweis Jawa",
        latin: "Anaphalis javanica",
        kategori: "bunga",
        foto: "flora-edelweis.jpg",
        habitat: "Pegunungan Jawa pada ketinggian sekitar 1.800 hingga 3.400 mdpl, seperti Gede Pangrango, Semeru, Merbabu, dan Sindoro.",
        desc: "Dikenal sebagai bunga abadi karena bunganya tidak cepat layu. Tumbuh di tanah vulkanik pegunungan yang dingin dan tandus.",
        fakta: "Edelweis dilindungi sehingga dilarang dipetik, terutama di kawasan taman nasional.",
        video: "3sV8LLdZI4U"   // 3 Fakta Bunga Edelweis
    },
    {
        nama: "Ulin (Kayu Besi)",
        latin: "Eusideroxylon zwageri",
        kategori: "pohon",
        foto: "flora-ulin.jpg",
        habitat: "Hutan dataran rendah Kalimantan dan Sumatra.",
        desc: "Dijuluki kayu besi karena sangat keras serta tahan air dan rayap. Sejak lama dipakai untuk tiang rumah, jembatan, dan sirap atap.",
        fakta: "Pertumbuhannya sangat lambat sehingga populasinya mudah menurun jika ditebang berlebihan.",
        video: "Js3ecqAUdUQ"   // Kenali Borneo Ironwood 'Eusideroxylon zwageri'
    },
    {
        nama: "Cendana",
        latin: "Santalum album",
        kategori: "pohon",
        foto: "flora-cendana.jpg",
        habitat: "Nusa Tenggara Timur, terutama Pulau Timor dan Sumba.",
        desc: "Kayu dan minyaknya berbau harum, dipakai untuk parfum, dupa, dan kerajinan. Cendana sejak lama menjadi komoditas berharga dari Nusa Tenggara Timur.",
        fakta: "Pohon ini setengah parasit pada akarnya: ia mengambil sebagian nutrisi dari akar tanaman lain di sekitarnya.",
        video: "yRqTv237edQ"   // Kayu cendana asli NTT, Pulau Timor
    },
    {
        nama: "Mangrove (Bakau)",
        latin: "Rhizophora spp.",
        kategori: "pohon",
        foto: "flora-mangrove.jpg",
        habitat: "Pesisir dan muara sungai di seluruh nusantara.",
        desc: "Hutan mangrove melindungi pantai dari abrasi dan gelombang, serta menjadi tempat berkembang biak ikan, udang, dan kepiting. Akarnya menyembul ke atas sehingga bisa hidup di tanah berlumpur dan asin.",
        fakta: "Indonesia memiliki salah satu hutan mangrove terluas di dunia.",
        video: "DDq2mj3QUnA"   // 5 Manfaat Hutan Mangrove untuk Lingkungan
    },
    {
        nama: "Cengkeh",
        latin: "Syzygium aromaticum",
        kategori: "rempah",
        foto: "flora-cengkeh.jpg",
        habitat: "Asli Kepulauan Maluku, terutama Ternate dan Tidore.",
        desc: "Kuncup bunga yang dikeringkan ini menjadi rempah berharga yang dulu memicu perdagangan rempah dunia. Kini dipakai untuk masakan, obat tradisional, dan rokok kretek.",
        fakta: "Di Ternate pernah tumbuh Cengkeh Afo yang berusia lebih dari 400 tahun dan dijuluki pohon cengkeh tertua di dunia.",
        video: "KFwCKYO9eko"   // Pohon Cengkeh Tertua di Dunia ada di Ternate
    },
    {
        nama: "Pala",
        latin: "Myristica fragrans",
        kategori: "rempah",
        foto: "flora-pala.jpg",
        habitat: "Kepulauan Banda, Maluku.",
        desc: "Dari satu pohon didapat dua rempah sekaligus: biji pala dan fuli, yaitu selaput merah yang membungkus biji. Dipakai dalam masakan, manisan, dan minyak atsiri.",
        fakta: "Hingga pertengahan abad ke-19, Kepulauan Banda adalah satu-satunya sumber pala dan fuli di dunia.",
        video: "sTVKCe8reio"   // Banda Neira, National Geographic Indonesia
    },
    {
        nama: "Temulawak",
        latin: "Curcuma zanthorrhiza",
        kategori: "rempah",
        foto: "flora-temulawak.jpg",
        habitat: "Banyak tumbuh di Jawa dan tersebar di berbagai daerah di Indonesia.",
        desc: "Tanaman obat asli Indonesia. Rimpangnya berwarna kuning jingga dan menjadi bahan utama jamu tradisional, yang secara turun-temurun diminum untuk menjaga kesehatan hati dan pencernaan.",
        fakta: "Temulawak masih sekeluarga dengan kunyit dan jahe.",
        video: "RGCtWnEzZnA"   // Aneka Manfaat Temulawak (tvOne)
    }
];

const namaKategori = {
    unik: "Tumbuhan Unik",
    bunga: "Bunga",
    pohon: "Pohon",
    rempah: "Rempah & Obat"
};

/* ---------- Elemen yang dipakai ---------- */
const grid = document.getElementById("gridFlora");
const kosong = document.getElementById("kosong");
const jumlah = document.getElementById("jumlah");
const inputCari = document.getElementById("cari");
const tombolFilter = document.querySelectorAll("#filter button");
const modalEl = document.getElementById("detailModal");

let kategoriAktif = "semua";

document.getElementById("totalFlora").textContent = dataFlora.length;

/* ---------- Menampilkan kartu sesuai filter + pencarian ---------- */
function tampilkan() {
    const kata = inputCari.value.trim().toLowerCase();

    const hasil = dataFlora
        .map((item, index) => ({ item, index }))
        .filter(({ item }) => {
            const cocokKategori = kategoriAktif === "semua" || item.kategori === kategoriAktif;
            const cocokKata = item.nama.toLowerCase().includes(kata) || item.latin.toLowerCase().includes(kata);
            return cocokKategori && cocokKata;
        });

    grid.innerHTML = hasil.map(({ item, index }, urutan) => `
        <div class="col">
            <article class="fl-card" role="button" tabindex="0"
                     style="animation-delay: ${urutan * 70}ms"
                     data-index="${index}" data-bs-toggle="modal" data-bs-target="#detailModal"
                     aria-label="Lihat detail ${item.nama}">
                <img src="../assets/${item.foto}" alt="${item.nama}" loading="lazy" onerror="this.remove()">
                <span class="fl-chip">${namaKategori[item.kategori]}</span>
                <div class="fl-info">
                    <h5>${item.nama}</h5>
                    <small>${item.latin}</small>
                    <span class="fl-more">Lihat detail <i class="fa-solid fa-arrow-right"></i></span>
                </div>
            </article>
        </div>
    `).join("");

    kosong.classList.toggle("d-none", hasil.length > 0);
    jumlah.textContent = hasil.length > 0 ? `Menampilkan ${hasil.length} dari ${dataFlora.length} flora` : "";
}

/* ---------- Klik tombol filter ---------- */
tombolFilter.forEach(tombol => {
    tombol.addEventListener("click", () => {
        tombolFilter.forEach(t => t.classList.remove("active"));
        tombol.classList.add("active");
        kategoriAktif = tombol.dataset.kategori;
        tampilkan();
    });
});

/* ---------- Ketik di kolom pencarian ---------- */
inputCari.addEventListener("input", tampilkan);

/* ---------- Kartu bisa dibuka dengan keyboard (Enter / Spasi) ---------- */
grid.addEventListener("keydown", e => {
    if ((e.key === "Enter" || e.key === " ") && e.target.matches(".fl-card")) {
        e.preventDefault();
        e.target.click();
    }
});

/* ---------- Isi modal saat dibuka ---------- */
modalEl.addEventListener("show.bs.modal", e => {
    const kartu = e.relatedTarget.closest("[data-index]");
    const f = dataFlora[kartu.dataset.index];

    document.getElementById("modalNama").textContent = f.nama;
    document.getElementById("modalLatin").textContent = f.latin;
    document.getElementById("modalKategori").textContent = namaKategori[f.kategori];
    document.getElementById("modalDesc").textContent = f.desc;
    document.getElementById("modalHabitat").textContent = f.habitat;
    document.getElementById("modalFakta").textContent = f.fakta;

    const foto = document.getElementById("modalFoto");
    foto.style.display = "";
    foto.onerror = () => { foto.style.display = "none"; };
    foto.src = "../assets/" + f.foto;
    foto.alt = f.nama;

    const kotakVideo = document.getElementById("modalVideo");
    if (f.video) {
        kotakVideo.innerHTML = `
            <div class="ratio ratio-16x9 rounded-3 overflow-hidden shadow-sm bg-dark">
                <iframe src="https://www.youtube-nocookie.com/embed/${f.video}"
                        title="Video ${f.nama}" loading="lazy" allowfullscreen
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            </div>
            <p class="small text-muted mt-2 mb-0">
                Video tidak tampil? <a href="https://www.youtube.com/watch?v=${f.video}" target="_blank" rel="noopener">Buka langsung di YouTube</a>.
            </p>`;
    } else {
        const kataCari = encodeURIComponent(f.nama + " " + f.latin);
        kotakVideo.innerHTML = `
            <a href="https://www.youtube.com/results?search_query=${kataCari}" target="_blank" rel="noopener"
               class="btn btn-danger w-100">
                <i class="fa-brands fa-youtube me-2"></i>Cari video ${f.nama} di YouTube
            </a>`;
    }
});

/* ---------- Hentikan video saat modal ditutup ---------- */
modalEl.addEventListener("hidden.bs.modal", () => {
    document.getElementById("modalVideo").innerHTML = "";
});

tampilkan();