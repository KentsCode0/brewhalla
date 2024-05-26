function previewImage(event) {
    const reader = new FileReader();
    reader.onload = function(){
        const output = document.getElementById('preview-img');
        output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
}

function createMenu() {
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const category = document.getElementById('menu-category').value;
    const imageUpload = document.getElementById('image-upload');
    
    if (name && price && category !== "0" && imageUpload.files.length > 0) {
        const reader = new FileReader();
        reader.onload = function(){
            const base64Image = reader.result;
            // Store image URL instead of base64 data
            const imageUrl = 'data:image/png;base64,' + btoa(base64Image);
            const menuItems = JSON.parse(localStorage.getItem('menuItems')) || [];
            menuItems.push({ name, price, category, image: imageUrl });
            localStorage.setItem('menuItems', JSON.stringify(menuItems));
            window.location.href = './addedmenus.html';
        };
        reader.readAsDataURL(imageUpload.files[0]);
    } else {
        alert('Please fill in all fields and select an image.');
    }
}


