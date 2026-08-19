// category keys: "ux-ui" | "app-webapp" | "logo"
const projects = [
  {
    name: "CameoCraft",
    year: "2026",
    category: ["logo"],
    desc: ["Logo design & HTML5/SCSS", "A talent agency specialized in managing celebrity appearances at comic conventions worldwide."],
    thumb: "assets/images/portfolio/cameocraft_thumb.webp",
    link: "projects/cameocraft/",
  },
  {
    name: "Dusk trade",
    year: "2025",
    category: ["ux-ui", "app-webapp"],
    desc: ["UX/UI design & Prototyping", "The project centered on designing a secure, structured, and intuitive interface for a crypto app capable of communicating trust and technological sophistication."],
    thumb: "assets/images/portfolio/dusk_thumb.webp",
    link: "projects/dusk/",
  },
  {
    name: "Walltips",
    year: "2025",
    category: ["app-webapp", "ux-ui"],
    desc: ["WebApp UX/UI design & Prototyping", "A lightweight and intuitive mini app designed to act as a digital concierge for guests staying in hotels, B&Bs, and hospitality properties."],
    thumb: "assets/images/portfolio/walltips_thumb.webp",
    link: "projects/walltips/",
  },
  {
    name: "FurioDiVino",
    year: "2024",
    category: ["logo"],
    desc: ["Logo design", "A personal brand created for a friend sommelier, designed to express passion, expertise, and a playful yet refined personality within the wine world."],
    thumb: "assets/images/portfolio/furio-divino_thumb.webp",
    link: "projects/furio-divino/",
  },
  {
    name: "Mindtooth",
    year: "2024",
    category: ["app-webapp"],
    desc: ["App design for tablets & Prototyping", "Mindtooth is a neurotechnology application developed by Brainsigns for monitoring, reading, and analyzing brainwave recordings"],
    thumb: "assets/images/portfolio/brainsigns.webp",
    link: "projects/brainsigns/",
  },
  {
    name: "Wall of Fame",
    year: "2023",
    category: ["logo"],
    desc: ["Logo design", "Conceived as an e-commerce platform dedicated to authenticated autographed collectibles and original celebrity items."],
    thumb: "assets/images/portfolio/wall-of-fame_logo_thumb.webp",
    link: "projects/wall-of-fame/",
  },
  {
    name: "Econeth",
    year: "2023",
    category: ["app-webapp", "ux-ui"],
    desc: ["UX/UI design & HTML5/SCSS & Prototyping", "Econeth is a web platform designed for crowdfunding projects specifically in the gaming universe - from video games themselves to related equipment such as gaming chairs, consoles, and accessories."],
    thumb: "assets/images/portfolio/econeth_thumb.webp",
    link: "projects/econeth/",
  },
  {
    name: "Fuix",
    year: "2022",
    category: ["ux-ui"],
    desc: ["UX/UI design & HTML5/SCSS coding", "A high-end e-commerce platform for luxury brands, designed to combine elegance with usability."],
    thumb: "assets/images/portfolio/fuix_thumb.webp",
    link: "projects/fuix/",
  },
  {
    name: "Adalot",
    year: "2022",
    category: ["ux-ui"],
    desc: ["UX/UI design & HTML5/SCSS coding", "A corporate website designed to communicate the company’s services, values, and technological expertise in a clear and professional way. "],
    thumb: "assets/images/portfolio/adalot_thumb.webp",
    link: "projects/adalot/",
  },
  {
    name: "Libes",
    year: "2021",
    category: ["ux-ui", "app-webapp", "logo"],
    desc: ["UX/UI design & Logo design & HTML5/SCSS coding", "Libes is a platform born from the idea of sharing geographic and cultural knowledge as an alternative to traditional social networks."],
    thumb: "assets/images/portfolio/libes/libes_thumb.webp",
    link: "projects/libes/",
  },
  {
    name: "Yummo",
    year: "2021",
    category: ["ux-ui", "app-webapp"],
    desc: ["UX/UI design", "A concept platform designed to go beyond traditional food delivery by inspiring users with personalized restaurant recommendations based on cravings and location."],
    thumb: "assets/images/portfolio/yummo_thumb.webp",
    link: "projects/yummo/",
  },
  {
    name: "MioAssicuratore",
    year: "2019",
    category: ["ux-ui", "logo"],
    desc: ["UX/UI design & HTML5/SCSS", "Mio Assicuratore is an insurance platform designed to simplify the comparison and management of policies for users."],
    thumb: "assets/images/portfolio/mioassicuratore/mioassicuratore_thumb.webp",
    link: "projects/mioassicuratore/",
  },
  {
    name: "Voverc",
    year: "2020",
    category: ["ux-ui"],
    desc: ["UX/UI design & HTML5/CSS coding", "Voverc - later acquired and rebranded as Voxloud - was a cloud-based telephony platform offering virtual PBX solutions for businesses."],
    thumb: "assets/images/portfolio/voverc/voverc_thumb.webp",
    link: "projects/voverc/",
  },
  {
    name: "Lele B&B",
    year: "2016",
    category: ["logo"],
    desc: ["UX/UI design & HTML5/CSS coding", "A hospitality brand based in Rome. The project focused primarily on the creation of the logo and visual identity, designed to communicate warmth, comfort, and a welcoming atmosphere "],
    thumb: "assets/images/portfolio/lele-beb/lele-beb_thumb.webp",
    link: "projects/lele-beb/",
  },
  {
    name: "HelloLen* Cosplay",
    year: "2015",
    category: ["ux-ui"],
    desc: ["UX/UI design & HTML5/CSS coding", "HelloLen* Cosplay is a personal portfolio website designed to showcase cosplay projects, modeling photography, and artistic collaborations in a visually immersive and responsive experience."],
    thumb: "assets/images/portfolio/hellolen_2015/hellolen2015_thumb.webp",
    link: "projects/hellolen/",
  },
];
 

