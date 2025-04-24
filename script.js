//Star Rating System
// This script implements a star rating system where users can click on stars to rate an item.
document.querySelectorAll(".stars").forEach((starBlock, index) => {
    const stars = starBlock.querySelectorAll(".star");
    const ratingText = starBlock.nextElementSibling;
    let selected = 0;

    stars.forEach(star => {
      star.addEventListener("click", () => {
        selected = star.dataset.value;
        updateStars(stars, selected);
      });

      star.addEventListener("mouseover", () => {
        updateStars(stars, star.dataset.value);
      });

      star.addEventListener("mouseout", () => {
        updateStars(stars, selected);
      });
    });

    function updateStars(stars, rating) {
      stars.forEach(star => {
        star.classList.toggle("selected", star.dataset.value <= rating);
      });
    }
  });
//Star Rating System