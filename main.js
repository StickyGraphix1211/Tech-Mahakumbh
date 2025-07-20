let cart = [];

function addToCart(name, price) {
    cart.push({ name, price });
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart-list');
    const totalElem = document.getElementById('total');
    cartList.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ₹${item.price}`;
        cartList.appendChild(li);
        total += item.price;
    });
    totalElem.textContent = cart.length
        ? `Total: ₹${total}`
        : '';
}
