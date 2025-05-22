
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../redux/action/index';
import { AddCartButton, ProductArticle, ProductCard, ProductImg, ProductName } from './styles';

const ProductList = () => {
    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();

    return (
        <ProductArticle>
            {products.map((product) => (
                <ProductCard key={product.id}>
                    <ProductImg src={product.img} alt={product.name} width={100} />
                    <ProductName>{product.name} - ${product.price}</ProductName>
                    <AddCartButton onClick={() => dispatch(addToCart(product))}>
                        Agregar al carrito
                    </AddCartButton>
                </ProductCard>
            ))}
        </ProductArticle>
    );
};

export default ProductList;
