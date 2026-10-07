// js/floating-gallery.js
(function () {
  window.initFloatingGallery = function (containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // 1. DAFTAR ASSETS GAMBAR (10 KARTU)
    const galleryItems = [
      { src: "../assets/komodo.jpg", link: "#" },
      { src: "../assets/badak jawa.jpg", link: "#" },
      { src: "../assets/Harimau Sumatera.jpg", link: "#" },
      { src: "../assets/Anoa (1).jpg", link: "#" },
      { src: "../assets/orang utan.jpg", link: "#" },
      { src: "../assets/cendrawasih (2).jpg", link: "#" },
      { src: "../assets/bg1.jpg", link: "#" },
      { src: "../assets/bg2.jpg", link: "#" },
      { src: "../assets/komodo.jpg", link: "#" },
      { src: "../assets/badak jawa.jpg", link: "#" },
    ];

    // 2. LAYOUT POSISI
    const LAYOUT = [
      { w: 220, h: 280, x: 10, y: 5 },
      { w: 260, h: 200, x: 38, y: 25 },
      { w: 200, h: 260, x: 70, y: 10 },
      { w: 240, h: 240, x: 88, y: 40 },
      { w: 220, h: 300, x: 22, y: 55 },
      { w: 190, h: 250, x: 52, y: 70 },
      { w: 230, h: 270, x: 80, y: 85 },
      { w: 210, h: 230, x: 5,  y: 75 },
      { w: 250, h: 210, x: 40, y: -15 },
      { w: 200, h: 280, x: 65, y: -30 }
    ];

    container.style.position = "relative";
    container.style.overflow = "hidden";
    container.style.width = "100%";
    container.style.height = "100vh";
    container.innerHTML = "";

    let W = container.offsetWidth || window.innerWidth;
    let H = container.offsetHeight || window.innerHeight;

    const SPEED_REF = 40;
    const speedSetting = 10; // Kecepatan pelan
    const drift = (speedSetting / 200) * SPEED_REF;

    const particles = [];
    const nodes = [];
    let zoomedIndex = null;

    // 3. GENERATE KARTU
    galleryItems.forEach((item, i) => {
      const slot = LAYOUT[i % LAYOUT.length];
      const card = document.createElement("div");

      card.className = "floating-card";
      card.style.position = "absolute";
      card.style.top = "0px";
      card.style.left = "0px";
      card.style.width = slot.w + "px";
      card.style.height = slot.h + "px";
      card.style.borderRadius = "16px";
      card.style.overflow = "hidden";
      card.style.cursor = "pointer";
      card.style.userSelect = "none";
      card.style.backgroundColor = "rgba(255, 255, 255, 0.08)";
      card.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.4)";
      card.style.willChange = "transform";
      card.style.zIndex = "1";

      const img = document.createElement("img");
      img.src = item.src;
      img.draggable = false;
      img.style.width = "100%";
      img.style.height = "100%";
      img.style.objectFit = "cover";
      img.style.display = "block";
      img.style.pointerEvents = "none";

      card.appendChild(img);
      container.appendChild(card);
      nodes.push(card);

      particles.push({
        x: (slot.x / 100) * W - slot.w / 2,
        y: (slot.y / 100) * H - slot.h / 2,
        dx: 0,
        dy: 0,
        z: 0,
        targetZ: 0,
        w: slot.w,
        h: slot.h,
        mult: 0.65 + (i % 5) * 0.15,
      });

      // EVENT KLIK UNTUK ZOOM & NYALAKAN BORDER BIRU
      card.addEventListener("click", (e) => {
        e.stopPropagation();

        if (zoomedIndex === i) {
          zoomedIndex = null;
          card.classList.remove("active-card");
        } else {
          // Bersihkan border biru dari kartu lain terlebih dahulu
          nodes.forEach((node) => node.classList.remove("active-card"));

          zoomedIndex = i;
          card.classList.add("active-card"); // Nyalakan di kartu ini
        }
      });
    });

    // EVENT KLIK DI AREA KOSONG UNTUK MEMATIKAN BORDER & ZOOM
    container.addEventListener("click", () => {
      zoomedIndex = null;
      nodes.forEach((node) => node.classList.remove("active-card"));
    });

    window.addEventListener("resize", () => {
      W = container.offsetWidth || window.innerWidth;
      H = container.offsetHeight || window.innerHeight;
    });

    // 4. ANIMATION LOOPING
    let lastTime = performance.now();

    function tick(now) {
      const dt = Math.min(0.05, (now - lastTime) / 1000);
      lastTime = now;

      particles.forEach((a, i) => {
        const node = nodes[i];
        if (!node) return;

        const frozen = zoomedIndex === i;

        if (!frozen) {
          a.y += drift * a.mult * dt * 60;

          const span = H + a.h;
          if (a.y > H) {
            a.y -= span;
          } else if (a.y < -a.h) {
            a.y += span;
          }
        }

        a.targetZ = frozen ? 1 : 0;
        a.z += (a.targetZ - a.z) * (1 - Math.exp(-10 * dt));

        const baseX = a.x + a.dx;
        const baseY = a.y + a.dy;
        const z = a.z;

        const px = baseX + ((W - a.w) / 2 - baseX) * z;
        const py = baseY + ((H - a.h) / 2 - baseY) * z;

        const fitScale = Math.min(
          1.6,
          (W * 0.85) / Math.max(1, a.w),
          (H * 0.85) / Math.max(1, a.h)
        );
        const scale = 1 + (fitScale - 1) * z;

        node.style.transform = `translate3d(${px}px, ${py}px, 0) scale(${scale})`;
        node.style.zIndex = z > 0.01 ? "999" : "1";
      });

      requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  };
})();