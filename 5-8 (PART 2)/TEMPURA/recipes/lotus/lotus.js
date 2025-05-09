const ingredients = [  
    {
        img: "/TEMPURA/Pic/lotus-root-tempura.jpg",
        title: "Lotus Root Tempura (蓮根天ぷら)",
        description: "Crunchy and earthy lotus root slices fried to perfection.",
        difficulty: "Beginner",
        time: "30 mins",
        servings: 2,
        prepTime: "15 mins",
        cookTime: "15 mins",
        ingredients: [
            "1 lotus root (peeled and sliced)",
            "1 cup tempura flour",
            "¾ cup ice-cold water",
            "Oil (for frying)"
        ],
        instruction: [
            "Peel and slice lotus root into thin rounds.",
            "Dip slices in tempura batter.",
            "Fry until light golden and crispy.",
            "Drain and serve immediately."
        ],
        tips: "Soak lotus root in water with vinegar before frying to prevent discoloration."
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
