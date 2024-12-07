const boards = [
  { name: "Basil Board", image_link: "./assets/medium_boards/medium-boards.jpg" },
  { name: "Tarragon Board", image_link: "./assets/large_boards/large-boards.jpg" },
  { name: "Basil Board", image_link: "./assets/medium_boards/small-boards.jpg" },
  { name: "Basil Board", image_link: "./assets/medium_boards/medium-boards.jpg" },
  { name: "Tarragon Board", image_link: "./assets/large_boards/large-boards.jpg" },
  { name: "Basil Board", image_link: "./assets/medium_boards/small-boards.jpg" },
];
// Function to fetch query parameters
function getQueryParams() {
  const params = new URLSearchParams(window.location.search);
  const size = params.get('size');
  return { size };
}
// Function to set query parameters
document.addEventListener('DOMContentLoaded', () => {
  const { size } = getQueryParams();
  document.getElementById('output').textContent = `${size} Boards`;
});
// Function to generate the HTML for each board card
function generateBoardTypeCards() {
  const boardTypeCardsContainer = document.getElementById("board-type-cards");
  boards.forEach((board) => {
    // Create a Bootstrap card for each board
    const cardHTML = `
    <a href="./single-board-product.html?name=${board.name}" class="col-12 col-sm-6 col-md-4 p-5 text-decoration-none">
      <div class="card h-100 text-center">
        <img class="card-img-top mt-2 bg-off-white" src="${board.image_link}" alt="${board.name} Board Image">
        <div class="card-body d-flex flex-column justify-content-center align-items-center">
          <h4 class="card-title">${board.name}</h4>
        </div>
      </div>
    </a>`;
    boardTypeCardsContainer.innerHTML += cardHTML;
  });
}

// Load plant cards when the page is loaded
document.addEventListener("DOMContentLoaded", generateBoardTypeCards);

