// Recipes data
const recipes = [
    { 
        name: "Sushi (寿司)", 
        img: "images/sushi.jpeg", 
        link: "Recipes/sushi.html", 
    },

    {
        name: "Ramen (ラーメン)", 
        img: "images/ramen.jpg",
        link: "#",
    },

    { 
        name: "Tempura (天ぷら)", 
        img: "images/tempura.jpg",
        link: "#" 
    },

    { 
        name: "Takoyaki (たこ焼き)",
        img: "images/takoyaki.avif",
        link: "#"
    },

    { 
        name: "Okonomiyaki (お好み焼き)", 
        img: "images/okonomiyaki.png",
        link: "#" 
    },

    {
        name: "Udon (うどん)",
        img: "images/udon.png", 
        link: "#"     
    },

    {
        name: "Soba (そば)",
        img:  "images/soba.png",
        link: "#" 
    },

    {
        name: "Yakitoki (焼き鳥)",
        img: "images/yakitori.png",
        link: "#"
    },

    {
        name: "Donburi (丼)",
        img: "images/donburi.png",
        link: "#"
    },
 

  ];
  
  // Render recipes
  const grid = document.getElementById("recipe-grid");
  grid.innerHTML = recipes.map(recipe => `
    <div class="recipe-card">
      <img src="${recipe.img}" alt="${recipe.name}">
      <h3>${recipe.name}</h3>
      <div class="stars">
        ${[5,4,3,2,1].map(v => `<span class="star" data-value="${v}">&#9733;</span>`).join('')}
      </div>
      <a href="${recipe.link}"><button>View Recipe</button></a>
    </div>
  `).join('');
  
  // Star rating
  document.querySelectorAll(".stars").forEach(starBlock => {
    const stars = starBlock.querySelectorAll(".star");
    let selected = 0;
  
    stars.forEach(star => {
      star.addEventListener("click", () => {
        selected = star.dataset.value;
        updateStars();
      });
      star.addEventListener("mouseover", () => updateStars(star.dataset.value));
      star.addEventListener("mouseout", () => updateStars(selected));
    });
  
    function updateStars(rating = selected) {
      stars.forEach(star => {
        star.classList.toggle("selected", star.dataset.value <= rating);
      });
    }
  });
  