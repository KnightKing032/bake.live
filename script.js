// Search + Hero Hide (with smooth fade)
document.addEventListener("DOMContentLoaded", () => {
  const searchBox = document.querySelector(".search-box");
  const searchInput = document.querySelector(".search-input");
  const searchBtn = document.querySelector(".search-btn");
  const cakes = document.querySelectorAll(".cake-card");
  const hero = document.querySelector(".hero");

  // ✅ Save each card's original display style
  cakes.forEach(card => {
    card.dataset.originalDisplay = getComputedStyle(card).display;
  });

  function filterCakes() {
    const term = searchInput.value.toLowerCase().trim();

    cakes.forEach(card => {
      const title = card.querySelector(".cake-title").textContent.toLowerCase();
      const desc = card.querySelector(".cake-desc").textContent.toLowerCase();
      const match = title.includes(term) || desc.includes(term);

      // ✅ Restore original style instead of forcing "flex"
      card.style.display = match ? card.dataset.originalDisplay : "none";
    });

    // 🎯 Hide hero with collapse
    if (term.length > 0) {
      hero.classList.add("hidden");
    } else {
      hero.classList.remove("hidden");
    }
  }

  // Desktop: filter live while typing
  searchInput.addEventListener("input", filterCakes);

  // Mobile: expand + filter on icon click
  searchBtn.addEventListener("click", () => {
    if (window.innerWidth <= 600) {
      searchBox.classList.toggle("active");
      if (searchBox.classList.contains("active")) {
        searchInput.style.display = "block";
        searchInput.focus();
      } else {
        searchInput.style.display = "none";
      }
    } else {
      filterCakes(); // desktop: run filter on button click too
    }
  });
});
