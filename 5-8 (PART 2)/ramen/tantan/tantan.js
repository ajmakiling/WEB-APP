const ingredients = [  
    {
        img: "/Images/tantanmen.png",
        title: "Tan Tan Men",
        description: "Spicy, nutty ramen inspired by Sichuan Dan Dan noodles.",
        difficulty: "Intermediate",
        time: "45 mins",
        servings: 2,
        prepTime: "20 mins",
        cookTime: "25 mins",
        ingredients: [
            "2 tbsp sesame paste",
            "1 tbsp chili oil",
            "4 cups chicken broth",
            "2 packs ramen noodles",
            "Minced pork",
            "Green onions"
        ],
        instruction: [
            "Stir-fry pork until cooked.",
            "Add sesame paste and chili oil to broth.",
            "Cook noodles and combine with broth and pork."
        ],
        tips: "Adjust chili oil depending on your spice tolerance!"
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
            <p>${recipe.tips}</p>
        </div>
`;
