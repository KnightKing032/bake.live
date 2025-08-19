document.addEventListener("DOMContentLoaded", () => {
  const searchBox = document.querySelector(".search-box");
  const searchInput = document.querySelector(".search-input");
  const searchBtn = document.querySelector(".search-btn");
  const cakes = document.querySelectorAll(".cake-card");
  const hero = document.querySelector(".hero");

  // Save each card's original display style
  cakes.forEach(card => {
    card.dataset.originalDisplay = getComputedStyle(card).display;
  });

  function filterCakes() {
    const term = searchInput.value.toLowerCase().trim();

    cakes.forEach(card => {
      const title = card.querySelector(".cake-title").textContent.toLowerCase();
      const desc = card.querySelector(".cake-desc").textContent.toLowerCase();
      const match = title.includes(term) || desc.includes(term);
      card.style.display = match ? card.dataset.originalDisplay : "none";
    });

    if (term.length > 0) {
      hero.classList.add("hidden");
    } else {
      hero.classList.remove("hidden");
    }
  }

  // Desktop: live filter while typing
  searchInput.addEventListener("input", filterCakes);

  // Mobile & Desktop: handle button click
  searchBtn.addEventListener("click", () => {
    if (window.innerWidth <= 600) {
      searchBox.classList.toggle("active");
      searchInput.style.display = searchBox.classList.contains("active") ? "block" : "none";
      if (searchBox.classList.contains("active")) {
        searchInput.focus();
      } else {
        searchInput.value = ""; // optional: clear input when collapsing
        filterCakes(); // reset filter when hiding
      }
    } else {
      filterCakes(); // desktop click also triggers filter
    }
  });

  // Footer auto year
  const footerBottom = document.querySelector(".footer-bottom");
  const year = new Date().getFullYear();
  footerBottom.innerHTML = `&copy; ${year} BakeLive. All rights reserved.`;

  // Social icon hover effects
  const socialIcons = document.querySelectorAll(".social-icons a");
  socialIcons.forEach(icon => {
    icon.addEventListener("mouseenter", () => {
      icon.style.transform = "scale(1.2)";
      icon.style.transition = "transform 0.2s";
    });
    icon.addEventListener("mouseleave", () => {
      icon.style.transform = "scale(1)";
    });
  });

  // ✅ Scroll animations
  const animatedElements = document.querySelectorAll('.fade-up, .zoom-in');

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        obs.unobserve(entry.target); // animate once
      }
    });
  }, { threshold: 0.2 });

  animatedElements.forEach(el => observer.observe(el));
});


// filter.js
document.addEventListener('DOMContentLoaded', () => {
  // Select all filter buttons and cake cards
  const filterButtons = document.querySelectorAll('.cake-filter button');
  const cakeCards = document.querySelectorAll('.cake-card');

  // Loop through each button
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove 'active' class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      // Add 'active' class to clicked button
      button.classList.add('active');

      const filter = button.getAttribute('data-filter');

      // Show/hide cake cards based on filter
      cakeCards.forEach(card => {
        if (filter === 'all') {
          card.style.display = 'block';
        } else {
          card.style.display = card.classList.contains(filter) ? 'block' : 'none';
        }
      });
    });
  });
});

// Modal elements
const modal = document.getElementById('cake-modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalPrice = document.getElementById('modal-price');
const modalBuy = document.getElementById('modal-buy');
const closeBtn = document.querySelector('.modal .close');

// Select all cake cards
const cakeCards = document.querySelectorAll('.cake-card');

cakeCards.forEach(card => {
  card.addEventListener('click', () => {
    const imgSrc = card.querySelector('.cake-img').src;
    const title = card.querySelector('.cake-title').textContent;
    const desc = card.querySelector('.cake-desc').textContent;
    const price = card.querySelector('.cake-price').textContent;

    // Fill modal with cake data
    modalImg.src = imgSrc;
    modalTitle.textContent = title;
    modalDesc.textContent = desc;
    modalPrice.textContent = price;

    // Optional: WhatsApp order link
    modalBuy.href = `https://wa.me/919876543210?text=Hi, I want to order the ${title}`;

    // Show modal
    modal.style.display = 'block';
  });
});

// Close modal on X button
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close modal on outside click
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
