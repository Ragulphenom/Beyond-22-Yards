
//     document.addEventListener("DOMContentLoaded", () => {
//     const addToCartButtons = document.querySelectorAll(".add-to-cart");

//     addToCartButtons.forEach(button => {
//         button.addEventListener("click", () => {
//             const productElement = button.closest(".product");
//             const productId = productElement.dataset.id;
//             const productName = productElement.dataset.name;
//             const productPrice = productElement.dataset.price;

//             // Get cart from localStorage or initialize an empty array
//             let cart = JSON.parse(localStorage.getItem("cart")) || [];

//             // Add product to cart
//             cart.push({ id: productId, name: productName, price: productPrice });

//             // Save updated cart to localStorage
//             localStorage.setItem("cart", JSON.stringify(cart));

//             alert(`${productName} has been added to the cart!`);
//         });
//     });
// });



document.addEventListener("DOMContentLoaded", () => {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", () => {
            const productElement = button.closest(".product");
            const productId = productElement.dataset.id;
            const productName = productElement.dataset.name;
            const productPrice = parseInt(productElement.dataset.price);

            // Get cart from localStorage or initialize an empty array
            let cart = JSON.parse(localStorage.getItem("cart")) || [];

            // Check if product already exists in the cart
            const existingItem = cart.find(item => item.id === productId);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({ id: productId, name: productName, price: productPrice, quantity: 1 });
            }

            // Save updated cart to localStorage
            localStorage.setItem("cart", JSON.stringify(cart));

            alert(`${productName} has been added to the cart!`);
        });
    });
});
