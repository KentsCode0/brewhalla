// Function to load cart items and display them
function loadCartItems() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let totalAmountContainer = document.getElementById('total-amount');
    totalAmountContainer.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price * item.quantity;
        totalAmountContainer.innerHTML += `
            <div class"items">
                <h4>${item.name} - ₱ ${item.price} x ${item.quantity}</h4>
                </div>
            </div>
        `;
    });

    totalAmountContainer.innerHTML += `
        <h4>_____________________</h4>
        <h4>TOTAL ₱ ${total.toFixed(2)}</h4>
    `;
}

// Function to update the quantity of an item
function updateQuantity(index, change) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart[index]) {
        cart[index].quantity += change;
        if (cart[index].quantity <= 0) {
            cart.splice(index, 1);
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        loadCartItems();
        updateCartCount();
    }
}

// Function to complete the payment
function completePayment() {
    let selectedMethod = document.querySelector('input[name="method"]:checked');
    if (!selectedMethod) {
        alert("Please select a payment method.");
        return;
    }
    alert(`Payment completed using ${selectedMethod.value}`);
    
    // Clear the cart after payment
    localStorage.removeItem('cart');
    updateCartCount();
    window.location.href = './index.html';
}

// Function to update cart count in the header
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelector('.cart-count').innerText = `[ ${totalCount} ]`;
}

// Load cart items on page load
loadCartItems();

// Attach event listener to complete payment button
document.getElementById('complete-payment').addEventListener('click', completePayment);