const filters = [
  { key: "ux-ui", label: "{ UX/UI design }" },
  { key: "app-webapp", label: "{ app & webapp }" },
  { key: "logo", label: "{ logo design }" },
];
 
 
 
// ---------- render filter bar + work list (homepage only) ----------
const filterBar = document.getElementById("filter-bar");
const workList = document.getElementById("work-list");
const loadMoreBtn = document.getElementById("load-more");
let activeFilter = "ux-ui";
 
const VISIBLE_STEP = 4; // how many rows to show per "page"
let visibleCount = VISIBLE_STEP;
 
function applyVisibility() {
  const matchingRows = Array.from(document.querySelectorAll(".work-row")).filter(
    (row) =>
      activeFilter === "all" ||
      row.dataset.category.split(",").includes(activeFilter)
  );

  // Show/hide matching rows
  matchingRows.forEach((row, i) => {
    row.classList.toggle("hidden", i >= visibleCount);
  });

  // Rows that don't match the filter are always hidden
  document.querySelectorAll(".work-row").forEach((row) => {
    if (!matchingRows.includes(row)) {
      row.classList.add("hidden");
    }
  });

  if (loadMoreBtn) {
    const total = matchingRows.length;
    const showingAll = visibleCount >= total;

    // If there are 4 or fewer projects, no button is needed
    if (total <= VISIBLE_STEP) {
      loadMoreBtn.classList.add("hidden");
      return;
    }

    loadMoreBtn.classList.remove("hidden");

    if (showingAll) {
      loadMoreBtn.textContent = "Load less ↖";
    } else {
      const remaining = total - visibleCount;
      loadMoreBtn.textContent = `Load more (${remaining}) ↘`;
    }
  }
}
 
