const ingredients = [  
    {
        img: "/TEMPURA/Pic/Fish-Tempura.jpeg",
        title: "Fish Tempura (白身魚天ぷら)",
        description: "Flaky white fish in a delicate crispy coat.",
        difficulty: "Intermediate",
        time: "30 mins",
        servings: 3,
        prepTime: "15 mins",
        cookTime: "15 mins",
        ingredients: [
            "300g white fish (cod or haddock)",
            "1 cup tempura flour",
            "¾ cup ice-cold water",
            "Salt and pepper",
            "Oil (for frying)"
        ],
        instruction: [
            "Season fish lightly with salt and pepper.",
            "Dip fish fillets into tempura batter.",
            "Fry until golden and cooked through.",
            "Drain on paper towels and serve hot."
        ],
        tips: "Use small, thin pieces of fish for even cooking."
    }
];
//GOBACK
function goBack() {
    if (document.referrer) {
        history.back();
  } else {
    window.location.href = "/TEMPURA/tempura.html";
  }
} 
const content = document.getElementById("content");
const recipe = ingredients[0];
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
`;
