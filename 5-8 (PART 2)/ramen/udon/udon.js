const ingredients = [  
    {
        img: "/Images/udon.png",
        title: "Udon",
        description: "Thick wheat noodles in a mild savory broth.",
        difficulty: "Easy",
        time: "25 mins",
        servings: 2,
        prepTime: "10 mins",
        cookTime: "15 mins",
        ingredients: [
            "2 packs udon noodles",
            "4 cups dashi broth",
            "Soy sauce",
            "Green onions",
            "Tempura or tofu for topping"
        ],
        instruction: [
            "Heat dashi broth, season with soy sauce.",
            "Boil udon noodles.",
            "Serve noodles in broth with toppings."
        ],
        tips: "Udon tastes best freshly cooked!"
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
