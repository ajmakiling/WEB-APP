const recipes = [
    {
      title: "Shrimp Tempura (海老天ぷら)",
      time: "30 mins",
      difficulty: "Intermediate",
      description: "Classic crispy battered shrimp.",
      image: "Pic/shrimp_tempura.webp",
    },
    {
      title: "Vegetable Tempura (野菜天ぷら)",
      time: "35 mins",
      difficulty: "Begginer",
      description: "Crispy, colorful vegetables in light batter.",
      image: "Pic/vegetable.png",
    },
    {
      title: "Kakiage (かき揚げ)",
      time: "40 mins",
      difficulty: "Intermediate",
      description: "Mixed vegetable and seafood tempura fritters.",
      image: "Pic/Kakiage.jpg",
    },
    {
      title: "Chicken Tempura (鶏天ぷら)",
      time: "35 mins",
      difficulty: "Intermediate",
      description: "Tender chicken in a crispy coating.",
      image: "Pic/chicken-tempura.jpg",
    },
    {
        title: "Lotus Root Tempura (蓮根天ぷら) ",
        time: "30 mins",
        difficulty: "Beginner",
        description: "Crunchy and earthy lotus root slices fried to perfection.",
        image: "Pic/lotus-root-tempura.jpg",
      },
      {
        title: "Mushroom Tempura (きのこ天ぷら)",
        time: "25 mins",
        difficulty: "Beginner",
        description: "Light, crispy mushrooms that burst with flavor.",
        image: "Pic/Mushroom-tempura.jpg",
      }, 
      {
        title: "Fish Tempura (白身魚天ぷら) ",
        time: "30 mins",
        difficulty: "Intermediate",
        description: "Flaky white fish in a delicate crispy coat.",
        image: "Pic/Fish-Tempura.jpeg",
      }, 
      {
        title: "Pumpkin Tempura (かぼちゃ天ぷら) ",
        time: "30 mins",
        difficulty: "Beginner",
        description: "Sweet pumpkin slices in crispy tempura batter.",
        image: "Pic/pumpkin tempura.webp",
      }, 
    // Add more recipes here...
  ];
  
  const container = document.getElementById("recipe-container");
  
  recipes.forEach((recipe) => {
    const card = document.createElement("div");
    card.classList.add("card");
  
    card.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.title}" />
      <div class="card-content">
        <h3>${recipe.title}</h3>
        <div class="meta-info">
          <p> <i class="fas fa-clock"></i>${recipe.time}</p>
          <p> <i class="fas fa-signal"></i>${recipe.difficulty}</p>
        </div>
        <p>${recipe.description}</p>
        <button>View Recipe</button>
      </div>
    `;
  
    container.appendChild(card);
  });