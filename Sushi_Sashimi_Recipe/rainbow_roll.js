//SUSHI AND SASHIMI CATEGORIES
const ingredients = [  
    {
        img: "sushi_and_sashimi.jpg",
        title: "Rainbow Roll",
        description: "A colorful sushi roll with an assortment of fresh fish.",
        difficulty: "Intermediate",
        time: "50 mins",
        servings: 4,
        prepTime: "30 mins",
        cookTime: "20 mins",
        ingredients: [
            "2 cups sushi rice",
            "4 nori sheets",
            "100g crab meat or imitation crab",
            "100g fresh tuna (sliced)",
            "100g fresh salmon (sliced)",
            "1 avocado (sliced)",
            "Cucumber (sliced into strips)",
            "Soy sauce",
        ],
        instruction: [
           "Lay a sheet of nori on a bamboo mat and spread sushi rice evenly over it.",
           "Place crab meat and cucumber along the center of the rice.",
           "Roll sushi tightly using the bamboo mat.",
           "Slice the roll and arrange  slice of tuna and salmon, and avocado on top",
           "Serve with soy sauce",
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