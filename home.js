document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchi");
    const products = document.querySelectorAll("#homeproducts .proname");
  
    searchInput.addEventListener("input", (event) => {
      const searchQuery = event.target.value.toLowerCase().trim();
  
      products.forEach((product) => {
        const productContainer = product.closest("div"); // Get the parent container of the product
        const productName = product.textContent.toLowerCase();
  
        if (productName.includes(searchQuery)) {
          productContainer.style.display = "block";
        } else {
          productContainer.style.display = "none";
        }
      });
    });
  });