// Function to generate the HTML for each navigation element
function generateNav() {
  const navContainer = document.getElementById("nav_container");

    const navHTML = `
        <div class="container-fluid">
          <a href="index.html"> <!-- link to the homepage -->
            <img src="assets/brand_assets/PNG/Logo.png" class="img-fluid ml-4"
              alt="Rosemary Boards Logo" />
          </a>
          <div class="d-flex flex-grow-1">
            <span class="w-100 d-lg-none d-block">
              <!-- hidden spacer to center brand on mobile --></span>

            <div class="w-100 text-right">
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>

          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent">
            <div class="d-flex flex-column flex-sm-row">
              <a href="boards.html" class="nav-link moss-green mr-4">Boards</a>
              <a href="boards.html" class="nav-link moss-green mr-4">Grazing
                Tables</a>
              <a href="order-page.html" class="btn moss-green-btn">Order Now</a>
            </div>
          </div>
        </div>`;
        navContainer.innerHTML += navHTML;
}

// Load plant cards when the page is loaded
document.addEventListener("DOMContentLoaded", generateNav);