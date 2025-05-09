const ingredients = [  
    {
        img: "/Images/yakisoba.png",
        title: "Yakisoba",
        description: "Savory, slightly sweet stir-fried noodles with pork and veggies.",
        difficulty: "Easy",
        time: "30 mins",
        servings: 2,
        prepTime: "10 mins",
        cookTime: "20 mins",
        ingredients: [
            "2 packs yakisoba noodles",
            "150g pork belly slices",
            "Cabbage, shredded",
            "Carrots, julienned",
            "Yakisoba sauce"
        ],
        instruction: [
            "Stir-fry pork and veggies.",
            "Add noodles and sauce.",
            "Cook until coated and hot."
        ],
        tips: "Use Japanese Worcestershire-style yakisoba sauce for authentic flavor!"
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
