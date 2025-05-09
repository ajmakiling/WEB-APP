const ingredients = [  
    {
        img: "/Images/kitsuneudon.png",
        title: "Kitsune Udon",
        description: "Simple, sweet-savory udon topped with fried tofu.",
        difficulty: "Easy",
        time: "30 mins",
        servings: 2,
        prepTime: "15 mins",
        cookTime: "15 mins",
        ingredients: [
            "2 packs udon noodles",
            "4 cups dashi broth",
            "Aburaage (fried tofu)",
            "Soy sauce",
            "Sugar"
        ],
        instruction: [
            "Simmer tofu with soy sauce and sugar until sweet.",
            "Prepare broth and noodles.",
            "Assemble noodles with broth and tofu on top."
        ],
        tips: "Sweet fried tofu is the star — don’t skip simmering it!"
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
