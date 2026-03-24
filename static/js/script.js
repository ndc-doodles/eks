document.addEventListener("DOMContentLoaded", function () {

  // ===========================
  // Mobile Menu Toggle
  // ===========================
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const overlay = document.getElementById("overlay");
  const closeMenu = document.getElementById("closeMenu");

  if (menuBtn && mobileMenu && overlay) {
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
      menuBtn?.classList.remove("open");
    });
  }

  if (closeMenu) {
    closeMenu.addEventListener("click", () => {
      mobileMenu.classList.add("translate-x-full");
      overlay.classList.add("hidden");
      menuBtn?.classList.remove("open");
    });
  }

  // ===========================
  // Smooth Scroll
  // ===========================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // ===========================
  // Generic WhatsApp Enquiry
  // ===========================
  window.sendEnquiry = function () {
    const phoneNumber = "918606313325";
    const message = `Hello, I would like to enquire about your flour mill products. Kindly share more details.`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  // ===========================
  // Contact Form WhatsApp
  // ===========================
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {

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

      window.open(
        `https://wa.me/918606313325?text=${encodeURIComponent(whatsappMessage)}`,
        "_blank"
      );

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

  // Preload images
  const preloaded = images.map(src => {
    const img = new Image();
    img.src = src;
    return img;
  });

  let index = 0;

  setInterval(() => {
    // Fade out
    heroImage.classList.remove("opacity-100");
    heroImage.classList.add("opacity-0");

    setTimeout(() => {
      // Move to next image
      index = (index + 1) % images.length;

      // Only set src if preloaded successfully
      if (preloaded[index].complete) {
        heroImage.src = images[index];
      }

      // Fade in
      heroImage.classList.remove("opacity-0");
      heroImage.classList.add("opacity-100");
    }, 400);
  }, 3000);
}
  // ===========================
  // Tabs
  // ===========================
  document.querySelectorAll(".tab-btn").forEach(tab => {

    tab.addEventListener("click", () => {

      document.querySelectorAll(".tab-btn").forEach(btn => {
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

      const category = product.dataset.category?.toLowerCase();
      const type = product.dataset.type?.toLowerCase();

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

  packedTab?.addEventListener("click", () => {
    activeType = "packed";
    filterProducts();
  });

  looseTab?.addEventListener("click", () => {
    activeType = "loose";
    filterProducts();
  });

  filterProducts();

  // ===========================
  // Product Weight Selection
  // ===========================
  document.querySelectorAll('.product-card').forEach(card => {

    const buttons = card.querySelectorAll('.weight-btn');

    buttons.forEach(btn => {

      btn.addEventListener('click', function (e) {

        e.stopPropagation();

        buttons.forEach(b => b.classList.remove('bg-green-500', 'text-white'));

        btn.classList.add('bg-green-500', 'text-white');

        card.dataset.selectedWeight = btn.dataset.weight || btn.innerText;

      });

    });

  });

  // ===========================
  // WhatsApp Product Enquiry
  // ===========================
  window.sendWhatsappEnquiry = function (card) {

    const name = card.dataset.name;
    const category = card.dataset.category;
    const type = card.dataset.type;
    const price = card.dataset.price;
    const quantity = card.dataset.selectedWeight || "Not selected";

    const message = `Hello, I would like to enquire about this product.

Product: ${name}
Category: ${category}

Price: ${price}


Kindly share more details.`;

    window.open(
      `https://wa.me/918606313325?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  // ===========================
  // Mobile Product Card Toggle
  // ===========================
  if (window.innerWidth < 768) {

    document.querySelectorAll('#productContainerMobile .product-card').forEach(card => {

      card.addEventListener('click', () => {

        const overlay = card.querySelector('.overlay-content');

        if (overlay) {
          overlay.classList.toggle('opacity-100');
        }

      });

    });

  }
  // Mobile card toggle
document.querySelectorAll('#productContainerMobile .product-card').forEach(card => {
  card.addEventListener('click', (e) => {

    // prevent toggle when clicking button or weight
    if (e.target.closest('button')) return;

    const overlay = card.querySelector('.absolute.inset-0');

    // close other cards
    document.querySelectorAll('#productContainerMobile .product-card .absolute.inset-0')
      .forEach(o => {
        if (o !== overlay) o.classList.remove('opacity-100');
      });

    overlay.classList.toggle('opacity-100');
  });
});


// Close card when clicking outside
document.addEventListener('click', function (e) {

  const card = e.target.closest('.product-card');

  if (!card) {
    document.querySelectorAll('#productContainerMobile .product-card .absolute.inset-0')
      .forEach(overlay => {
        overlay.classList.remove('opacity-100');
      });
  }

});



});