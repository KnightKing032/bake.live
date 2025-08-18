// Search function
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector(".search-input");
  const searchBtn = document.querySelector(".search-btn");
  const cards = document.querySelectorAll(".cake-card");

  function filterCakes() {
    const query = searchInput.value.toLowerCase().trim();

    cards.forEach(card => {
      const title = card.querySelector(".cake-title").textContent.toLowerCase();
      const desc = card.querySelector(".cake-desc").textContent.toLowerCase();

      if (title.includes(query) || desc.includes(query)) {
        card.style.display = "block";  // show
      } else {
        card.style.display = "none";   // hide
      }
    });
  }

  // Desktop: filter as you type
  searchInput.addEventListener("input", filterCakes);

  // Mobile: filter when icon clicked
  searchBtn.addEventListener("click", filterCakes);
});
document.addEventListener("DOMContentLoaded", () => {
  const searchBox = document.querySelector(".search-box");
  const searchInput = document.querySelector(".search-input");
  const searchBtn = document.querySelector(".search-btn");
  const cakes = document.querySelectorAll(".cake-card");

  // 🔍 Desktop: filter while typing
  searchInput.addEventListener("input", () => {
    const term = searchInput.value.toLowerCase();
    cakes.forEach(card => {
      const title = card.querySelector(".cake-title").textContent.toLowerCase();
      const desc = card.querySelector(".cake-desc").textContent.toLowerCase();
      card.style.display = (title.includes(term) || desc.includes(term)) ? "block" : "none";
    });
  });

  // 📱 Mobile: toggle expand on search icon click
  searchBtn.addEventListener("click", () => {
    if (window.innerWidth <= 600) {
      searchBox.classList.toggle("active");
      if (searchBox.classList.contains("active")) {
        searchInput.style.display = "block";
        searchInput.focus();
      } else {
        searchInput.style.display = "none";
      }
    }
  });
});
