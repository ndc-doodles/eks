document.addEventListener("DOMContentLoaded", function () {

  // ===========================
  // Mobile Menu Toggle
  // ===========================

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const overlay = document.getElementById("overlay");
const closeMenu = document.getElementById("closeMenu");

if(menuBtn){

  menuBtn.addEventListener("click", () => {
      menuBtn.classList.toggle("open");
      mobileMenu.classList.toggle("translate-x-full");
      overlay.classList.toggle("hidden");
  });

}

if(overlay){
  overlay.addEventListener("click", () => {
      mobileMenu.classList.add("translate-x-full");
      overlay.classList.add("hidden");
      menuBtn.classList.remove("open");
  });
}

if(closeMenu){
  closeMenu.addEventListener("click", () => {
      mobileMenu.classList.add("translate-x-full");
      overlay.classList.add("hidden");
      menuBtn.classList.remove("open");
  });
}


window.sendEnquiry = function () {

  const phoneNumber = "919876543210";

  const message = `Hello, I would like to enquire about your flour mill products. Kindly share more details.`;

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");

};

const contactForm = document.getElementById("contactForm");

// ✅ Reset form on page load
if (contactForm) {
  window.addEventListener("load", () => {
    contactForm.reset();
  });

  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    const whatsappMessage = `Hello, I received a new enquiry from the website.

Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}`;

    const whatsappNumber = "919876543210";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(url, "_blank");

    // ✅ Clear the form after clicking submit
    contactForm.reset();
  });
}
  // ===========================
  // Hero Image Slider
  // ===========================

  const heroImage = document.getElementById("heroImage");

  if (heroImage) {

    const images = [
      "./static/images/hero_sub1.png",
      "./static/images/hero_sub2.png",
      "./static/images/hero_sub3.png"
    ];

    let index = 0;

    setInterval(() => {

      heroImage.classList.remove("opacity-100");
      heroImage.classList.add("opacity-0");

      setTimeout(() => {

        index = (index + 1) % images.length;
        heroImage.src = images[index];

        heroImage.classList.remove("opacity-0");
        heroImage.classList.add("opacity-100");

      }, 400);

    }, 3000);

  }


  // ===========================
  // Tabs
  // ===========================

  const tabs = document.querySelectorAll(".tab-btn");

  if (tabs.length > 0) {

    tabs.forEach(tab => {

      tab.addEventListener("click", () => {

        tabs.forEach(btn => {
          btn.classList.remove("bg-[#7E4404]", "text-white");
          btn.classList.add("text-black");
        });

        tab.classList.add("bg-[#7E4404]", "text-white");
        tab.classList.remove("text-black");

      });

    });

  }


  // ===========================
  // Product Filter
  // ===========================

  let activeCategory = "all";
  let activeType = "all";

  const products = document.querySelectorAll(".product-card");

  function filterProducts() {

    products.forEach(product => {

      const category = product.dataset.category.toLowerCase();
      const type = product.dataset.type.toLowerCase();

      const categoryMatch = activeCategory === "all" || category === activeCategory;
      const typeMatch = activeType === "all" || type === activeType;

      product.style.display = (categoryMatch && typeMatch) ? "block" : "none";

    });

  }

  document.querySelectorAll(".category-item").forEach(category => {

    category.addEventListener("click", function () {

      activeCategory = this.dataset.category.toLowerCase();
      filterProducts();

    });

  });

  const packedTab = document.getElementById("packedTab");
  const looseTab = document.getElementById("looseTab");

  if (packedTab) {
    packedTab.addEventListener("click", () => {
      activeType = "packed";
      filterProducts();
    });
  }

  if (looseTab) {
    looseTab.addEventListener("click", () => {
      activeType = "loose";
      filterProducts();
    });
  }

  if (products.length > 0) {
    filterProducts();
  }


  // ===========================
  // WhatsApp Enquiry
  // ===========================

  window.sendWhatsappEnquiry = function(card) {

    const name = card.dataset.name;
    const category = card.dataset.category;
    const type = card.dataset.type;
    const price = card.dataset.price;

    const message = `Hello, I would like to enquire about this product.

Product: ${name}
Category: ${category}
Price: ${price}

Kindly share more details.`;

    const whatsappNumber = "916282841789";

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank");

  };

});