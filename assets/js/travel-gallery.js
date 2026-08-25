// ============================================================
// TRAVEL GALLERY / LIGHTBOX
// ============================================================

// ---------- gallery configuration ----------

const galleryFiles = {
  "USA On the road": [
    "antelope_01.webp",
    "antelope_02.webp",
    "antelope_03.webp",
    "bryce_01.webp",
    "bryce_02.webp",
    "bryce_03.webp",
    "grand-canyon_01.webp",
    "grand-canyon_02.webp",
    "grand-canyon_03.webp",
    "horseshoe-bend.webp",
    "LA_01.webp",
    "LA_02.webp",
    "LA_03.webp",
    "LA_04.webp",
    "LA_05.webp",
    "LA_06.webp",
    "LV_01.webp",
    "LV_02.webp",
    "LV_03.webp",
    "monument_01.webp",
    "monument_02.webp",
    "monument_03.webp",
    "monument_04.webp",
    "route-66_01.webp",
    "route-66_02.webp",
    "route-66_03.webp",
    "sequoia_01.webp",
    "sequoia_02.webp",
    "SF_01.webp",
    "SF_02.webp",
    "SF_03.webp",
    "SF_04.webp"
  ],

  "New York 03": Array.from(
    { length: 12 },
    (_, i) => `new-york_${String(i + 1).padStart(2, "0")}.webp`
  ),

  "New York 02": Array.from(
    { length: 38 },
    (_, i) => `newyork_${String(i + 1).padStart(2, "0")}.webp`
  ),

  "New York 01": Array.from(
    { length: 13 },
    (_, i) => `new-york_${String(i + 1).padStart(2, "0")}.webp`
  ),

  "Spain": Array.from(
    { length: 11 },
    (_, i) => `spain_${String(i + 1).padStart(2, "0")}.webp`
  ),

  "Miami": Array.from(
    { length: 12 },
    (_, i) => `miami_${String(i + 1).padStart(2, "0")}.webp`
  ),


  "Rome": Array.from(
    { length: 12 },
    (_, i) => `rome_${String(i + 1).padStart(2, "0")}.webp`
  ),


  "London": Array.from(
    { length: 32 },
    (_, i) => `london_${String(i + 1).padStart(2, "0")}.webp`
  ),

    "Paris": Array.from(
    { length: 14 },
    (_, i) => `paris_${String(i + 1).padStart(2, "0")}.webp`
  ),

  "Thailand": Array.from(
    { length: 22 },
    (_, i) => `thailand_${String(i + 1).padStart(2, "0")}.webp`
  ),

  "Urbex": Array.from(
    { length: 9 },
    (_, i) => `urbex_${String(i + 1).padStart(2, "0")}.webp`
  ),

  "Japan": Array.from(
    { length: 31 },
    (_, i) => `japan_${String(i + 1).padStart(2, "0")}.webp`
  ),

  "Australia": Array.from(
    { length: 20 },
    (_, i) => `australia_${String(i + 1).padStart(2, "0")}.webp`
  ),

  "New Zealand": Array.from(
    { length: 20 },
    (_, i) => `newzealand_${String(i + 1).padStart(2, "0")}.webp`
  )
};


// ============================================================
// CREATE LIGHTBOX HTML
// ============================================================

const lightbox = document.createElement("div");

lightbox.id = "travel-lightbox";
lightbox.className = "travel-lightbox";

lightbox.innerHTML = `
  <button class="lightbox-close" type="button" aria-label="Close">
    &times;
  </button>

  <button class="lightbox-prev" type="button" aria-label="Previous">
    &#10094;
  </button>

  <div class="lightbox-content">

    <img
      class="lightbox-image"
      src=""
      alt=""
    >

    <div class="lightbox-caption">
      <span class="lightbox-name"></span>
      <span class="lightbox-counter"></span>
    </div>

  </div>

  <button class="lightbox-next" type="button" aria-label="Next">
    &#10095;
  </button>
`;

document.body.appendChild(lightbox);


// ============================================================
// ELEMENTS
// ============================================================

const lightboxImage = lightbox.querySelector(".lightbox-image");
const lightboxName = lightbox.querySelector(".lightbox-name");
const lightboxCounter = lightbox.querySelector(".lightbox-counter");

const closeButton = lightbox.querySelector(".lightbox-close");
const prevButton = lightbox.querySelector(".lightbox-prev");
const nextButton = lightbox.querySelector(".lightbox-next");


// ============================================================
// STATE
// ============================================================

let currentGallery = [];
let currentGalleryIndex = 0;
let currentGalleryName = "";


// ============================================================
// OPEN GALLERY
// ============================================================

function openGallery(card) {

  const galleryPath = card.dataset.gallery;
  const galleryName = card.dataset.name;

  console.log("Opening gallery:", galleryName);

  if (!galleryPath) {
    console.warn("No gallery path found:", card);
    return;
  }

  currentGalleryName = galleryName;

  const files = galleryFiles[galleryName];

  if (!files || files.length === 0) {
    console.warn("No gallery images configured for:", galleryName);
    return;
  }

  currentGallery = files.map(file => galleryPath + file);
  currentGalleryIndex = 0;

  showGalleryImage();

  lightbox.classList.add("is-open");

  document.body.classList.add("lightbox-open");
}


// ============================================================
// SHOW IMAGE
// ============================================================

function showGalleryImage() {

  if (!currentGallery.length) return;

  const image = currentGallery[currentGalleryIndex];

  lightboxImage.src = image;
  lightboxImage.alt = currentGalleryName;

  lightboxName.textContent = currentGalleryName;

  lightboxCounter.textContent =
    `${currentGalleryIndex + 1} / ${currentGallery.length}`;
}


// ============================================================
// CLOSE
// ============================================================

function closeGallery() {

  lightbox.classList.remove("is-open");

  document.body.classList.remove("lightbox-open");

  // Clear image after closing
  setTimeout(() => {
    lightboxImage.src = "";
  }, 300);
}


// ============================================================
// NEXT
// ============================================================

function nextImage() {

  if (!currentGallery.length) return;

  currentGalleryIndex =
    (currentGalleryIndex + 1) % currentGallery.length;

  showGalleryImage();
}


// ============================================================
// PREVIOUS
// ============================================================

function previousImage() {

  if (!currentGallery.length) return;

  currentGalleryIndex =
    (currentGalleryIndex - 1 + currentGallery.length) %
    currentGallery.length;

  showGalleryImage();
}


// ============================================================
// CLICK EVENTS
// ============================================================

document.querySelectorAll(".hobby-card").forEach(card => {

  card.addEventListener("click", () => {
    openGallery(card);
  });

});


// Close button
closeButton.addEventListener("click", closeGallery);


// Previous / next
prevButton.addEventListener("click", previousImage);
nextButton.addEventListener("click", nextImage);


// Click outside image
lightbox.addEventListener("click", (e) => {

  if (e.target === lightbox) {
    closeGallery();
  }

});


// ============================================================
// KEYBOARD
// ============================================================

document.addEventListener("keydown", (e) => {

  if (!lightbox.classList.contains("is-open")) return;

  if (e.key === "Escape") {
    closeGallery();
  }

  if (e.key === "ArrowRight") {
    nextImage();
  }

  if (e.key === "ArrowLeft") {
    previousImage();
  }

});


// ============================================================
// PREVENT DRAGGING IMAGE
// ============================================================

lightboxImage.addEventListener("dragstart", (e) => {
  e.preventDefault();
});