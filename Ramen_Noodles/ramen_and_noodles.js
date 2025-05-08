const recipes = [
    {
      title: "Shoyu Ramen",
      time: "45 mins",
      difficulty: "Intermediate",
      description: "Soy sauce-based broth with noodles, sliced pork, and vegetables.",
      image: "images/sushi_and_sashimi.jpg",
    },
    {
      title: "Tonkotsu Ramen",
      time: "45 mins",
      difficulty: "Intermediate",
      description: "Rich, creamy pork bone broth ramen, often topped with chashu and soft-boiled egg.",
      image: "images/sushi_and_sashimi.jpg",
    },
    {
      title: "Miso Ramen",
      time: "45 mins",
      difficulty: "Intermediate",
      description: "Savory miso-based soup with noodles, often topped with corn, butter, and bean sprouts.",
      image: "images/sushi_and_sashimi.jpg",
    },
    {
      title: "Shio Ramen",
      time: "45 mins",
      difficulty: "Intermediate",
      description: "Light, salty broth ramen, typically clear and delicate in flavor.",
      image: "images/sushi_and_sashimi.jpg",
    },
   
    {
      title: "Tsukemen",
      time: "45 mins",
      difficulty: "Intermediate",
      description: "Dipping noodles served with a separate, concentrated soup for dipping.",
      image: "images/sushi_and_sashimi.jpg",
    },

    {
      title: "Hiyashi Chuka",
      time: "40 mins",
      difficulty: "Intermediate",
      description: "Cold ramen noodles with colorful toppings like cucumber, ham, and egg.",
      image: "images/sushi_and_sashimi.jpg",
    },  

    {
      title: "Tan Tan Men",
      time: "30 mins",
      difficulty: "Intermediate",
      description: "Japanese take on Sichuan Dan Dan noodles, spicy sesame broth with minced meat.",
      image: "images/sushi_and_sashimi.jpg",
    },

    {
      title: " Yakisoba",
      time: "60 mins",
      difficulty: "Advanced",
      description: "Stir-fried wheat noodles with pork and vegetables, flavored with a tangy sauce.",
      image: "images/sushi_and_sashimi.jpg",
    },

    {
      title: "Udon",
      time: "35 mins",
      difficulty: "Beginner",
      description: "Thick wheat noodles served in a mild broth, often with tempura or kitsune (fried tofu).",
      image: "images/sushi_and_sashimi.jpg",
    },

    {
      title: "Zaru Soba",
      time: "15 mins",
      difficulty: "Intermediate",
      description: "Cold buckwheat noodles served with dipping sauce, perfect for summer.",
      image: "images/sushi_and_sashimi.jpg",
    },

    {
      title: "Nabeyaki Udon",
      time: "15 mins",
      difficulty: "Beginner",
      description: "Udon served in a hot pot with egg, vegetables, and tempura.",
      image: "images/sushi_and_sashimi.jpg",
    },

    {
      title: "Kitsune Udon",
      time: "25 mins",
      difficulty: "Advanced",
      description: "Udon in a light broth topped with sweetened aburaage (fried tofu)",
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

  //GOBACK
  function goBack() {
    if (document.referrer) {
        history.back();
  } else {
    window.location.href = "/categories.html";
  }
}