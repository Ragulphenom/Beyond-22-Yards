// document.addEventListener("DOMContentLoaded", () => {
//     const cartItemsContainer = document.getElementById("cart-items");

//     // Get cart from localStorage
//     const cart = JSON.parse(localStorage.getItem("cart")) || [];

//     if (cart.length === 0) {
//         cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
//     } else {
//         const itemList = document.createElement("ul");
//         cart.forEach(item => {
//             const listItem = document.createElement("li");
//             listItem.textContent = `${item.name} - RS ${item.price}`;
//             itemList.appendChild(listItem);
//         });
//         cartItemsContainer.appendChild(itemList);
//     }
// });




document.addEventListener("DOMContentLoaded", () => {
    const cartItemsContainer = document.getElementById("cart-items");
    const grandTotalElement = document.getElementById("grand-total");

    // Get cart from localStorage
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `<tr><td colspan="5">Your cart is empty.</td></tr>`;
    } else {
        let grandTotal = 0;
        cart.forEach(item => {
            const row = document.createElement("tr");
            const totalPrice = item.price * item.quantity;
            grandTotal += totalPrice;

            row.innerHTML = `
                <td>${item.name}</td>
                <td>${item.price}</td>
                <td>
                    <button class="decrease-quantity" data-id="${item.id}">-</button>
                    ${item.quantity}
                    <button class="increase-quantity" data-id="${item.id}">+</button>
                </td>
                <td>${totalPrice}</td>
                <td><button class="remove-item" data-id="${item.id}">Remove</button></td>
            `;
            cartItemsContainer.appendChild(row);
        });

        grandTotalElement.textContent = `Grand Total: RS ${grandTotal}`;
    }

    // Event delegation for quantity adjustments and remove
    cartItemsContainer.addEventListener("click", (e) => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        const target = e.target;
        const productId = target.dataset.id;

        if (target.classList.contains("increase-quantity")) {
            const item = cart.find(item => item.id === productId);
            item.quantity++;
        } else if (target.classList.contains("decrease-quantity")) {
            const item = cart.find(item => item.id === productId);
            if (item.quantity > 1) {
                item.quantity--;
            } else {
                cart.splice(cart.indexOf(item), 1);
            }
        } else if (target.classList.contains("remove-item")) {
            const itemIndex = cart.findIndex(item => item.id === productId);
            cart.splice(itemIndex, 1);
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        location.reload(); // Reload to update the cart display
    });
});
