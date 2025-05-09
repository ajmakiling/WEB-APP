// Recipes data
const recipes = [
    { 
        name: "Volcano Roll (ボルケーノロール)", 
        img: "images/volcanoroll.png", 
        link: "Recipes/sushi.html", 
    },

    {
        name: "Tonkotsu Ramen (豚骨ラーメン)", 
        img: "images/ramen.jpg",
        link: "#",
    },

    { 
        name: "Shrimp Tempura (海老天ぷら)", 
        img: "TEMPURA/Pic/shrimp_tempura.webp",
        link: "/TEMPURA/recipes/shrimptempura/shrimptempura.html" 
    },

    { 
        name: "Matcha Ice Cream (抹茶アイスク)",
        img: "DESSERTS/Pic/matcha ic.png",
        link: "#"
    },

    { 
        name: "Shoyu Ramen (醤油ラーメン)", 
        img: "images/okonomiyaki.png",
        link: "" 
    },

    {
        name: "Momo Yakitori (もも焼き鳥)",
        img: "YAKITORI/Pic/momo.png", 
        link: "/YAKITORI/"     
    },

    {
        name: "Hojicha Panna Cotta (ほうじ茶パ)",
        img:  "DESSERTS/Pic/hojicha.png",
        link: "#" 
    },

    {
        name: "Dragon Roll (ドラゴンロール)",
        img: "images/dragon roll.png",
        link: "#"
    },

    {
        name: "katsudon (カツ丼)",
        img: "DONBURI/Pic/katsudon.jpg",
        link: "/DONBURI/recipes/katsudon/katsudon.html",
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
  