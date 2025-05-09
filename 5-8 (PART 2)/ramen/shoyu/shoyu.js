// RAMEN AND NOODLES CATEGORY
const ingredients = [
    {
        img: "/Images/shoyu-ramen.png", // Update this to the actual image path if needed
        title: "Shoyu Ramen",
        description: "A flavorful soy sauce-based ramen with tender pork slices and fresh vegetables.",
        difficulty: "Intermediate",
        time: "1 hr",
        servings: 2,
        prepTime: "20 mins",
        cookTime: "40 mins",
        ingredients: [
            "2 packs ramen noodles",
            "4 cups chicken broth",
            "1/2 cup soy sauce",
            "2 tbsp mirin",
            "2 tbsp sake",
            "1 tbsp sugar",
            "2 slices chashu pork",
            "1 boiled egg, halved",
            "1 sheet nori (seaweed)",
            "Green onions, sliced",
            "Bamboo shoots"
        ],
        instruction: [
            "In a pot, combine broth, soy sauce, mirin, sake, and sugar. Simmer gently.",
            "Cook ramen noodles according to package instructions. Drain.",
            "Place noodles into bowls.",
            "Pour hot broth over the noodles.",
            "Top with chashu pork, boiled egg, nori, green onions, and bamboo shoots.",
            "Serve hot!"
        ],
        tips: "Use high-quality chicken broth or homemade for a richer flavor."
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
`;
