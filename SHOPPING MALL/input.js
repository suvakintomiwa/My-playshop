// Store cart items
let cart = [];

// Add item to cart
function addToCart(productName, price) {
  const item = { name: productName, price: price };
  cart.push(item);
  updateCart();
}

// Update the cart display
function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const totalEl = document.getElementById("total");

  // Clear current list
  cartItems.innerHTML = "";

  let total = 0;
  cart.forEach((item, index) => {
    total += item.price;

    // Create list item
    const li = document.createElement("li");
    li.textContent = ${item.name} - $${item.price};

    // Add remove button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "❌";
    removeBtn.style.marginLeft = "10px";
    removeBtn.onclick = () => removeFromCart(index);

    li.appendChild(removeBtn);
    cartItems.appendChild(li);
  });

  totalEl.textContent = Total: $${total};
}

// Remove item from cart
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

// Checkout button
document.getElementById("checkout-btn").addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  alert("Thank you for your purchase!");
  cart = [];
  updateCart();
});