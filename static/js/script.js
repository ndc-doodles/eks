document.addEventListener("DOMContentLoaded", function () {

  // ===========================
  // Mobile Menu Toggle
  // ===========================
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const overlay = document.getElementById("overlay");
  const closeMenu = document.getElementById("closeMenu");

  if (menuBtn) {
    menuBtn.addEventListener("click", () => {
      menuBtn.classList.toggle("open");
      mobileMenu.classList.toggle("translate-x-full");
      overlay.classList.toggle("hidden");
    });
  }

  if (overlay) {
    overlay.addEventListener("click", () => {
      mobileMenu.classList.add("translate-x-full");
      overlay.classList.add("hidden");
      menuBtn.classList.remove("open");
    });
  }

  if (closeMenu) {
    closeMenu.addEventListener("click", () => {
      mobileMenu.classList.add("translate-x-full");
      overlay.classList.add("hidden");
      menuBtn.classList.remove("open");
    });
  }

  // ===========================
  // Smooth Scroll
  // ===========================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });




window.sendEnquiry = function () {
  const phoneNumber = "916282841789";
  const message = `Hello, I would like to enquire about your flour mill products. Kindly share more details.`;
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};




  // ===========================
  // Contact Form WhatsApp Enquiry
  // ===========================
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    // Reset on load
    window.addEventListener("load", () => contactForm.reset());

    contactForm.addEventListener("submit", function (e) {
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

      const whatsappNumber = "916282841789";
      window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, "_blank");

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

  if (packedTab) packedTab.addEventListener("click", () => { activeType = "packed"; filterProducts(); });
  if (looseTab) looseTab.addEventListener("click", () => { activeType = "loose"; filterProducts(); });

  filterProducts();

  // ===========================
  // Product Quantity Selection
  // ===========================
  document.querySelectorAll('.weight-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      const card = btn.closest('.product-card');

      // Remove highlight from other buttons in this card
      card.querySelectorAll('.weight-btn').forEach(b => b.classList.remove('bg-green-500', 'text-white'));

      // Highlight the clicked button
      btn.classList.add('bg-green-500', 'text-white');

      // Save the selected weight in the card dataset
      card.dataset.selectedWeight = btn.dataset.weight;
    });
  });

  // ===========================
  // Product Card WhatsApp Enquiry
  // ===========================
  window.sendWhatsappEnquiry = function (card) {
    const name = card.dataset.name;
    const category = card.dataset.category;
    const type = card.dataset.type;
    const price = card.dataset.price;

    // Get selected quantity if any
    const quantity = card.dataset.selectedWeight || 'N/A';

    const message = `Hello, I would like to enquire about this product.

Product: ${name}
Category: ${category}
Type: ${type}
Price: ${price}
Quantity: ${quantity}

Kindly share more details.`;

    const whatsappNumber = "916282841789";
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };
document.addEventListener("DOMContentLoaded", () => {
    const productCards = document.querySelectorAll(".product-card");

    productCards.forEach(card => {
        card.addEventListener("click", (e) => {
            if (window.innerWidth < 768) { // Tailwind 'sm' breakpoint
                card.classList.toggle("hover-active");
            }
        });
    });

    // Optional: remove hover-active if clicked outside
    document.addEventListener("click", (e) => {
        if (!e.target.closest(".product-card")) {
            document.querySelectorAll(".product-card.hover-active").forEach(card => {
                card.classList.remove("hover-active");
            });
        }
    });
});
});