const ingredients = [  
    {
        img: "/TEMPURA/Pic/kakiage.jpg",
        title: "Kakiage (かき揚げ)",
        description: "Mixed vegetable and seafood tempura fritters.",
        difficulty: "Intermediate",
        time: "40 mins",
        servings: 4,
        prepTime: "20 mins",
        cookTime: "20 mins",
        ingredients: [
            "½ onion (thinly sliced)",
            "1 carrot (julienned)",
            "50g small shrimp",
            "1 cup tempura flour",
            "¾ cup ice-cold water",
            "Oil (for frying)"
        ],
        instruction: [
            "Combine vegetables and shrimp in a bowl.",
            "Lightly coat with flour and mix with tempura batter.",
            "Drop spoonfuls into hot oil and fry until crisp and golden.",
            "Drain and serve with dipping sauce."
        ],
        tips: "Keep ingredients bite-sized for easier frying."
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
