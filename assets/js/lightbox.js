// ---------- travel lightbox ----------

let currentTravelGallery = [];
let currentTravelIndex = 0;
let currentTravelHobby = null;


// ---------- elements ----------

const travelLightbox = document.getElementById("travel-lightbox");

const travelLightboxImage =
  document.getElementById("travel-lightbox-image");

const travelLightboxCaption =
  document.getElementById("travel-lightbox-caption");

const travelLightboxClose =
  document.querySelector(".travel-lightbox-close");

const travelLightboxPrev =
  document.querySelector(".travel-lightbox-prev");

const travelLightboxNext =
  document.querySelector(".travel-lightbox-next");


// ---------- open ----------

function openTravelGallery(hobby) {

  currentTravelHobby = hobby;

  currentTravelGallery = buildGallery(hobby);

  currentTravelIndex = 0;

  updateTravelGallery();

  travelLightbox.classList.add("visible");

  travelLightbox.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.classList.add(
    "travel-lightbox-open"
  );
}


// ---------- update image ----------

function updateTravelGallery() {

  if (!currentTravelGallery.length) {
    return;
  }

  const image =
    currentTravelGallery[currentTravelIndex];

  travelLightboxImage.src = image;

  travelLightboxImage.alt =
    `${currentTravelHobby.name} ${currentTravelIndex + 1}`;

  travelLightboxCaption.textContent =
    `${currentTravelHobby.name} · ${currentTravelIndex + 1} / ${currentTravelGallery.length}`;
}


// ---------- close ----------

function closeTravelGallery() {

  travelLightbox.classList.remove("visible");

  travelLightbox.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.classList.remove(
    "travel-lightbox-open"
  );

  // Clear image after closing
  setTimeout(() => {
    travelLightboxImage.src = "";
  }, 300);
}


// ---------- previous ----------

function previousTravelImage() {

  if (!currentTravelGallery.length) {
    return;
  }

  currentTravelIndex =
    (currentTravelIndex - 1 + currentTravelGallery.length)
    % currentTravelGallery.length;

  updateTravelGallery();
}


// ---------- next ----------

function nextTravelImage() {

  if (!currentTravelGallery.length) {
    return;
  }

  currentTravelIndex =
    (currentTravelIndex + 1)
    % currentTravelGallery.length;

  updateTravelGallery();
}


// ---------- buttons ----------

travelLightboxClose.addEventListener(
  "click",
  closeTravelGallery
);

travelLightboxPrev.addEventListener(
  "click",
  previousTravelImage
);

travelLightboxNext.addEventListener(
  "click",
  nextTravelImage
);


// ---------- click background to close ----------

travelLightbox.addEventListener("click", (e) => {

  if (e.target === travelLightbox) {
    closeTravelGallery();
  }

});


// ---------- keyboard ----------

document.addEventListener("keydown", (e) => {

  if (!travelLightbox.classList.contains("visible")) {
    return;
  }

  if (e.key === "Escape") {
    closeTravelGallery();
  }

  if (e.key === "ArrowLeft") {
    previousTravelImage();
  }

  if (e.key === "ArrowRight") {
    nextTravelImage();
  }

});