// RAMEN AND NOODLES CATEGORY
const ingredients = [  
    {
        img: "/Images/shio-ramen.png", // Replace with actual image path
        title: "Shio Ramen",
        description: "Light and salty ramen perfect for a refreshing meal.",
        difficulty: "Easy",
        time: "40 mins",
        servings: 2,
        prepTime: "15 mins",
        cookTime: "25 mins",
        ingredients: [
            "2 packs ramen noodles",
            "4 cups chicken broth",
            "1 tbsp salt",
            "1 tsp sake",
            "Green onions",
            "Bamboo shoots"
        ],
        instruction: [
            "Simmer broth with salt and sake.",
            "Cook noodles separately.",
            "Assemble noodles and broth into bowls.",
            "Garnish with toppings."
        ],
        tips: "Shio ramen is delicate, avoid overseasoning!"
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
