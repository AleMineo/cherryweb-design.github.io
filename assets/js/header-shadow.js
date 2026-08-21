// ==========================================================================
// header-shadow.js
// Self-contained. Adds a shadow to <header> once the page is scrolled past
// 20px. No dependency on any other script — safe to load on every page,
// including ones that don't have homepage-only elements like #work-list,
// #marquee-1, or #hobbies-scroll.
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  const headerEl = document.querySelector("header");
  if (!headerEl) return;

  window.addEventListener("scroll", () => {
    headerEl.style.boxShadow = window.scrollY > 20
  ? "0 1px 0 rgba(0,0,0,0.1)"
  : "none";

headerEl.style.padding = window.scrollY > 20
  ? "12px 0"
  : "24px 0";
  });
});