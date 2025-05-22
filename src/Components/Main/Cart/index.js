import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/action/index';
import { ArticleCart, CardCart, CartP, RemovetButton, TitleCart } from './styles';

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    // Total de productos
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    // Total a pagar
    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <ArticleCart>
            <TitleCart>Carrito de Compras</TitleCart>
            {cart.length === 0 ? (
                <p>Carrito vacío</p>
            ) : (
                <>
                    {cart.map((item) => (
                        <CardCart key={item.id}>
                            <img src={item.img} alt={item.name} width={100} />
                            <CartP>
                                {item.name} - ${item.price} x {item.quantity} = ${item.price * item.quantity}
                            </CartP>
                            <RemovetButton onClick={() => dispatch(removeFromCart(item.id))}>
                                Quitar
                            </RemovetButton>
                        </CardCart>
                    ))}
                    <h3>Total de productos: {totalItems}</h3>
                    <h3>Total a pagar: ${totalPrice.toFixed(2)}</h3>
                </>
            )}
        </ArticleCart>
    );
};

export default Cart;