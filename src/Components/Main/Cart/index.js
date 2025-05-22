
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/action/index';
import { ArticleCart, CardCart, CartP, RemovetButton, TitleCart } from './styles';

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    return (
        <ArticleCart>
            <TitleCart>Carrito de Compras</TitleCart>
            {cart.length === 0 ? (
                <p>Carrito vacío</p>
            ) : (
                cart.map((item) => (
                    <CardCart key={item.id}>
                    <img src={item.img} alt={item.name} width={100} />
                        <CartP>{item.name} - ${item.price}</CartP>
                        <RemovetButton onClick={() => dispatch(removeFromCart(item.id))}>
                            Quitar
                        </RemovetButton>
                    </CardCart>
                ))
            )}
        </ArticleCart>
    );
};

export default Cart;
