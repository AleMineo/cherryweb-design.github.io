// ============================================================
// TRAVEL / HOBBIES
// ============================================================

const hobbies = [
  {
    name: "USA On the road",
    year: "2024",
    img: "assets/images/photos/USA_on-the-road_2024/USA-on-the-road_2024_thumb.webp",
    gallery: "assets/images/photos/USA_on-the-road_2024/"
  },
  {
    name: "New York",
    year: "2023",
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
    name: "Miami",
    year: "2022",
    img: "assets/images/photos/miami/miami_thumb.webp",
    gallery: "assets/images/photos/miami/"
  },
  {
    name: "London",
    year: "2022",
    img: "assets/images/photos/london/london_thumb.webp",
    gallery: "assets/images/photos/london/"
  },
  {
    name: "Thailand",
    year: "2020",
    img: "assets/images/photos/thailand/thailand_thumb.webp",
    gallery: "assets/images/photos/thailand/"
  },
  {
    name: "Urbex",
    year: "2020",
    img: "assets/images/photos/urbex/urbex_thumb.webp",
    gallery: "assets/images/photos/urbex/"
  },
  {
    name: "Japan",
    year: "2019",
    img: "assets/images/photos/japan/japan-thumb.webp",
    gallery: "assets/images/photos/japan/"
  },
  {
    name: "Australia",
    year: "2019",
    img: "assets/images/photos/australia/australia_thumb.webp",
    gallery: "assets/images/photos/australia/"
  }
];


// ============================================================
// RENDER TRAVEL CARDS
// ============================================================

const hobbiesScroll = document.getElementById("hobbies-scroll");

if (hobbiesScroll) {

  hobbies.forEach((hobby, index) => {

    const card = document.createElement("div");

    card.className = "hobby-card";
    card.setAttribute("data-hover", "");

    // Store gallery information on the card
    card.dataset.gallery = hobby.gallery;
    card.dataset.name = hobby.name;
    card.dataset.year = hobby.year;

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
  let scrollLeft = 0;

  hobbiesScroll.addEventListener("mousedown", (e) => {

    isDown = true;

    hobbiesScroll.classList.add("dragging");

    startX = e.pageX - hobbiesScroll.offsetLeft;
    scrollLeft = hobbiesScroll.scrollLeft;

  });


  hobbiesScroll.addEventListener("mousemove", (e) => {

    if (!isDown) return;

    e.preventDefault();

    const x = e.pageX - hobbiesScroll.offsetLeft;

    const walk = (x - startX) * 1.2;

    hobbiesScroll.scrollLeft = scrollLeft - walk;

  });


  window.addEventListener("mouseup", () => {

    isDown = false;

    hobbiesScroll.classList.remove("dragging");

  });

}