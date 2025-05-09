const ingredients = [  
    {
        img: "/TEMPURA/Pic/vegetable.png",
        title: "Vegetable Tempura (野菜天ぷら)",
        description: "Crispy, colorful vegetables in light batter.",
        difficulty: "Beginner",
        time: "35 mins",
        servings: 4,
        prepTime: "20 mins",
        cookTime: "15 mins",
        ingredients: [
            "1 sweet potato (sliced)",
            "1 zucchini (sliced)",
            "½ eggplant (sliced)",
            "1 cup tempura flour",
            "¾ cup ice-cold water",
            "Oil (for frying)"
        ],
        instruction: [
            "Slice vegetables evenly.",
            "Mix tempura flour with ice-cold water.",
            "Dip vegetables into batter and fry until crisp and lightly golden.",
            "Drain and serve hot."
        ],
        tips: "Cut vegetables thin to ensure even frying."
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
