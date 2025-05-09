const ingredients = [  
    {
        img: "sushi_and_sashimi.jpg",
        title: "Chirashi Sushi Bowl",
        description: "Sushu rice topped with colorful sashimi and garnishes.",
        difficulty: "Intermediate",
        time: "45 mins",
        servings: 2,
        prepTime: "30 mins",
        cookTime: "15 mins",
        ingredients: [
            "2 cups sushi rice",
            "Assorted sashimi (salmon, tuna, shrimp)",
            "Cucumber slices",
            "Tamago strips",
            "Nori strips",
            "Pickled ginger",        
        ],

        instruction: [
           "Prepare sushi rice",
           "Cut sashimi and toppings into bite-sized pieces.",
           "Arrange toppings artfully over rice.",
           "Serve with soy sauce and wasabi.",
        ]
    },

    
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