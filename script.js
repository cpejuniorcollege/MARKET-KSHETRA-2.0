/* =========================================
   MARKET KHETRA 2026
   GALLERY
========================================= */

const gallery = document.getElementById("gallery");

const totalPhotos = 120;

let currentPhoto = 1;

const stallDetails = {};

/* =========================================
   CREATE GALLERY
========================================= */

// ---------- CPE JUNIOR COLLEGE ----------

const cpeHeading = document.createElement("h2");

cpeHeading.className = "gallery-college-heading";

cpeHeading.textContent = "CPE JUNIOR COLLEGE";

gallery.appendChild(cpeHeading);


// CPE PHOTOS
// gallery1.jpg → gallery38.jpg
// Future CPE photos can continue from gallery39.jpg

const cpeTotalPhotos = 59;

for (let i = 1; i <= cpeTotalPhotos; i++) {

    const item = document.createElement("div");

    item.className = "gallery-item";

    const image = document.createElement("img");

    image.src = `assets/images/gallery${i}.jpg`;

    image.alt = `CPE Junior College photo ${i}`;

    image.loading = "lazy";

    image.onerror = function () {
    console.log("CPE image failed:", image.src);
};

   const photoWrapper = document.createElement("div");

photoWrapper.className = "photo-wrapper";

photoWrapper.appendChild(image);

item.appendChild(photoWrapper);

const stallNumber = document.createElement("div");

stallNumber.className = "stall-number";

stallNumber.textContent = `STALL ${String(i).padStart(2, "0")}`;

item.appendChild(stallNumber);

    item.addEventListener("click", function () {
        openPhoto(i);
    });

    gallery.appendChild(item);
}


// ---------- GAP ----------

const galleryGap = document.createElement("div");

galleryGap.className = "college-gallery-gap";

gallery.appendChild(galleryGap);


// ---------- SRI CHANAKYA DEGREE COLLEGE ----------

const chanakyaHeading = document.createElement("h2");

chanakyaHeading.className = "gallery-college-heading";

chanakyaHeading.textContent =
    "SRI CHANAKYA DEGREE COLLEGE";

gallery.appendChild(chanakyaHeading);


// CHANAKYA PHOTOS
// gallery39.jpg → gallery55.jpg
// 17 photos

const chanakyaTotalPhotos = 17;

for (let i = 1; i <= chanakyaTotalPhotos; i++) {

    const item = document.createElement("div");

    item.className = "gallery-item";

    const image = document.createElement("img");

    image.src = `assets/images/chanakya${i}.jpg`;

    image.alt = `Sri Chanakya Degree College photo ${i}`;

    image.loading = "lazy";

    image.onerror = function () {
        item.remove();
    };

   const photoWrapper = document.createElement("div");

photoWrapper.className = "photo-wrapper";

photoWrapper.appendChild(image);

item.appendChild(photoWrapper);

const stallNumber = document.createElement("div");

stallNumber.className = "stall-number";

stallNumber.textContent =
    `STALL ${String(cpeTotalPhotos + i).padStart(2, "0")}`;

item.appendChild(stallNumber);

    gallery.appendChild(item);
}

/* =========================================
   LIGHTBOX
========================================= */

const lightbox = document.createElement("div");

lightbox.className = "lightbox";

lightbox.innerHTML = `
    <button class="lightbox-close">×</button>

    <button class="lightbox-prev">‹</button>

    <img class="lightbox-image" src="" alt="">

    <button class="lightbox-next">›</button>
`;

document.body.appendChild(lightbox);


const lightboxImage =
    lightbox.querySelector(".lightbox-image");

const closeButton =
    lightbox.querySelector(".lightbox-close");

const previousButton =
    lightbox.querySelector(".lightbox-prev");

const nextButton =
    lightbox.querySelector(".lightbox-next");


/* =========================================
   OPEN PHOTO
========================================= */

function openPhoto(number) {

    currentPhoto = number;

    lightboxImage.src =
        `assets/images/gallery${currentPhoto}.jpg`;

    lightbox.classList.add("active");

    document.body.style.overflow = "hidden";
}



/* =========================================
   CLOSE PHOTO
========================================= */

function closePhoto() {

    lightbox.classList.remove("active");

    document.body.style.overflow = "";
}


closeButton.addEventListener(
    "click",
    closePhoto
);


/* =========================================
   NEXT PHOTO
========================================= */

function nextPhoto() {

    currentPhoto++;

    if (currentPhoto > totalPhotos) {
        currentPhoto = 1;
    }

    lightboxImage.src =
        `assets/images/gallery${currentPhoto}.jpg`;
}


nextButton.addEventListener(
    "click",
    nextPhoto
);


/* =========================================
   PREVIOUS PHOTO
========================================= */

function previousPhoto() {

    currentPhoto--;

    if (currentPhoto < 1) {
        currentPhoto = totalPhotos;
    }

    lightboxImage.src =
        `assets/images/gallery${currentPhoto}.jpg`;
}


previousButton.addEventListener(
    "click",
    previousPhoto
);


/* =========================================
   KEYBOARD CONTROLS
========================================= */

document.addEventListener("keydown", function (event) {

    if (!lightbox.classList.contains("active")) {
        return;
    }

    if (event.key === "Escape") {
        closePhoto();
    }

    if (event.key === "ArrowRight") {
        nextPhoto();
    }

    if (event.key === "ArrowLeft") {
        previousPhoto();
    }

});


/* =========================================
   CLOSE WHEN CLICKING OUTSIDE IMAGE
========================================= */

lightbox.addEventListener(
    "click",
    function (event) {

        if (event.target === lightbox) {
            closePhoto();
        }

    }
);
/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements = document.querySelectorAll(
    ".section-heading, .gallery-item, .about-content, .info-card, .contact-item"
);

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                revealObserver.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.12
    }
);

revealElements.forEach((element) => {
    revealObserver.observe(element);
});
