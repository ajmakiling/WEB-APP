const ingredients = [  
    {
        img: "/DONBURI/Pic/karaage-don.jpg", 
        title: "Karaage Don (唐揚げ丼)",
        description: "Crispy Japanese fried chicken over rice.",
        difficulty: "Intermediate",
        time: "40 mins",
        servings: 2,
        prepTime: "20 mins",
        cookTime: "20 mins",
        rating: "4.7/5",
        ingredients: [
            "300g chicken thigh (cut into chunks)",
            "2 tbsp soy sauce",
            "1 tbsp sake",
            "1 tbsp ginger juice",
            "½ cup potato starch",
            "Oil (for frying)",
            "2 cups cooked rice"
        ],
        instruction: [
            "Marinate chicken with soy sauce, sake, and ginger juice.",
            "Coat with potato starch and deep-fry until golden.",
            "Serve hot over steamed rice."
        ],
        tip: "Double-fry the chicken for extra crispiness."
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
            <p><strong>Rating:</strong> ${recipe.rating}</p>
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
            <p>${recipe.tip}</p>
        </div>
    </div>
`;
