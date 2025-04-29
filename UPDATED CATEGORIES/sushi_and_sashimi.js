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
   
    {
      title: "Chirashi Sushi Bowl",
      time: "45 mins",
      difficulty: "Intermediate",
      description: "A colorful bowl of sushi rice topped with assorted sashimi and vegetables.",
      image: "images/sushi_and_sashimi.jpg",
    },

    {
      title: "Spicy Tuna Roll",
      time: "40 mins",
      difficulty: "Intermediate",
      description: "A popular sushi roll featuring minced tuna mixed with spicy sauce",
      image: "images/sushi_and_sashimi.jpg",
    },  

    {
      title: "Unagi Nigiri",
      time: "30 mins",
      difficulty: "Intermediate",
      description: "Grilled freshwater eel glazed with sweet sauce over seasoned rice.",
      image: "images/sushi_and_sashimi.jpg",
    },

    {
      title: "Rainbow Roll",
      time: "60 mins",
      difficulty: "Advanced",
      description: "California roll topped with various type of fish and avocado.",
      image: "images/sushi_and_sashimi.jpg",
    },

    {
      title: "Inari Sushi",
      time: "35 mins",
      difficulty: "Beginner",
      description: "Sweet fried tofu pouches filled with seasoned sushi rice - a vegertarian favorite.",
      image: "images/sushi_and_sashimi.jpg",
    },

    {
      title: "Tekka Maki",
      time: "15 mins",
      difficulty: "Intermediate",
      description: "Traditional thin sushi roll with premium tuna - a classic Japanese favorite.",
      image: "images/sushi_and_sashimi.jpg",
    },

    {
      title: "Kappa Maki",
      time: "15 mins",
      difficulty: "Beginner",
      description: "Simple cucumber roll named after the water spirit kappa - a refreshing choice.",
      image: "images/sushi_and_sashimi.jpg",
    },

    {
      title: "Ika Nigiri",
      time: "25 mins",
      difficulty: "Advanced",
      description: "Fresh squid nigiri with a light citrus and salt seasoning.",
      image: "images/sushi_and_sashimi.jpg",
    },

    {
      title: "Tamago Nigiri",
      time: "50 mins",
      difficulty: "Intermediate",
      description: "Sweet Japanese omelet served over sushi rice.",
      image: "images/sushi_and_sashimi.jpg",
    },

    {
      title: "Volcano Roll",
      time: "65 mins",
      difficulty: "Advanced",
      description: "Baked spicy scallop and crab mix over California roll.",
      image: "images/sushi_and_sashimi.jpg",
    },

    {
      title: "Tiger Roll",
      time: "55 mins",
      difficulty: "Advanced",
      description: "Shrimp tempura roll topped with spucy tuna and tempura flakes.",
      image: "images/sushi_and_sashimi.jpg",
    },

    {
      title: "Salmon Sashimi Platter",
      time: "20 mins",
      difficulty: "Intermediate",
      description: "Premium salmon sashimi with traditional garnishes.",
      image: "images/sushi_and_sashimi.jpg",
    },

    {
      title: "Hamachi Sashimi",
      time: "15 mins",
      difficulty: "Intermediate",
      description: "Fresh yellowtail sashimi with ponzu sauce.",
      image: "images/sushi_and_sashimi.jpg",
    },

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