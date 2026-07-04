/* =========================================================
   Lógica del sitio — no hace falta tocar esto.
   Se carga en las 3 páginas después de data.js
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  // Año en el footer
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Enlaces de contacto (footer + CTA)
  const linkMap = {
    footIG: CONTACT.instagram,
    footYT: CONTACT.youtube,
    footWA: CONTACT.whatsapp,
    footMail: CONTACT.email,
    ctaContact: CONTACT.instagram
  };
  Object.entries(linkMap).forEach(([id, href]) => {
    const el = document.getElementById(id);
    if (el) el.href = href;
  });

  // Ticker
  const tickerTrack = document.getElementById("tickerTrack");
  if (tickerTrack) {
    const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS];
    tickerTrack.innerHTML = doubled.map(t => `<span>${t}</span>`).join("");
  }

  // Wave field decorativo del hero (solo Inicio)
  const waveField = document.getElementById("waveField");
  if (waveField) {
    for (let i = 0; i < 40; i++) {
      const bar = document.createElement("span");
      bar.style.animationDelay = (Math.random() * 2.4).toFixed(2) + "s";
      bar.style.height = (30 + Math.random() * 70) + "%";
      waveField.appendChild(bar);
    }
  }

  // Géneros (a partir del catálogo) — usado por el submenú de nav en TODAS las páginas
  const genres = ["Todos", ...new Set(BEATS.map(b => b.genre))];

  const genreSubmenu = document.getElementById("genreSubmenu");
  if (genreSubmenu) {
    genreSubmenu.innerHTML = genres.filter(g => g !== "Todos").map(g =>
      `<li><a href="beats.html?genre=${encodeURIComponent(g)}">${g}</a></li>`
    ).join("");
  }

  // ---- Página Beats: filtros + grid ----
  const beatGrid = document.getElementById("beatGrid");
  const filtersEl = document.getElementById("filters");

  if (beatGrid && filtersEl) {
    filtersEl.innerHTML = genres.map(g =>
      `<button class="filter-pill" data-genre="${g}">${g}</button>`
    ).join("");

    function playIcon() {
      return `<svg viewBox="0 0 16 16"><path d="M2 1.5v13l12-6.5-12-6.5z"/></svg>`;
    }

    beatGrid.innerHTML = BEATS.map((b, idx) => `
      <div class="beat-card" data-genre="${b.genre}">
        <div class="beat-media">
          <div class="beat-thumb" data-idx="${idx}">
            <button class="play-btn" aria-label="Reproducir ${b.title}">${playIcon()}</button>
          </div>
        </div>
        <div class="beat-body">
          <div class="beat-top">
            <h3>${b.title}</h3>
            <span class="beat-tag">${b.genre}</span>
          </div>
          <div class="beat-meta"><span>${b.bpm} BPM</span><span>Tono ${b.key}</span></div>
          <p class="beat-desc">${b.desc}</p>
          <div class="beat-foot">
            <a class="btn ghost" href="${CONTACT.instagram}" target="_blank" rel="noopener">Licenciar</a>
          </div>
        </div>
      </div>
    `).join("");

    // Reproducir: reemplaza el thumbnail por el iframe de YouTube (lazy load)
    beatGrid.querySelectorAll(".beat-thumb").forEach(thumb => {
      thumb.addEventListener("click", () => {
        const idx = thumb.dataset.idx;
        const beat = BEATS[idx];
        const media = thumb.closest(".beat-media");
        media.innerHTML = `<iframe src="https://www.youtube.com/embed/${beat.youtubeId}?autoplay=1&rel=0" title="${beat.title}" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
      });
    });

    function applyFilter(genre) {
      document.querySelectorAll(".filter-pill").forEach(p => {
        p.classList.toggle("active", p.dataset.genre === genre);
      });
      document.querySelectorAll(".beat-card").forEach(card => {
        const show = genre === "Todos" || card.dataset.genre === genre;
        card.classList.toggle("hidden", !show);
      });
    }

    filtersEl.addEventListener("click", e => {
      const btn = e.target.closest(".filter-pill");
      if (!btn) return;
      applyFilter(btn.dataset.genre);
    });

    // Si llegamos desde el submenú (beats.html?genre=Trap), aplicar ese filtro
    const params = new URLSearchParams(window.location.search);
    const initialGenre = params.get("genre");
    applyFilter(genres.includes(initialGenre) ? initialGenre : "Todos");
  }

  // Header sólido al hacer scroll
  const header = document.getElementById("siteHeader");
  if (header) {
    window.addEventListener("scroll", () => {
      header.classList.toggle("scrolled", window.scrollY > 40);
    });
  }

  // Nav móvil
  const burger = document.getElementById("burger");
  const navList = document.getElementById("navList");
  if (burger && navList) {
    burger.addEventListener("click", () => navList.classList.toggle("open"));

    const beatsNavItem = document.getElementById("beatsNavItem");
    if (beatsNavItem && window.matchMedia("(max-width:680px)").matches) {
      beatsNavItem.querySelector("a").addEventListener("click", (e) => {
        e.preventDefault();
        beatsNavItem.classList.toggle("open");
      });
    }

    navList.addEventListener("click", e => {
      if (e.target.tagName === "A" && window.matchMedia("(max-width:680px)").matches) {
        navList.classList.remove("open");
      }
    });
  }

  // Reveal on scroll
  const revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(el => io.observe(el));
  }

});
