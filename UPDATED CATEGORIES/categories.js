const recipes = [
    {
        img: "sushi_and_sashimi.jpg",
        title: "Sushi and Sashimi",
        description: "Discover traditioal sushi and sashimi recipes.",
        dishes: "15 dishes",
        link: "sushi_and_sashimi.html",
    },

    {
        img: "sushi_and_sashimi.jpg",
        title: "Ramen and Noodles",
        description: "Authentic ramen and noodle recipes.",
        dishes: "15 dishes",
        link: "#",
    },

    {
        img: "sushi_and_sashimi.jpg",
        title: "Tempura",
        description: "Light and crispy tempura techniques for vegetables and seafood .",
        dishes: "15 dishes",
        link: "#",
    },

    {
        img: "sushi_and_sashimi.jpg",
        title: "Donburi (Rice Bowls)",
        description: "Satisfying one-bowl meals with rice topped with various ingredients.",
        dishes: "15 dishes",
        link: "#",
    },

    {
        img: "sushi_and_sashimi.jpg",
        title: "Yakitoki",
        description: "Grilled skewers with arious marinade and dipping sauce.",
        dishes: "15 dishes",
        link: "#",
    },

    {
        img: "sushi_and_sashimi.jpg",
        title: "Deserts",
        description: "Sweet treats like mochi, doraki, and other Japanese confection.",
        dishes: "15 dishes",
        link: "#",
    },


]
 const container = document.getElementById("recipe-container");

 container.innerHTML = recipes.map(recipe => `
    <div class="card">
      <img src="${recipe.img}" alt="${recipe.title}">
      <div class="card-content">
        <h3>${recipe.title}</h3>
        <p>${recipe.description}</p>
        <span class="tag">${recipe.dishes}</span>
        <a href="${recipe.link}"><button>View Recipe</button></a>
      </div>
    </div>
`).join('');