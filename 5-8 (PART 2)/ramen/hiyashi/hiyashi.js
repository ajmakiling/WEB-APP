// RAMEN AND NOODLES CATEGORY
const ingredients = [  
    {
        img: "/Images/tsukemen.png", 
        title: "Tsukemen",
        description: "Thick noodles served cold, dipped in a separate concentrated broth.",
        difficulty: "Intermediate",
        time: "50 mins",
        servings: 2,
        prepTime: "20 mins",
        cookTime: "30 mins",
        ingredients: [
            "2 packs thick ramen noodles",
            "2 cups pork broth",
            "2 tbsp soy sauce",
            "1 tbsp mirin",
            "Green onions"
        ],
        instruction: [
            "Boil and chill noodles.",
            "Simmer broth with soy sauce and mirin.",
            "Serve noodles and broth separately.",
            "Dip and eat!"
        ],
        tips: "Chill noodles with ice water for the perfect chewy texture."
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
// Access the first recipe in the ingredients array
const recipe = ingredients[0];
// Dynamically generate the content
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
    </div>
`;
