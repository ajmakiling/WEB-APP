const recipes = [
  {
    title: "Shrimp Tempura (海老天ぷら)",
    time: "30 mins",
    difficulty: "Intermediate",
    description: "Classic crispy battered shrimp.",
    image: "Pic/shrimp_tempura.webp",
    link: "recipes/shrimptempura/shrimptempura.html",
  },
  {
    title: "Vegetable Tempura (野菜天ぷら)",
    time: "35 mins",
    difficulty: "Beginner",
    description: "Crispy, colorful vegetables in light batter.",
    image: "Pic/vegetable.png",
    link: "recipes/vegetable/vegetable.html",
  },
  {
    title: "Kakiage (かき揚げ)",
    time: "40 mins",
    difficulty: "Intermediate",
    description: "Mixed vegetable and seafood tempura fritters.",
    image: "Pic/Kakiage.jpg",
    link: "recipes/kakiage/kakiage.html",
  },
  {
    title: "Chicken Tempura (鶏天ぷら)",
    time: "35 mins",
    difficulty: "Intermediate",
    description: "Tender chicken in a crispy coating.",
    image: "Pic/chicken-tempura.jpg",
    link: "recipes/chicken/chicken.html",
  },
  {
    title: "Lotus Root Tempura (蓮根天ぷら)",
    time: "30 mins",
    difficulty: "Beginner",
    description: "Crunchy and earthy lotus root slices fried to perfection.",
    image: "Pic/lotus-root-tempura.jpg",
    link: "recipes/lotus/lotus.html",
  },
  {
    title: "Mushroom Tempura (きのこ天ぷら)",
    time: "25 mins",
    difficulty: "Beginner",
    description: "Light, crispy mushrooms that burst with flavor.",
    image: "Pic/Mushroom-tempura.jpg",
    link: "recipes/mushroom/mushroom.html",

  },
  {
    title: "Fish Tempura (白身魚天ぷら)",
    time: "30 mins",
    difficulty: "Intermediate",
    description: "Flaky white fish in a delicate crispy coat.",
    image: "Pic/Fish-Tempura.jpeg",
    link: "recipes/fish/fish.html",
  },
  {
    title: "Pumpkin Tempura (かぼちゃ天ぷら)",
    time: "30 mins",
    difficulty: "Beginner",
    description: "Sweet pumpkin slices in crispy tempura batter.",
    image: "Pic/pumpkin tempura.webp",
    link: "recipes/pumpkin/pumpkin.html",
  },
];
//GOBACK
function goBack() {
  if (document.referrer) {
      history.back();
} else {
  window.location.href = "/Categories/categories.html";
}
} 
const container = document.getElementById("recipe-container");

// Clear existing content
container.innerHTML = "";

// Load favorites from localStorage
let favoriteRecipes = JSON.parse(localStorage.getItem("favorites")) || [];

recipes.forEach((recipe) => {
  const card = document.createElement("div");
  card.classList.add("card");

  // Heart icon
  const favIcon = document.createElement("i");
  favIcon.classList.add("fas", "fa-heart", "favorite-icon");

  // Check if it's already a favorite
  const isFavorite = favoriteRecipes.some((fav) => fav.title === recipe.title);
  if (isFavorite) favIcon.classList.add("active");

  favIcon.addEventListener("click", () => {
    favIcon.classList.toggle("active");

    const index = favoriteRecipes.findIndex((fav) => fav.title === recipe.title);
    if (index === -1) {
      favoriteRecipes.push(recipe);
    } else {
      favoriteRecipes.splice(index, 1);
    }

    // After updating the favoriteRecipes array:
localStorage.setItem("favorites", JSON.stringify(favoriteRecipes));


    console.log("Favorites updated:", favoriteRecipes);
  });

  // Recipe content
  const contentHTML = `
    <img src="${recipe.image}" alt="${recipe.title}" />
    <div class="card-content">
      <h3>${recipe.title}</h3>
      <div class="meta-info">
        <p><i class="fas fa-clock"></i>${recipe.time}</p>
        <p><i class="fas fa-signal"></i>${recipe.difficulty}</p>
      </div>
      <p>${recipe.description}</p>
      <a href="${recipe.link}"><button>View Recipe</button></a>
    </div>
  `;

  card.innerHTML = contentHTML;
  card.appendChild(favIcon);
  container.appendChild(card);
});
