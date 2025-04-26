const recipes = [
    {
      title: "Classic Salmon Nigiri",
      time: "45 mins",
      difficulty: "Intermediate",
      description: "Traditional Japanese nigiri sushi with fresh salmon slices over seasoned rice.",
      image: "images/sushi_and_sashimi.jpg",
    },
    {
      title: "California Roll",
      time: "45 mins",
      difficulty: "Intermediate",
      description: "An inside-out roll with crab, avocado, and cucumber.",
      image: "images/sushi_and_sashimi.jpg",
    },
    {
      title: "Tuna Sashimi Platter",
      time: "45 mins",
      difficulty: "Intermediate",
      description: "Thinly sliced raw tuna served with traditional garnishes and dipping sauces.",
      image: "images/sushi_and_sashimi.jpg",
    },
    {
      title: "Dragon Roll",
      time: "45 mins",
      difficulty: "Intermediate",
      description: "An elaborate sushi roll topped with avocado to resemble dragon scales.",
      image: "images/sushi_and_sashimi.jpg",
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