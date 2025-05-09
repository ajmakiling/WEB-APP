const recipes = [
    {
        title: "Gyudon (牛丼)",
        time: "30 mins",
        difficulty: "Beginner",
        description: "Savory beef and onion rice bowl.",
        image: "Pic/Gyudon.webp",
        link: "recipes/gyudon/gyudon.html",
      },
      {
        title: "Oyakodon (親子丼)",
        time: "25 mins",
        difficulty: "Begginer",
        description: "Chicken and egg simmered together over rice.",
        image: "Pic/oyakodon.jpg",
        link: "recipes/Oyakodon/oyakodon.html",
      },
      {
        title: "Katsudon (カツ丼)",
        time: "40 mins",
        difficulty: "Intermediate",
        description: "Crispy pork cutlet simmered with egg over rice.",
        image: "Pic/katsudon.jpg",
        link: "recipes/katsudon/katsudon.html",
      },
      {
        title: "Tendon (天丼)",
        time: "35 mins",
        difficulty: "Intermediate",
        description: "Tempura shrimp and vegetables over rice with sauce.",
        image: "Pic/tendon.jpg",
        link: "recipes/Tendon/Tendon.html",
      },
      {
          title: "Unadon (鰻丼)",
          time: "30 mins",
          difficulty: "Intermediate",
          description: "Grilled eel glazed with sweet soy sauce over rice.",
          image: "Pic/Unadon.jpg",
          link: "recipes/unadon/unadon.html",
        },
        {
          title: "Butadon (豚丼)",
          time: "30 mins",
          difficulty: "Beginner",
          description: "Sweet and savory pork slices over rice.",
          image: "Pic/Butadon.jpg",
          link: "recipes/Butadon/Butadon.html",
        }, 
        {
          title: "Tekka Don (鉄火丼) ",
          time: "20 mins",
          difficulty: "Beginner",
          description: "Fresh tuna sashimi over seasoned rice.",
          image: "Pic/Tekka-Don.jpg",
          link: "recipes/tekkadon/tekkadon.html",
        }, 
        {
          title: "Tekkadon Spicy (ピリ辛鉄火丼)",
          time: "25 mins",
          difficulty: "Beginner",
          description: "Spicy marinated tuna over rice.",
          image: "Pic/tekkadon spicy.webp",
          link: "recipes/tekkadonspicy/tekkadonspicy.html",
        }, 
        {
          title: "Negitoro Don (ネギトロ丼)",
          time: "20 mins",
          difficulty: "Beginner",
          description: "Minced fatty tuna with green onions over rice.",
          image: "Pic/Negitoro_Don.jpg",
          link: "recipes/Negitoro/Negitoro.html",
        }, 
        {
          title: "Karaage Don (唐揚げ丼)",
          time: "40 mins",
          difficulty: "Intermediate",
          description: "Crispy Japanese fried chicken over rice.",
          image: "Pic/karaage-don.jpg",
          link: "recipes/karaage/karaage.html",
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
