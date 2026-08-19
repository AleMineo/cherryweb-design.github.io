// ==========================================================================
// nav-toggle.js
// Self-contained mobile nav toggle. No dependency on any other script.
//
// Expects three elements in the DOM:
//   <button id="menu-toggle">...</button>
//   <ul id="navlinks">...</ul>
//   <header>...</header>   (the closest ancestor <header> in the document)
//
// Wrapped in DOMContentLoaded so it's safe regardless of where the
// <script> tag is placed in the page (head, body, wherever).
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("navlinks");
  const headerEl = document.querySelector("header");

  if (!menuToggle || !navLinks || !headerEl) return;

  const closeMenu = () => {
    menuToggle.classList.remove("open");
    navLinks.classList.remove("open");
    headerEl.classList.remove("menu-open");
    menuToggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  };

  const openMenu = () => {
    menuToggle.classList.add("open");
    navLinks.classList.add("open");
    headerEl.classList.add("menu-open");
    menuToggle.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  };

  menuToggle.addEventListener("click", () => {
    const isOpen = headerEl.classList.contains("menu-open");
    isOpen ? closeMenu() : openMenu();
  });

  // close on link click (anchor navigation)
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // close on Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  // close if resized back to desktop while open
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 640) closeMenu();
  });
});