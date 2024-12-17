// Array to store cart items
let cart = [];

// Function to update the cart count and total
function updateCart() {
    // Update cart count
    document.getElementById('cart-count').innerText = cart.length;

    // Update cart total
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    document.getElementById('cart-total').innerText = total.toFixed(2);

    // Update cart items in the cart section
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = ''; // Clear current items

    cart.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `${item.name} - $${item.price.toFixed(2)} <button onclick="removeFromCart('${item.name}')">Remove</button>`;
        cartItems.appendChild(li);
    });
}

// Function to toggle the cart section visibility
function toggleCart() {
    const cartSection = document.getElementById('cart-section');
    cartSection.style.display = cartSection.style.display === 'none' ? 'block' : 'none';
}

// Function to add item to the cart
function addToCart(name, price) {
    cart.push({ name, price });
    updateCart();
}

// Function to remove item from the cart
function removeFromCart(name) {
    cart = cart.filter(item => item.name !== name);
    updateCart();
}

// Function to clear the cart
function clearCart() {
    cart = [];
    updateCart();
}

// Add event listeners to all "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (event) => {
        const name = event.target.getAttribute('data-name');
        const price = parseFloat(event.target.getAttribute('data-price'));
        addToCart(name, price);
    });
});
