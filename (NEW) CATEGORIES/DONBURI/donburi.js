const recipes = [
    {
        title: "Gyudon (牛丼)",
        time: "30 mins",
        difficulty: "Beginner",
        description: "Savory beef and onion rice bowl.",
        image: "Pic/Gyudon.webp",
      },
      {
        title: "Oyakodon (親子丼)",
        time: "25 mins",
        difficulty: "Begginer",
        description: "Chicken and egg simmered together over rice.",
        image: "Pic/oyakodon.jpg",
      },
      {
        title: "Katsudon (カツ丼)",
        time: "40 mins",
        difficulty: "Intermediate",
        description: "Crispy pork cutlet simmered with egg over rice.",
        image: "Pic/katsudon.jpg",
      },
      {
        title: "Tendon (天丼)",
        time: "35 mins",
        difficulty: "Intermediate",
        description: "Tempura shrimp and vegetables over rice with sauce.",
        image: "Pic/tendon.jpg",
      },
      {
          title: "Unadon (鰻丼)",
          time: "30 mins",
          difficulty: "Intermediate",
          description: "Grilled eel glazed with sweet soy sauce over rice.",
          image: "Pic/Unadon.jpg",
        },
        {
          title: "Butadon (豚丼)",
          time: "30 mins",
          difficulty: "Beginner",
          description: "Sweet and savory pork slices over rice.",
          image: "Pic/Butadon.jpg",
        }, 
        {
          title: "Tekka Don (鉄火丼) ",
          time: "20 mins",
          difficulty: "Beginner",
          description: "Fresh tuna sashimi over seasoned rice.",
          image: "Pic/Tekka-Don.jpg",
        }, 
        {
          title: "Tekkadon Spicy (ピリ辛鉄火丼)",
          time: "25 mins",
          difficulty: "Beginner",
          description: "Spicy marinated tuna over rice.",
          image: "Pic/tekkadon spicy.webp",
        }, 
        {
          title: "Negitoro Don (ネギトロ丼)",
          time: "20 mins",
          difficulty: "Beginner",
          description: "Minced fatty tuna with green onions over rice.",
          image: "Pic/Negitoro_Don.jpg",
        }, 
        {
          title: "Karaage Don (唐揚げ丼)",
          time: "40 mins",
          difficulty: "Intermediate",
          description: "Crispy Japanese fried chicken over rice.",
          image: "Pic/karaage-don.jpg",
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