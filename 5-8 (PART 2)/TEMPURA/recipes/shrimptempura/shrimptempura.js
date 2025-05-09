const ingredients = [  
    {
        img: "/TEMPURA/Pic/shrimp_tempura.webp",
        title: "Shrimp Tempura (海老天ぷら)",
        description: "Classic crispy battered shrimp.",
        difficulty: "Intermediate",
        time: "30 mins",
        servings: 3,
        prepTime: "15 mins",
        cookTime: "15 mins",
        ingredients: [
            "10 large shrimp (peeled and deveined)",
            "1 cup tempura flour",
            "¾ cup ice-cold water",
            "Oil (for frying)"
        ],
        instruction: [
            "Prepare shrimp by making small cuts along the belly to keep them straight.",
            "Mix tempura flour and ice-cold water gently.",
            "Dip shrimp into batter and fry at 170°C (340°F) until golden.",
            "Drain on paper towels and serve hot."
        ],
        tips: "Do not overmix the batter – small lumps make it crispier."
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
    </div>
`;
