// Function to add a product to cart
function addToCart(itemId, itemName, itemPrice, itemImage) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Check if item is already in the cart
    let itemIndex = cart.findIndex(item => item.id === itemId);
    if (itemIndex === -1) {
        // Add new item
        cart.push({ id: itemId, name: itemName, price: itemPrice, quantity: 1, image: itemImage });
    } else {
        // Update quantity
        cart[itemIndex].quantity += 1;
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

// Function to update cart count in the header
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelector('.cart-count').innerText = `[ ${totalCount} ]`;
}

// Call this function when the page load to update cart count
updateCartCount();

// Function to load cart items
function loadCartItems() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
        cartItemsContainer.innerHTML += `
            <div class="outer-box-img">
                <img src="${item.image}" alt="${item.name}">
                <div class="c-btn">
                    <h3>${item.name}: ₱${item.price} x ${item.quantity} = ₱${item.price * item.quantity}</h3>
                    <div class="button-row">
                    <button onclick="removeFromCart('${item.id}')">CANCEL</button>
                    <button onclick="addQuantity('${item.id}')">ADD</button>
                    </div>
                </div>
            </div>
        `;
    });

    document.getElementById('total-price').innerText = `TOTAL: ₱ ${total}`;
}

// Function to remove item from cart
function removeFromCart(itemId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let itemIndex = cart.findIndex(item => item.id === itemId);
    if (itemIndex !== -1) {
        cart[itemIndex].quantity -= 1;
        if (cart[itemIndex].quantity === 0) {
            cart.splice(itemIndex, 1);
        }
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCartItems();
    updateCartCount();
}

// Function to add quantity of item in cart
function addQuantity(itemId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let itemIndex = cart.findIndex(item => item.id === itemId);
    if (itemIndex !== -1) {
        cart[itemIndex].quantity += 1;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCartItems();
    updateCartCount();
}

// Function to clear cart
function clearCart() {
    localStorage.removeItem('cart');
    loadCartItems();
    updateCartCount();
}

// Load cart items on page load
loadCartItems();
