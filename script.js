// Search + Hero Hide
document.addEventListener("DOMContentLoaded", () => {
  const searchBox = document.querySelector(".search-box");
  const searchInput = document.querySelector(".search-input");
  const searchBtn = document.querySelector(".search-btn");
  const cakes = document.querySelectorAll(".cake-card");
  const hero = document.querySelector(".hero");

  function filterCakes() {
    const term = searchInput.value.toLowerCase().trim();

    cakes.forEach(card => {
      const title = card.querySelector(".cake-title").textContent.toLowerCase();
      const desc = card.querySelector(".cake-desc").textContent.toLowerCase();
      const match = title.includes(term) || desc.includes(term);

      card.style.display = match ? "" : "none"; // ✅ fix: no more expansion
    });

    // 🎯 Hide hero if searching
    if (term.length > 0) {
      hero.style.display = "none";
    } else {
      hero.style.display = ""; // ✅ reset to original CSS (instead of forcing flex)
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
