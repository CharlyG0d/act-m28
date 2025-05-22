// Agregar producto al carrito
export const addToCart = (product) => ({
    type: 'ADD_TO_CART',
    payload: product,
});

// Eliminar producto del carrito
export const removeFromCart = (id) => ({
    type: 'REMOVE_FROM_CART',
    payload: id,
});
