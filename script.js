const addToCartButtons = document.querySelectorAll('.addToCartBtn');

addToCartButtons.forEach(button => {
button.addEventListener('click', () => {
alert('¡Producto añadido al carrito!');
});
});
