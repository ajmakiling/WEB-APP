const ingredients = [  
    {
        img: "/TEMPURA/Pic/pumpkin tempura.webp",
        title: "Pumpkin Tempura (かぼちゃ天ぷら)",
        description: "Sweet pumpkin slices in crispy tempura batter.",
        difficulty: "Beginner",
        time: "30 mins",
        servings: 3,
        prepTime: "15 mins",
        cookTime: "15 mins",
        ingredients: [
            "½ small kabocha pumpkin (thinly sliced)",
            "1 cup tempura flour",
            "¾ cup ice-cold water",
            "Oil (for frying)"
        ],
        instruction: [
            "Slice pumpkin into thin wedges.",
            "Dip slices into tempura batter.",
            "Fry until lightly golden and crispy.",
            "Drain on paper towels and serve warm."
        ],
        tips: "Slice pumpkin thinly for faster and even frying."
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
