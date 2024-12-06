// Array of plants with their names and types
const boards = [
  { size: "Small", price: 15, image_link: "./assets/cold_salads/Bruschettas/IMG_8572.jpg", navigation_link: "" },
  { size: "Medium", price: 40, image_link: "./assets/medium_boards/8CC45F9C-E610-4A93-A2EC-2DE1E49785D0.jpg", navigation_link: "" },
  { size: "Large", price: 80, image_link: "./assets/large_boards/IMG_7785.jpg", navigation_link: "" }
];

// Function to generate the HTML for each board card
function generateBoardTypeCards() {
  const boardTypeCardsContainer = document.getElementById("board-type-cards");
  boards.forEach((board) => {
    // Create a Bootstrap card for each board
    const cardHTML = `
    <a href="./board-products.html?type=${board.size}">
      <div class="card m-2" style="width: 18rem;">
        <img class="card-img-top mt-2 bg-off-white" src="${board.image_link}" alt="${board.size} Board Image">
        <div class="card-body d-flex flex-row justify-content-center">
          <span class="card-title">${board.size} - ${board.price} €</span>
        </div>
      </div>
    </a>
    `;
    boardTypeCardsContainer.innerHTML += cardHTML;
  });
}

// Load plant cards when the page is loaded
document.addEventListener("DOMContentLoaded", generateBoardTypeCards);