const ingredients = [  
    {
        img: "/DONBURI/Pic/oyakodon.jpg",
        title: "Oyakodon (親子丼)",
        description: "Chicken and egg simmered together over rice.",
        difficulty: "Beginner",
        time: "25 mins",
        servings: 2,
        prepTime: "10 mins",
        cookTime: "15 mins",
        ingredients: [
            "200g chicken thigh (cut into pieces)",
            "2 eggs",
            "1 onion (sliced)",
            "2 cups cooked rice",
            "2 tbsp soy sauce",
            "2 tbsp mirin",
            "1 cup dashi broth",
        ],
        instruction: [
            "Simmer onion and chicken in dashi broth with soy sauce and mirin.",
            "Pour beaten eggs over the top, cover, and cook gently until just set.",
            "Serve hot over steamed rice.",
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
            <p>Keep the eggs slightly runny for a more authentic texture.</p>
        </div>
    </div>
`;
