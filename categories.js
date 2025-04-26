const recipes = [
    {
        img: "sushi_and_sashimi.jpg",
        title: "TANGINAMO",
        description: "gago",
        dishes: "15 dishes",
    },



]







card.innerHTML = `
<img src="${recipe.image}" alt="${recipe.title}" />
<div class="card-content">
  <h3>${recipe.title}</h3>
  <p>${recipe.description}</p>
  <span class="tag">${dishes}<span>
  <button>View Recipe</button>
</div>
`;