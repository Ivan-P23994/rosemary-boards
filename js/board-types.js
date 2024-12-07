// Array of plants with their names and types
const boards = [
  { size: "Small", price: 15, image_link: "./assets/medium_boards/small-boards.jpg"},
  { size: "Medium", price: 40, image_link: "./assets/medium_boards/medium-boards.jpg"},
  { size: "Large", price: 80, image_link: "./assets/large_boards/large-boards.jpg"}
];

// Function to generate the HTML for each board card
function generateBoardTypeCards() {
  const boardTypeCardsContainer = document.getElementById("board-type-cards");
  boards.forEach((board) => {
    // Create a Bootstrap card for each board
    const cardHTML = `
    <a href="./board-products.html?size=${board.size}" class="col-12 col-sm-6 col-md-3 p-4 text-decoration-none" >
      <div class="card h-100 text-center"">
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