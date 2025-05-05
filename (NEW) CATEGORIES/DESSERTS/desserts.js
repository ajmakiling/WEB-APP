const recipes = [
    {
        title: "Mochi (餅)",
        time: "40 mins",
        difficulty: "Intermediate",
        description: "Chewy rice cakes made from glutinous rice.",
        image: "Pic/mochi.png",
      },
      {
        title: "Dorayaki (どら焼き)",
        time: "30 mins",
        difficulty: "Begginer",
        description: "Fluffy pancake sandwich filled with red bean paste.",
        image: "Pic/dorayaki.png",
      },
      {
        title: "Matcha Ice Cream (抹茶アイスクリーム)",
        time: "4 hours",
        difficulty: "Intermediate",
        description: "Creamy green tea ice cream with earthy flavor.",
        image: "Pic/matcha ic.png",
      },
      {
        title: "Daifuku (大福)",
        time: "45 mins",
        difficulty: "Intermediate",
        description: "Soft mochi filled with sweet red bean paste.",
        image: "Pic/daifuku.png",
      },
      {
          title: "Taiyaki (鯛焼き)",
          time: "40 mins",
          difficulty: "Intermediate",
          description: "Fish-shaped waffles filled with red bean or custard.",
          image: "Pic/taiyaki.png",
        },
        {
          title: "Anmitsu (あんみつ)",
          time: "30 mins",
          difficulty: "Beginner",
          description: "A refreshing jelly dessert with fruit and red bean paste.",
          image: "Pic/anmitsu.png",
        }, 
        {
          title: "Castella (カステラ)",
          time: "1 hour",
          difficulty: "Intermediate",
          description: "Honey sponge cake with a fine texture.",
          image: "Pic/castella.png",
        }, 
        {
          title: "Kuzumochi (葛餅)",
          time: "1 hour",
          difficulty: "Beginner",
          description: "Chilled jelly-like mochi served with kinako and syrup.",
          image: "Pic/kuzumochi.png",
        }, 
        {
          title: "Matcha Pudding (抹茶プリン)",
          time: "3 hours",
          difficulty: "Beginner",
          description: "Silky pudding flavored with green tea.",
          image: "Pic/matchapudding.png",
        }, 
        {
          title: "Yokan (羊羹)",
          time: "1.5 hours",
          difficulty: "Intermediate",
          description: "Firm jelly made with red bean paste and agar.",
          image: "Pic/yokan.png",
        }, 
        {
          title: "Zenzai (ぜんざい)",
          time: "40 mins",
          difficulty: "Beginner",
          description: "Warm red bean soup with mochi.",
          image: "Pic/zenzai.png",
        }, 
        {
          title: "Mitarashi Dango (みたらし団子)",
          time: "30 mins",
          difficulty: "Beginner",
          description: "Chewy rice dumplings in sweet soy glaze.",
          image: "Pic/mitarashi.png",
        }, 
        {
          title: "Strawberry Daifuku (いちご大福)",
          time: "45 mins",
          difficulty: "Intermediate",
          description: "Fresh strawberries wrapped in mochi and sweet bean paste.",
          image: "Pic/strawberry.png",
        }, 
        {
          title: "Hojicha Panna Cotta (ほうじ茶パンナコッタ)",
          time: "3 hours",
          difficulty: "Intermediate",
          description: "Creamy dessert infused with roasted green tea.",
          image: "Pic/hojicha.png",
        }, 
        {
          title: "Kasutera Parfait (カステラパフェ)",
          time: "20 mins",
          difficulty: "Beginner",
          description: "Layered dessert with castella, cream, fruit, and anko.",
          image: "Pic/parfait.png",
        }, 
    // Add more recipes here...
  ];
  
  const container = document.getElementById("recipe-container");
  
  recipes.forEach((recipe) => {
    const card = document.createElement("div");
    card.classList.add("card");
  
    card.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.title}" />
      <div class="card-content">
        <h3>${recipe.title}</h3>
        <div class="meta-info">
          <p> <i class="fas fa-clock"></i>${recipe.time}</p>
          <p> <i class="fas fa-signal"></i>${recipe.difficulty}</p>
        </div>
        <p>${recipe.description}</p>
        <button>View Recipe</button>
      </div>
    `;
  
    container.appendChild(card);
  });