/* =========================================================
   ラップDE老GO — script.js
   1. content.js（SITE_CONTENT）をDOMに流し込む
   2. ヘッダー・ナビ・スクロール演出などのUI制御
   ========================================================= */

(function () {
  "use strict";

  /* ---------- 1. コンテンツ流し込み ---------- */
  function applyContent() {
    if (typeof SITE_CONTENT === "undefined") return;

    document.querySelectorAll("[data-key]").forEach((el) => {
      const key = el.getAttribute("data-key");
      if (!(key in SITE_CONTENT)) return;
      const value = SITE_CONTENT[key];

      if (el.hasAttribute("data-key-href-mailto")) {
        el.textContent = value;
        el.setAttribute("href", "mailto:" + value);
        return;
      }

      if (el.hasAttribute("data-multiline")) {
        el.innerHTML = String(value).replace(/\n/g, "<br>");
      } else {
        el.textContent = value;
      }
    });

    document.querySelectorAll("[data-key-href]").forEach((el) => {
      const key = el.getAttribute("data-key-href");
      if (key in SITE_CONTENT && SITE_CONTENT[key]) {
        el.setAttribute("href", SITE_CONTENT[key]);
      }
    });

    // 空文字なら data-hide-if-empty 要素を非表示に
    document.querySelectorAll("[data-hide-if-empty]").forEach((el) => {
      if (!el.textContent.trim()) {
        el.style.display = "none";
      }
    });
  }

  /* ---------- 2. ヘッダー：スクロールで背景をつける ---------- */
  function initHeaderScroll() {
    const header = document.getElementById("siteHeader");
    if (!header) return;
    const onScroll = () => {
      header.classList.toggle("scrolled", window.scrollY > 12);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------- 3. モバイルメニュー ---------- */
  function initMenuToggle() {
    const toggle = document.getElementById("menuToggle");
    const nav = document.getElementById("mainNav");
    if (!toggle || !nav) return;

    toggle.addEventListener("click", () => {
      toggle.classList.toggle("open");
      nav.classList.toggle("open");
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        toggle.classList.remove("open");
        nav.classList.remove("open");
      });
    });
  }

  /* ---------- 4. スクロールで要素をふわっと表示 ---------- */
  function initReveal() {
    const items = document.querySelectorAll(".reveal");
    if (!items.length) return;

    if (!("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("in-view"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("in-view"), i * 40);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    items.forEach((el) => observer.observe(el));
  }

  /* ---------- init ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    applyContent();
    initHeaderScroll();
    initMenuToggle();
    initReveal();
  });
})();
