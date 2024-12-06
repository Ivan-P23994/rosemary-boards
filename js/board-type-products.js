const boards = [
  { name: "Basil Board", image_link: "./assets/cold_salads/Bruschettas/IMG_8572.jpg" },
  { name: "Tarragon Board", image_link: "./assets/cold_salads/Bruschettas/IMG_8572.jpg" },
  { name: "Basil Board", image_link: "./assets/cold_salads/Bruschettas/IMG_8572.jpg" },
  { name: "Tarragon Board", image_link: "./assets/cold_salads/Bruschettas/IMG_8572.jpg" },
  { name: "Basil Board", image_link: "./assets/cold_salads/Bruschettas/IMG_8572.jpg" },
  { name: "Tarragon Board", image_link: "./assets/cold_salads/Bruschettas/IMG_8572.jpg" },
];

function getQueryParams() {
  const params = new URLSearchParams(window.location.search);
  const size = params.get('size');
  return { size };
}

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
    <a href="./board-products.html?type=${board.size}">
      <div class="card m-2" style="width: 18rem;">
        <img class="card-img-top mt-2 bg-off-white" src="${board.image_link}" alt="${board.name} Board Image">
        <div class="card-body d-flex flex-row justify-content-center">
          <h4 class="card-title">${board.name}</h4>
        </div>
      </div>
    </a>
    `;
    boardTypeCardsContainer.innerHTML += cardHTML;
  });
}

// Load plant cards when the page is loaded
document.addEventListener("DOMContentLoaded", generateBoardTypeCards);

