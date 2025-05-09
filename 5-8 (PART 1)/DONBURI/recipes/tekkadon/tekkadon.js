
const ingredients = [  
    {
        img: "/DONBURI/Pic/Tekka-Don.jpg",
        title: "Tekka Don (鉄火丼)",
        description: "Fresh tuna sashimi over seasoned rice.",
        difficulty: "Beginner",
        time: "20 mins",
        servings: 2,
        prepTime: "15 mins",
        cookTime: "5 mins",
        ingredients: [
            "200g sashimi-grade tuna (sliced)",
            "2 cups sushi rice",
            "Soy sauce",
            "Wasabi"
        ],
        instruction: [
            "Slice tuna into sashimi pieces.",
            "Arrange tuna over seasoned sushi rice.",
            "Serve with soy sauce and wasabi."
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
            <p>Chill the tuna before slicing for cleaner cuts.</p>
        </div>
    </div>
`;
