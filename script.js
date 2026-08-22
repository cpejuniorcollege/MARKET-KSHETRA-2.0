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

/* =========================================
   STALL GROUPS
========================================= */

const chanakyaStalls = [
    9, 29, 30, 33, 51, 52, 64, 70, 72, 74,
    78, 83, 84, 85, 100, 101, 102, 109, 110, 112
];

const cpeStalls = [];

for (let i = 1; i <= 112; i++) {
    if (!chanakyaStalls.includes(i)) {
        cpeStalls.push(i);
    }
}
 /* =========================================
   CPE JUNIOR COLLEGE
========================================= */

const cpeHeading = document.createElement("h2");

cpeHeading.className = "gallery-college-heading";
cpeHeading.textContent = "CPE JUNIOR COLLEGE";

gallery.appendChild(cpeHeading);


/* =========================================
   ABHIRAM STALL — STALL 01
========================================= */

const abhiramItem = document.createElement("div");

abhiramItem.className = "gallery-item abhiram-stall";

const abhiramImage = document.createElement("img");

abhiramImage.src = "assets/images/gallery1.jpg";
abhiramImage.alt = "Abhiram Stall";
abhiramImage.loading = "lazy";

const abhiramWrapper = document.createElement("div");

abhiramWrapper.className = "photo-wrapper";

abhiramWrapper.appendChild(abhiramImage);
abhiramItem.appendChild(abhiramWrapper);

const abhiramNumber = document.createElement("div");

abhiramNumber.className = "stall-number";
abhiramNumber.textContent = "STALL 01";

abhiramItem.appendChild(abhiramNumber);

abhiramItem.addEventListener("click", function () {
    openPhoto(1);
});

gallery.appendChild(abhiramItem);  
/* =========================================
   CPE STALLS
   STALL 02–07 RESERVED FOR FUTURE
========================================= */

cpeStalls.forEach(function (stallNumber) {

    // Stall 01 already created separately
    if (stallNumber === 1) {
        return;
    }

    // Stall 02–07 are currently empty
    if (stallNumber >= 2 && stallNumber <= 7) {
        return;
    }

    const item = document.createElement("div");

    item.className = "gallery-item";

    const image = document.createElement("img");

    image.src = `assets/images/gallery${stallNumber}.jpg`;

    image.alt = `CPE Junior College Stall ${stallNumber}`;

    image.loading = "lazy";

    image.onerror = function () {
        console.log("CPE image failed:", image.src);
    };

    const photoWrapper = document.createElement("div");

    photoWrapper.className = "photo-wrapper";

    photoWrapper.appendChild(image);

    item.appendChild(photoWrapper);

    const stallNumberText = document.createElement("div");

    stallNumberText.className = "stall-number";

    stallNumberText.textContent =
        `STALL ${String(stallNumber).padStart(2, "0")}`;

    item.appendChild(stallNumberText);

    item.addEventListener("click", function () {
        openPhoto(stallNumber);
    });

    gallery.appendChild(item);
});
/* =========================================
   SRI CHANAKYA DEGREE COLLEGE
========================================= */

const chanakyaGap = document.createElement("div");

chanakyaGap.className = "college-gallery-gap";

gallery.appendChild(chanakyaGap);


const chanakyaHeading = document.createElement("h2");

chanakyaHeading.className = "gallery-college-heading";

chanakyaHeading.textContent =
    "SRI CHANAKYA DEGREE COLLEGE";

gallery.appendChild(chanakyaHeading);


/* =========================================
   CHANAKYA STALLS
========================================= */

chanakyaStalls.forEach(function (stallNumber) {

    const item = document.createElement("div");

    item.className = "gallery-item";

    const image = document.createElement("img");

    image.src =
        `assets/images/chanakya${stallNumber}.jpg`;

    image.alt =
        `Sri Chanakya Degree College Stall ${stallNumber}`;

    image.loading = "lazy";

    image.onerror = function () {
        console.log(
            "Chanakya image failed:",
            image.src
        );
    };

    const photoWrapper = document.createElement("div");

    photoWrapper.className = "photo-wrapper";

    photoWrapper.appendChild(image);

    item.appendChild(photoWrapper);

    const stallNumberText = document.createElement("div");

    stallNumberText.className = "stall-number";

    stallNumberText.textContent =
        `STALL ${String(stallNumber).padStart(2, "0")}`;

    item.appendChild(stallNumberText);

    item.addEventListener("click", function () {
        openPhoto(stallNumber);
    });

    gallery.appendChild(item);
});
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
