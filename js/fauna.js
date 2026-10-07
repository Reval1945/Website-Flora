const card = document.querySelectorAll('.fauna-card');

card.forEach(function (card) {
    card.addEventListener('click', () => {
        card.classList.toggle('active');
    });
});

/* BENTUK VARIABEL */
const startBtn = document.getElementById('startBtn');

const welcome = document.getElementById('welcome');

const fauna = document.getElementById('fauna');

const origami = document.getElementById('origami');

startBtn.addEventListener('click', () => {
    origami.scrollIntoView({
        behavior: "smooth"
    });
});

/* EFEK TYPING PAGE 1 */

const text = "Selamat Datang di \n Dunia Fauna Langka";
const typing = document.getElementById('typing');

let index = 0;/* memberi tahu untuk muali dari karakter 1*/

function ketik() {
    if (index < text.length) {
        typing.textContent += text[index];/* Ambil 1 karakter dari text, lalu masukkan ke <h2>. */

        index++;/* Geser ke karakter berikutnya. */

        setTimeout(ketik, 100);/* ini adalah bagian seberapa lama efek ketikan itu muncul*/
    }
}

ketik();/* Ini adalah Pnaggilang untuk fungsi ketik */

/* animasi page */

/* =========================================
   PAGE 2 - SPECIES IN PIECES
========================================= */










