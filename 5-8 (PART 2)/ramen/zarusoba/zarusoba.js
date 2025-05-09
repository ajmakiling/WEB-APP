const ingredients = [  
    {
        img: "/Images/zarusoba.png",
        title: "Zaru Soba",
        description: "Cold buckwheat noodles dipped in savory sauce, perfect for hot days.",
        difficulty: "Easy",
        time: "20 mins",
        servings: 2,
        prepTime: "10 mins",
        cookTime: "10 mins",
        ingredients: [
            "2 packs soba noodles",
            "Mentsuyu (dipping sauce)",
            "Nori strips",
            "Green onions",
            "Wasabi (optional)"
        ],
        instruction: [
            "Boil soba noodles, chill in ice water.",
            "Arrange noodles on bamboo mat.",
            "Dip into sauce and eat."
        ],
        tips: "Use lots of ice when chilling for perfect firm noodles!"
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
