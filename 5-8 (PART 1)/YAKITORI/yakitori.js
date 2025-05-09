const recipes = [
    {
        title: "Negima Yakitori (ねぎま焼き鳥)",
        time: "30 mins",
        difficulty: "Beginner",
        description: "Juicy chicken thigh with green onion skewers.",
        image: "Pic/negima.png",
      },
      {
        title: "Tsukune (つくね焼き鳥)",
        time: "40 mins",
        difficulty: "Intermediate",
        description: "Japanese chicken meatball skewers with sweet soy glaze.",
        image: "Pic/tsukune.png",
      },
      {
        title: "Tebasaki Yakitori (手羽先焼き鳥)",
        time: "35 mins",
        difficulty: "Intermediate",
        description: "Grilled chicken wings with crispy skin and caramelized glaze.",
        image: "Pic/tebasaki.png",
      },
      {
        title: "Reba Yakitori (レバー焼き鳥)",
        time: "30 mins",
        difficulty: "Intermediate",
        description: "Tender chicken liver skewers with sweet soy glaze.",
        image: "Pic/reba.png",
      },
      {
          title: "Momo Yakitori (もも焼き鳥)",
          time: "30 mins",
          difficulty: "Beginner",
          description: "Classic skewered chicken thigh with tare or salt.",
          image: "Pic/momo.png",
        },
        {
          title: "Shishito Yakitori (ししとう焼き鳥)",
          time: "20 mins",
          difficulty: "Beginner",
          description: "Grilled Japanese shishito peppers on skewers.",
          image: "Pic/shishito.png",
        }, 
      
    // Add more recipes here...
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
