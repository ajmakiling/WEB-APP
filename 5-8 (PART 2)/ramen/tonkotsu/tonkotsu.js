// RAMEN AND NOODLES CATEGORY
const ingredients = [  
    {
        img: "/Images/tonkotsu-ramen.png", // Update this to your actual image path
        title: "Tonkotsu Ramen",
        description: "A creamy, rich pork bone broth ramen topped with chashu and soft-boiled eggs.",
        difficulty: "Advanced",
        time: "8 hrs",
        servings: 2,
        prepTime: "30 mins",
        cookTime: "7.5 hrs",
        ingredients: [
            "4 cups pork bone broth (homemade preferred)",
            "2 packs ramen noodles",
            "2 slices chashu pork",
            "1 soft-boiled egg",
            "Green onions",
            "Black garlic oil (optional)"
        ],
        instruction: [
            "Boil pork bones for several hours until broth turns creamy.",
            "Strain broth and season to taste.",
            "Cook noodles according to package.",
            "Place noodles in bowls, add broth.",
            "Top with pork slices, egg halves, and green onions.",
            "Drizzle black garlic oil if desired."
        ],
        tips: "Boiling the bones long enough is key to achieving the signature cloudy broth."
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
