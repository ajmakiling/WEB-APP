const ingredients = [  
    {
        img: "/DONBURI/Pic/Gyudon.webp",
        title: "Gyudon (牛丼)",
        description: "Savory beef and onion rice bowl.",
        difficulty: "Beginner",
        time: "30 mins",
        servings: 2,
        prepTime: "10 mins",
        cookTime: "20 mins",
        ingredients: [
            "300g thinly sliced beef",
            "1 onion (sliced)",
            "2 cups cooked rice",
            "2 tbsp soy sauce",
            "2 tbsp mirin",
            "1 tbsp sugar",
            "1 cup dashi broth",
        ],
        instruction: [
            "Simmer onion in dashi broth until soft.",
            "Add beef, soy sauce, mirin, and sugar, cook until beef is done.",
            "Serve beef and onions over hot rice.",
            "Garnish with pickled ginger if desired.",
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
            <p>Use thinly sliced beef for faster cooking and tender results.</p>
        </div>
    </div>
`;
