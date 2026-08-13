/* =========================================
   MARKET KHETRA 2026
   MAIN JAVASCRIPT
========================================= */


/* =========================================
   GALLERY
========================================= */

const gallery = document.getElementById("gallery");

const totalPhotos = 120;

for (let i = 1; i <= totalPhotos; i++) {

    const item = document.createElement("div");

    item.classList.add("gallery-item");

    const image = document.createElement("img");

    image.src = `assets/gallery${i}.jpg`;

    image.alt = `Market Kshetra Stall ${i}`;

    image.loading = "lazy";

    /*
       If an image doesn't exist yet,
       hide that gallery box instead of
       showing a broken image.
    */

    image.onerror = function () {
        item.style.display = "none";
    };

    item.appendChild(image);

    gallery.appendChild(item);
}


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(
        ".section-heading, .gallery-item, .about-content, .info-card, .contact-item"
    );


const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    revealObserver.unobserve(
                        entry.target
                    );

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


/* =========================================
   BUTTON SMOOTH SCROLL
========================================= */

const exploreButton =
    document.querySelector(".explore-btn");


exploreButton.addEventListener("click", function (event) {

    event.preventDefault();

    const target =
        document.querySelector("#explore");

    target.scrollIntoView({
        behavior: "smooth"
    });

});
