// BUTADON (豚丼)
const ingredients = [  
    {
        img: "/DONBURI/Pic/butadon.jpg",
        title: "Butadon (豚丼)",
        description: "Sweet and savory pork slices over rice.",
        difficulty: "Beginner",
        time: "30 mins",
        servings: 2,
        prepTime: "10 mins",
        cookTime: "20 mins",
        ingredients: [
            "300g thinly sliced pork belly",
            "2 cups cooked rice",
            "2 tbsp soy sauce",
            "2 tbsp mirin",
            "1 tbsp sugar"
        ],
        instruction: [
            "Stir-fry pork belly until cooked.",
            "Add soy sauce, mirin, and sugar and simmer briefly.",
            "Serve hot over steamed rice."
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
            <p>Use a mix of fat and meat for juicier butadon.</p>
        </div>
    </div>
`;
