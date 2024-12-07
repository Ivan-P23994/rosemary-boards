const boards = [
  { name: "Basil Board", price: "80 €", image_link: "./assets/medium_boards/medium-boards.jpg", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium at dolorem quidem modi. Nam sequi consequatur obcaecati excepturi alias magni, accusamus eius blanditiis delectus ipsam minima ea iste laborum vero?" },
  { name: "Tarragon Board", price: "80 €", image_link: "./assets/medium_boards/large-boards.jpg", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium at dolorem quidem modi. Nam sequi consequatur obcaecati excepturi alias magni, accusamus eius blanditiis delectus ipsam minima ea iste laborum vero?" }
];


// Function to fetch query parameters
function getQueryParams() {
  const params = new URLSearchParams(window.location.search);
  const name = params.get('name');
  return { name };
}

// Function to set query parameters
document.addEventListener('DOMContentLoaded', () => {
  const { name } = getQueryParams();
});

// Function to find a board by name
function findBoardByName(name) {
  return boards.find(board => board.name === name);
}

// DOMContentLoaded event handler
document.addEventListener('DOMContentLoaded', () => {
  const { name } = getQueryParams();

  // Find the board based on the name query parameter
  const board = findBoardByName(name);

  if (board) {
    // If board exists, display its name and image
    const boardNameContainer = document.getElementById("product_name");
    const boardPriceContainer = document.getElementById("product_price");
    const boardDescContainer = document.getElementById("product_description");
    document.querySelector("#product_image > img").src = board.image_link;

    boardDescContainer.innerHTML = board.description;
    boardPriceContainer.innerHTML = board.price;
    boardNameContainer.innerHTML = board.name;

    document.getElementById('output').innerHTML = `
      <h1>${board.name} Boards</h1>
      <img src="${board.image_link}" alt="${board.name} Image" style="max-width: 100%; height: auto;">
    `;
  } else {
    // TODO
  }
});

