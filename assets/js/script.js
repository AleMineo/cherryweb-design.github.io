// ---------- data ----------
const skillsRow1 = [
  "UX/UI",
  "User Flow",
  "Prototyping",
  "Wireframing",
  "Information Architecture",
  "HTML5/Scss coding",
  "CMSs",
  "Visual Design",
  "Photography",
];
 
const skillsRow2 = [
  "Team Work",
  "Problem Solving",
  "Time Management",
  "Flexibility",
  "Communication",
  "Proactivity",
  "Creative Thinking",
  "Agile / Scrum",
];
 
const skillsRow3 = [
  "Adobe CC suite",
  "Figma",
  "VS Code",
  "Claude.ai",
  "Lovable",
  "Google Workspace",
  "Hugo",
  "Jira",
  "Git",
  "Miro",
  "Strapi",
  "Wordpress",
  "Office 365",
  "Freehand drawing",
  "GA4 / Data studio",
  "Nikon D7500",
];
 
const currentlyWords = ["Problem Solver", "UX/UI Designer", "Front-end Dev", "Detail Obsessed"];


// ---------- render marquees (homepage only) ----------
function buildMarquee(el, words) {
  if (!el) return;
  const group = () => {
    const g = document.createElement("div");
    g.className = "marquee-group";
    words.forEach((w) => {
      g.innerHTML += `<span class="marquee-item"><span class="word">${w}</span><span class="star">✳</span></span>`;
    });
    return g;
  };
  el.appendChild(group());
  el.appendChild(group());
}
buildMarquee(document.getElementById("marquee-1"), skillsRow1);
buildMarquee(document.getElementById("marquee-2"), skillsRow2);
buildMarquee(document.getElementById("marquee-3"), skillsRow3);

// ---------- currently word rotator (homepage only) ----------
const currentlyEl = document.getElementById("currently-word");
if (currentlyEl) {
  currentlyWords.forEach((w, i) => {
    const span = document.createElement("span");
    span.textContent = w;
    if (i === 0) span.classList.add("active");
    currentlyEl.appendChild(span);
  });
  let currentlyIndex = 0;
  setInterval(() => {
    const spans = currentlyEl.querySelectorAll("span");
    spans[currentlyIndex].classList.remove("active");
    currentlyIndex = (currentlyIndex + 1) % spans.length;
    spans[currentlyIndex].classList.add("active");
  }, 2600);
}

// ---------- custom cursor (all pages, guarded) ----------
const cursorDot = document.getElementById("cursor-dot");
if (cursorDot && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
  document.addEventListener("mousemove", (e) => {
    cursorDot.style.left = e.clientX + "px";
    cursorDot.style.top = e.clientY + "px";
    cursorDot.style.opacity = 1;
  });
  document.addEventListener("mouseleave", () => (cursorDot.style.opacity = 0));
  document.addEventListener("mouseover", (e) => {
    if (e.target.closest("[data-hover]")) cursorDot.classList.add("big");
    else cursorDot.classList.remove("big");
  });
}

// ---------- scroll reveal (all pages — safe as-is, querySelectorAll never returns null) ----------
const revealEls = document.querySelectorAll("[data-reveal]");
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
revealEls.forEach((el) => io.observe(el));