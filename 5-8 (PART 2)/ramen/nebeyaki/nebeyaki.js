const ingredients = [  
    {
        img: "/Images/nabeyakiudon.png",
        title: "Nabeyaki Udon",
        description: "Hot pot udon served with egg, tempura, and fresh vegetables.",
        difficulty: "Intermediate",
        time: "40 mins",
        servings: 2,
        prepTime: "20 mins",
        cookTime: "20 mins",
        ingredients: [
            "2 packs udon noodles",
            "4 cups dashi broth",
            "Egg",
            "Shrimp tempura",
            "Shiitake mushrooms",
            "Spinach"
        ],
        instruction: [
            "Simmer broth and veggies.",
            "Add noodles and crack an egg on top.",
            "Top with tempura before serving."
        ],
        tips: "Serve in a clay pot for authentic presentation."
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
