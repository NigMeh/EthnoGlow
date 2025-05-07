
function addToCart(productName, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existing = cart.find(item => item.name === productName);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ name: productName, price, qty: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${productName} added to cart!`);
}

function loadCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartItemsDiv = document.getElementById("cart-items");
  const cartTotalDiv = document.getElementById("cart-total");

  if (cart.length === 0) {
    cartItemsDiv.innerHTML = "<p>Your cart is empty.</p>";
    cartTotalDiv.innerHTML = "";
    return;
  }

  let total = 0;
  cartItemsDiv.innerHTML = "";
  cart.forEach(item => {
    total += item.price * item.qty;
    cartItemsDiv.innerHTML += `
      <div>
        <strong>${item.name}</strong> - ₹${item.price} × ${item.qty}
      </div>`;
  });

  cartTotalDiv.innerText = `Total: ₹${total}`;
}

if (document.readyState !== "loading") {
  loadCart();
} else {
  document.addEventListener("DOMContentLoaded", loadCart);
}
