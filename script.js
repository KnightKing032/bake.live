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

  // Mobile: also filter live when typing after expanding
  searchInput.addEventListener("input", filterCakes);
});
