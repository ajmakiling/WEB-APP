//California Roll Recipe
const ingredients = [
    {
        img: "sushi_and_sashimi.jpg",
        title: "California Roll",
        description: "An inside-out roll with crab, avocado, and cucumber.",
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
            "1 avocado, sliced",
            "1 cucumber, julienned",
            "200g imitation crab meat",
            "Nori sheets",
            "Sesame seeds for garnish",
        ],
        instruction: [
            "Rinse the sushi rice until the water runs clear, then cook according to package instructions.",
            "Mix rice vinegar, sugar, and salt in a small bowl until dissolved.",
            "When rice is cooked, transfer to a wooden bowl and gently fold in the vinegar mixture while fanning the rice to cool it quickly.",
            "Place a nori sheet on a bamboo mat, spread a thin layer of rice over it, leaving a 1-inch border at the top.",
            "Layer avocado, cucumber, and crab meat in the center of the rice.",
            "Using the bamboo mat, roll tightly from the bottom to the top, sealing the edge with a little water.",
            "Slice into bite-sized pieces and sprinkle with sesame seeds."
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
    </div>
`;

// Handle comment form submission
const commentForm = document.getElementById("comment-form");
const commentInput = document.getElementById("comment-input");
const commentsContainer = document.getElementById("comments-container");

commentForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form from refreshing the page

  const commentText = commentInput.value.trim();
  if (commentText) {
    // Create a new comment element
    const comment = document.createElement("div");
    comment.classList.add("comment");
    comment.textContent = commentText;

    // Add the comment to the comments container
    commentsContainer.appendChild(comment);
    

    // Clear the input field
    commentInput.value = "";
  }
});