function setFilter(key) {
  if (!filterBar) return;
  activeFilter = key;
  visibleCount = VISIBLE_STEP; // reset pagination on every filter change
  filterBar.querySelectorAll(".filter-btn").forEach((b) => {
    b.classList.toggle("active", b.dataset.key === key);
  });
  applyVisibility();
}
 
if (loadMoreBtn) {
  loadMoreBtn.addEventListener("click", () => {
    const matchingRows = Array.from(document.querySelectorAll(".work-row")).filter(
      (row) =>
        activeFilter === "all" ||
        row.dataset.category.split(",").includes(activeFilter)
    );

    const showingAll = visibleCount >= matchingRows.length;

    if (showingAll) {
      // LOAD LESS
      visibleCount = VISIBLE_STEP;
      applyVisibility();

      // Smoothly return to the beginning of the work list
      workList.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    } else {
      // LOAD MORE
      const oldVisibleCount = visibleCount;

      visibleCount += VISIBLE_STEP;
      applyVisibility();

      // Find the first newly revealed row
      const firstNewRow = matchingRows[oldVisibleCount];

      if (firstNewRow) {
        firstNewRow.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    }
  });
}
 
if (filterBar) {
  filters.forEach((f) => {
    const btn = document.createElement("button");
    btn.className = "filter-btn mono" + (f.key === activeFilter ? " active" : "");
    btn.textContent = f.label;
    btn.dataset.key = f.key;
    btn.setAttribute("data-hover", "");
    btn.addEventListener("click", () => setFilter(f.key));
    filterBar.appendChild(btn);
  });
 
  const archiveLink = document.createElement("a");
  archiveLink.href = "archive";
  archiveLink.target = "_self";
  archiveLink.rel = "noreferrer";
  archiveLink.className = "filter-btn archive mono";
  archiveLink.textContent = "{ archive ↗ }";
  archiveLink.setAttribute("data-hover", "");
  filterBar.appendChild(archiveLink);
}
 
if (workList) {
  projects.forEach((p, i) => {
    const row = document.createElement("a");
    row.href = p.link;
    row.target = "_self";
    row.rel = "noreferrer";
    row.className = "work-row";
    row.dataset.category = p.category.join(",");
    row.dataset.thumb = p.thumb;
    row.setAttribute("data-hover", "");
 
    row.innerHTML = `
      <div class="work-row-inner">
        <span class="work-num mono">${String(i + 1).padStart(2, "0")}</span>
        <div class="work-main">
        <div class="work-header">
              <h3 class="work-name">${p.name}</h3>
              <div class="work-header-right">
                <span class="work-year mono">${p.year}</span>
                <svg class="work-arrow" xmlns="http://www.w3.org/2000/svg"
                  width="22" height="22" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round">
                  <path d="M7 7h10v10"></path>
                  <path d="M7 17 17 7"></path>
                </svg>
        </div>
        </div>
          <p class="work-desc mono">
            <span>${p.desc[0]}</span>
            <span>${p.desc[1]}</span>
          </p>
        </div>
 
      </div>`;
 
    workList.appendChild(row);
  });
 
  // IMPORTANT: this must be AFTER projects.forEach
  setFilter("ux-ui");
}
 
// ---------- work hover tooltip (follows cursor 1:1) — homepage only ----------
const tooltip = document.getElementById("work-tooltip");
 
if (workList && tooltip) {
  const tooltipImg = tooltip.querySelector("img");
 
  workList.addEventListener("mouseover", (e) => {
    const row = e.target.closest(".work-row");
    if (!row) return;
    tooltipImg.src = row.dataset.thumb;
    tooltipImg.alt = row.querySelector(".work-name").textContent;
    tooltip.classList.add("visible");
  });
 
  workList.addEventListener("mouseout", (e) => {
    if (e.target.closest(".work-row")) tooltip.classList.remove("visible");
  });
 
  workList.addEventListener("mousemove", (e) => {
    tooltip.style.left = e.clientX + "px";
    tooltip.style.top = e.clientY + "px";
  });
}