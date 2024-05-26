document.addEventListener('DOMContentLoaded', () => {
    const menuItems = JSON.parse(localStorage.getItem('menuItems')) || [];

    const coffeeSection = document.getElementById('coffee-section');
    const pastrySection = document.getElementById('pastry-section');
    const pastaSection = document.getElementById('pasta-section');

    menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'outer-box';
        menuItem.innerHTML = `
            <div class="txt-container">
                <div class="coffee">
                    <img src="${item.image}" alt="${item.name}">
                    <p style="margin-top: 10px; margin-bottom: 0;">${item.name}</p>
                </div>
                <div class="main-inner-box">
                    <div class="inner-box-left">
                        <div class="price">₱${item.price}</div>
                    </div>
                    <div class="inner-box-right">
                        <div class="addtocart-btn"><button>REMOVE</button></div>
                    </div>
                </div>
            </div>
        `;

        menuItem.querySelector('button').addEventListener('click', () => {
            removeMenuItem(item);
        });

        switch (item.category) {
            case '1':
                coffeeSection.appendChild(menuItem);
                break;
            case '2':
                pastrySection.appendChild(menuItem);
                break;
            case '3':
                pastaSection.appendChild(menuItem);
                break;
        }
    });
});

function removeMenuItem(itemToRemove) {
    let menuItems = JSON.parse(localStorage.getItem('menuItems')) || [];
    menuItems = menuItems.filter(item => item.name !== itemToRemove.name || item.price !== itemToRemove.price || item.category !== itemToRemove.category);
    localStorage.setItem('menuItems', JSON.stringify(menuItems));
    localStorage.clear();
    location.reload();
}
