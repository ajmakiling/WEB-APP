// NEGITORO DON (ネギトロ丼)
const ingredients = [  
    {
        img: "/DONBURI/Pic/Negitoro_Don.jpg",
        title: "Negitoro Don (ネギトロ丼)",
        description: "Minced fatty tuna with green onions over rice.",
        difficulty: "Beginner",
        time: "20 mins",
        servings: 2,
        prepTime: "10 mins",
        cookTime: "10 mins",
        ingredients: [
            "200g minced fatty tuna (toro)",
            "2 tbsp finely chopped green onions",
            "2 cups sushi rice",
            "Soy sauce",
            "Wasabi"
        ],
        instruction: [
            "Place sushi rice in bowls.",
            "Top with minced tuna and sprinkle green onions.",
            "Serve with soy sauce and a dab of wasabi."
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
