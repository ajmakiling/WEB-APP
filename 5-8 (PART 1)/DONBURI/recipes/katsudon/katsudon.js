const ingredients = [  
    {
        img: "/DONBURI/Pic/katsudon.jpg",
        title: "Katsudon (カツ丼)",
        description: "Crispy pork cutlet simmered with egg over rice.",
        difficulty: "Intermediate",
        time: "40 mins",
        servings: 2,
        prepTime: "20 mins",
        cookTime: "20 mins",
        ingredients: [
            "2 pork cutlets (tonkatsu)",
            "2 eggs",
            "1 onion (sliced)",
            "2 cups cooked rice",
            "2 tbsp soy sauce",
            "2 tbsp mirin",
            "1 cup dashi broth",
        ],
        instruction: [
            "Prepare tonkatsu by breading and frying pork cutlets.",
            "Simmer onion in dashi broth, add sliced tonkatsu, and pour beaten eggs on top.",
            "Cover and cook until eggs are slightly set.",
            "Serve over rice.",
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
            <p>Use panko breadcrumbs for extra crispy tonkatsu.</p>
        </div>
    </div>
`;
