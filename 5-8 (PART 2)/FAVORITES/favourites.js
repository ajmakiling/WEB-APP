// Get the container to display favorites
const favoritesContainer = document.getElementById("favorites-container");

// Load the favorite recipes from localStorage
let favoriteRecipes = JSON.parse(localStorage.getItem("favorites")) || [];

if (favoriteRecipes.length === 0) {
  favoritesContainer.innerHTML = "<p>No favorite recipes added yet!</p>";
} else {
  favoriteRecipes.forEach((recipe) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const contentHTML = `
      <img src="${recipe.image}" alt="${recipe.title}" />
      <div class="card-content">
        <h3>${recipe.title}</h3>
        <div class="meta-info">
          <p><i class="fas fa-clock"></i>${recipe.time}</p>
          <p><i class="fas fa-signal"></i>${recipe.difficulty}</p>
        </div>
        <p>${recipe.description}</p>
        <button onclick="window.location.href='recipe.html?title=${encodeURIComponent(recipe.title)}'">View Recipe</button>
      </div>
    `;

    card.innerHTML = contentHTML;
    favoritesContainer.appendChild(card);
  });
}
