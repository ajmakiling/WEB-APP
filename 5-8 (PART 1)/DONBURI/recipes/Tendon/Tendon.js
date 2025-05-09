const ingredients = [  
    {
        img: "/DONBURI/Pic/tendon.jpg",
        title: "Tendon (天丼)",
        description: "Tempura shrimp and vegetables over rice with sauce.",
        difficulty: "Intermediate",
        time: "35 mins",
        servings: 2,
        prepTime: "20 mins",
        cookTime: "15 mins",
        ingredients: [
            "6 shrimp tempura",
            "Assorted vegetable tempura",
            "2 cups cooked rice",
            "3 tbsp tempura sauce",
        ],
        instruction: [
            "Prepare shrimp and vegetable tempura.",
            "Place tempura on top of rice.",
            "Drizzle tempura sauce generously over everything.",
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
            <p>Serve immediately to keep tempura crispy.</p>
        </div>
    </div>
`;
