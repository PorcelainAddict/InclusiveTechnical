//import JSON data here.
import { productData } from '../../static/productsData';
import { useState } from 'react';
import ProductList from '../../Components/ProductList/ProductList';
import styled from 'styled-components';
import { Product } from '../../Models/product';
import CartDrawer from '../../Components/Cart/CartDrawer';
import { Cart } from '../../Models/cart';

const ProductPage = () => {
    //To do: refactor productList --> unneccessary
    const [productList, setProductList] = useState(productData);
    const [cart, setNewCart] = useState<Cart[]>([]);

    const addItemToCart = (item: Product) => {
        const addToCart = setNewCart((cart) => [{ products: item }, ...cart]);
        return addToCart;
    };

    const removeItemFromCart = (cart: Cart[], item: Product) => {
        const newCart = [...cart];
        const spliceCart = newCart.splice(
            newCart.findIndex((elemment) => elemment.products.id === item.id),
            1
        );

        setNewCart(newCart);
        return spliceCart;
    };

    return (
        <>
            <Container>
                <ProductList products={productList} addToCart={addItemToCart} />
                <CartDrawer items={cart} removeFromCart={removeItemFromCart} />
            </Container>
        </>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export default ProductPage;
