
const ingredients = [  
    {
        img: "/DONBURI/Pic/unadon.jpg",
        title: "Unadon (鰻丼)",
        description: "Grilled eel glazed with sweet soy sauce over rice.",
        difficulty: "Intermediate",
        time: "30 mins",
        servings: 2,
        prepTime: "10 mins",
        cookTime: "20 mins",
        ingredients: [
            "2 fillets grilled eel (unagi)",
            "2 cups cooked rice",
            "3 tbsp unagi sauce"
        ],
        instruction: [
            "Warm the grilled eel and brush with unagi sauce.",
            "Place eel fillets on top of rice.",
            "Drizzle extra sauce before serving."
        ]
    }
];
//GOBACK
function goBack() {
    if (document.referrer) {
        history.back();
  } else {
    window.location.href = "/DONBURI/donburi.html";
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
            <p>You can find prepared grilled eel at Japanese grocery stores.</p>
        </div>
    </div>
`;

