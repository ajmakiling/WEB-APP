
const ingredients = [  
    {
        img: "/DONBURI/Pic/tekkadon spicy.webp",
        title: "Tekkadon Spicy (ピリ辛鉄火丼)",
        description: "Spicy marinated tuna over rice.",
        difficulty: "Beginner",
        time: "25 mins",
        servings: 2,
        prepTime: "15 mins",
        cookTime: "10 mins",
        ingredients: [
            "200g sashimi-grade tuna (diced)",
            "2 tbsp sriracha",
            "1 tbsp soy sauce",
            "2 cups sushi rice"
        ],
        instruction: [
            "Mix diced tuna with sriracha and soy sauce.",
            "Arrange spicy tuna over sushi rice.",
            "Garnish with sesame seeds if desired."
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
            <p>Adjust the sriracha amount depending on your spice tolerance.</p>
        </div>
    </div>
`;