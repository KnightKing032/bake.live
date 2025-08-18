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
