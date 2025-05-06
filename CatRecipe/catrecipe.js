//SUSHI AND SASHIMI CATEGORIES
const ingredients = [  
    {
        img: "sushi_and_sashimi.jpg",
        title: "Classic Salmon Nigiri",
        description: "Traditional Japanese nigiri sushi with fresh salmon slices over seasoned rice.",
        difficulty: "Intermediate",
        time: "45 mins",
        servings: 2,
        prepTime: "30 mins",
        cookTime: "15 mins",
        ingredients: [
            "2 cups sushi rice",
            "3 tbsp rice vinegar",
            "1 tbsp sugar",
            "1/2 tsp salt",
            "200g fresh sashimi-grade salmon",
            "Wasabi paste",
            "Soy sauce for serving",
            "Pickled ginger for serving",
        ],
        instruction: [
            "Rinse the sushi rice until the water runs clear, then cook according to package instructions.",
            "Mix rice vinegar, sugar, and salt in a small bowl until dissolved.",
            "When rice is cooked, transfer to a wooden bowl and gently fold in the vinegar mixture while fanning the rice to cool it quickly.",
            "Slice the salmon into thin pieces about 1/4 inch thick.",
            "Wet your hands with water to prevent sticking, then grab about 2 tablespoons of rice and form into an oval shape.",
            "Place a slice of salmon on top of each rice mound and gently press to secure.",
            "Serve with soy sauce, wasabi, and pickled ginger."
        ]
    }
];

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
        <p>For the best flavor, use high-quality sushi rice and fresh sashimi-grade salmon.</p>
    </div>
`;