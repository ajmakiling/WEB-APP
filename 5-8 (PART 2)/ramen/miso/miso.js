// RAMEN AND NOODLES CATEGORY
const ingredients = [  
    {
        img: "/Images/miso-ramen.png", // Update with actual image path
        title: "Miso Ramen",
        description: "Savory ramen with miso-based broth, often topped with buttered corn and bean sprouts.",
        difficulty: "Intermediate",
        time: "45 mins",
        servings: 2,
        prepTime: "20 mins",
        cookTime: "25 mins",
        ingredients: [
            "2 tbsp miso paste",
            "4 cups chicken broth",
            "2 packs ramen noodles",
            "1 tbsp soy sauce",
            "1 tbsp sesame oil",
            "Corn kernels",
            "Bean sprouts",
            "Green onions"
        ],
        instruction: [
            "Heat sesame oil, stir-fry miso paste briefly.",
            "Add chicken broth and soy sauce, simmer.",
            "Cook ramen noodles separately.",
            "Pour broth into bowls with noodles.",
            "Top with corn, sprouts, and green onions."
        ],
        tips: "Use red miso for deeper flavor or white miso for lighter taste."
    }
];
//GOBACK
function goBack() {
    if (document.referrer) {
        history.back();
  } else {
    window.location.href = "";
  }
} 
const content = document.getElementById("content");
// Access the first recipe in the ingredients array
const recipe = ingredients[0];
// Dynamically generate the content
content.innerHTML = `
    <div class="container">
        <img class="recipe-img" src="${recipe.img}" alt="${recipe.title}" />
        <h1 class="recipe-title">${recipe.title}</h1>
        <p class="recipe-description">${recipe.description}</p>
        <div class="detail">
            <p><strong>Prep Time:</strong> ${recipe.prepTime}</p>
            <p><strong>Cook Time:</strong> ${recipe.cookTime}</p>
            <p><strong>Servings:</strong> ${recipe.servings}</p>
            <p><strong>Difficulty:</strong> ${recipe.difficulty}</p>
        </div>
        <div class="column">
            <div class="ingredients">
                <h2>Ingredients</h2>
                <ul>
                    ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join("")}
                </ul>
            </div>
            <div class="instructions">
                <h2>Instructions</h2>
                <ol>
                    ${recipe.instruction.map(step => `<li>${step}</li>`).join("")}
                </ol>
            </div>
        </div>
        <div class="tips">
            <h2>Tips</h2>
            <p>${recipe.tips}</p>
        </div>
    </div>
`;
