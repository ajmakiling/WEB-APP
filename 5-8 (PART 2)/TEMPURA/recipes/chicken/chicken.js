const ingredients = [  
    {
        img: "/TEMPURA/Pic/chicken-tempura.jpg",
        title: "Chicken Tempura (鶏天ぷら)",
        description: "Tender chicken in a crispy coating.",
        difficulty: "Intermediate",
        time: "35 mins",
        servings: 3,
        prepTime: "20 mins",
        cookTime: "15 mins",
        ingredients: [
            "300g chicken breast (cut into strips)",
            "1 cup tempura flour",
            "¾ cup ice-cold water",
            "Salt and pepper",
            "Oil (for frying)"
        ],
        instruction: [
            "Season chicken lightly with salt and pepper.",
            "Mix tempura flour with ice-cold water.",
            "Dip chicken into batter and fry until golden and cooked through.",
            "Drain on paper towels and serve hot."
        ],
        tips: "Don’t overcrowd the pan to keep the oil temperature stable."
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
