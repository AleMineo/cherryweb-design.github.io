// ============================================================
// TRAVEL / HOBBIES
// ============================================================

const hobbies = [
  {
    name: "Paris",
    year: "2026",
    img: "assets/images/photos/paris/paris_thumb.webp",
    gallery: "assets/images/photos/paris/"
  },
  {
    name: "USA On the road",
    year: "2024",
    img: "assets/images/photos/USA_on-the-road_2024/USA-on-the-road_2024_thumb.webp",
    gallery: "assets/images/photos/USA_on-the-road_2024/"
  },
  {
    name: "London",
    year: "2024",
    img: "assets/images/photos/london/london_thumb.webp",
    gallery: "assets/images/photos/london/"
  },
  {
    name: "New York",
    year: "2023",
    key: "New York 2023",
    img: "assets/images/photos/newyork/2023/new-york_thumb.webp",
    gallery: "assets/images/photos/newyork/2023/"
  },
  {
    name: "Spain",
    year: "2023",
    img: "assets/images/photos/spain/spain_thumb.webp",
    gallery: "assets/images/photos/spain/"
  },
  {
    name: "Rome",
    year: "2022",
    img: "assets/images/photos/rome/rome_thumb.webp",
    gallery: "assets/images/photos/rome/"
  },
  {
    name: "New York",
    year: "2022",
    key: "New York 2022",
    img: "assets/images/photos/newyork/2022/newyork_thumb.webp",
    gallery: "assets/images/photos/newyork/2022/"
  },
  {
    name: "Miami",
    year: "2022",
    img: "assets/images/photos/miami/miami_thumb.webp",
    gallery: "assets/images/photos/miami/"
  },
  {
    name: "Urbex",
    year: "2020",
    img: "assets/images/photos/urbex/urbex_thumb.webp",
    gallery: "assets/images/photos/urbex/"
  },
  {
    name: "Thailand",
    year: "2019",
    img: "assets/images/photos/thailand/thailand_thumb.webp",
    gallery: "assets/images/photos/thailand/"
  },
  {
    name: "New York",
    year: "2019",
    key: "New York 2019",
    img: "assets/images/photos/newyork/2019/new-york_thumb.webp",
    gallery: "assets/images/photos/newyork/2019/"
  },
  {
    name: "Japan",
    year: "2019",
    img: "assets/images/photos/japan/japan-thumb.webp",
    gallery: "assets/images/photos/japan/"
  },
  {
    name: "Australia",
    year: "2018",
    img: "assets/images/photos/australia/australia_thumb.webp",
    gallery: "assets/images/photos/australia/"
  },
  {
    name: "New Zealand",
    year: "2017",
    img: "assets/images/photos/newzealand/newzealand_thumb.webp",
    gallery: "assets/images/photos/newzealand/"
  }
];


// ============================================================
// RENDER TRAVEL CARDS
// ============================================================

const hobbiesScroll = document.getElementById("hobbies-scroll");

if (hobbiesScroll) {

  hobbies.forEach((hobby) => {
    const card = document.createElement("div");

    card.className = "hobby-card";
    card.setAttribute("data-hover", "");

    card.dataset.gallery = hobby.gallery;
    card.dataset.name = hobby.name;
    card.dataset.year = hobby.year;
    card.dataset.key = hobby.key || hobby.name;

    card.innerHTML = `
      <div class="hobby-img">
        <img
          src="${hobby.img}"
          alt="${hobby.name}"
          loading="lazy"
          draggable="false"
        >
      </div>

      <div class="hobby-meta">
        <span class="name serif">${hobby.name}</span>
        <span class="year mono">${hobby.year}</span>
      </div>
    `;

    hobbiesScroll.appendChild(card);
  });

  // ==========================================================
  // DRAG TO SCROLL
  // ==========================================================

  let isDown = false;
  let startX = 0;
  let startScrollLeft = 0;
  let dragFrameId = null;

  const stopDragging = () => {
    isDown = false;
    hobbiesScroll.classList.remove("dragging");

    if (dragFrameId !== null) {
      cancelAnimationFrame(dragFrameId);
      dragFrameId = null;
    }
  };

  const updateDragScroll = (clientX) => {
    if (!isDown) return;

    const deltaX = clientX - startX;
    const nextScrollLeft = startScrollLeft - deltaX * 1.2;

    if (dragFrameId !== null) return;

    dragFrameId = requestAnimationFrame(() => {
      hobbiesScroll.scrollLeft = nextScrollLeft;
      dragFrameId = null;
    });
  };

  hobbiesScroll.addEventListener("pointerdown", (event) => {
    isDown = true;
    hobbiesScroll.classList.add("dragging");
    startX = event.clientX;
    startScrollLeft = hobbiesScroll.scrollLeft;
  });

  hobbiesScroll.addEventListener("pointermove", (event) => {
    if (!isDown) return;
    event.preventDefault();
    updateDragScroll(event.clientX);
  });

  hobbiesScroll.addEventListener("pointerup", stopDragging);
  hobbiesScroll.addEventListener("pointerleave", stopDragging);
  hobbiesScroll.addEventListener("pointercancel", stopDragging);
  window.addEventListener("pointerup", stopDragging);
}