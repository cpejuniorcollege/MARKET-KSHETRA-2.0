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

for (let i = 2; i <= totalPhotos; i++) {

    const item = document.createElement("div");

    item.className = "gallery-item";

    const image = document.createElement("img");

    image.src = `assets/images/gallery${i}.jpg`;

    image.alt = `Market Kshetra stall ${i}`;

    image.loading = "lazy";

    image.onerror = function () {
        item.remove();
    };

    item.appendChild(image);

    item.addEventListener("click", function () {
        openPhoto(i);
    });

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

    let details = lightbox.querySelector(".stall-details");

    if (!details) {

        details = document.createElement("div");

        details.className = "stall-details";

        lightbox.appendChild(details);
    }

    const stall = stallDetails[number] || {
        name: "",
        members: ""
    };

    details.innerHTML = `
        <div class="stall-number">
            STALL ${String(number).padStart(2, "0")}
        </div>

        <div class="stall-info">
            <span>STALL NAME:</span>
            <strong>${stall.name}</strong>
        </div>

        <div class="stall-info">
            <span>MEMBERS:</span>
            <strong>${stall.members}</strong>
        </div>
    `;

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
