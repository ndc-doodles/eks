

document.addEventListener("DOMContentLoaded", function () {

    const images = [
        "./static/images/hero_sub1.png",
        "./static/images/hero_sub2.png",
        "./static/images/hero_sub3.png"
    ];

    let index = 0;
    const heroImage = document.getElementById("heroImage");

    setInterval(() => {

        // Fade out
        heroImage.classList.remove("opacity-100");
        heroImage.classList.add("opacity-0");

        setTimeout(() => {

            index = (index + 1) % images.length;
            heroImage.src = images[index];

            // Fade in
            heroImage.classList.remove("opacity-0");
            heroImage.classList.add("opacity-100");

        }, 400);

    }, 3000);

});









const tabs = document.querySelectorAll(".tab-btn");
const container = document.getElementById("productContainer");

tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        tabs.forEach(btn => btn.classList.remove("active-tab"));
        tab.classList.add("active-tab");

        const type = tab.dataset.tab;

        if (type === "packed") {
            container.innerHTML = packedProducts;
        }

        if (type === "loose") {
            container.innerHTML = looseProducts;
        }

    });

});

