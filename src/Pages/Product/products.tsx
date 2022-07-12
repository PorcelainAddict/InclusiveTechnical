//import JSON data here.
import { productData } from '../../static/productsData';
import { useState } from 'react';
import ProductList from '../../Components/ProductList/ProductList';
import styled from 'styled-components';
import { Product } from '../../Models/product';
import CartDrawer from '../../Components/Cart/CartDrawer';
import { Cart } from '../../Models/cart';

const ProductPage = () => {
    const [productList, setProductList] = useState(productData);
    const [cart, SetNewCart] = useState<Cart[]>([]);

    const addItemToCart = (item: Product) => {
        //Add to Cart Array
        const addToCart = SetNewCart((cart) => [{ products: item }, ...cart]);
        // const newCart = SetNewCart(cart.concat({ products: item }));

        //could add function here to reduce stock if added to stock. Though I think this would make more sense on purchase.

        return addToCart;
    };

    //Remove From Cart Array

    const removeItemFromCart = (cart: Cart[], item: Product) => {
        const newCart = [...cart];
        const updateCart = newCart.forEach((cartItem, index) => {
            if (cartItem.products.id === item.id) {
                const updatedCart = cart.splice(index, 1);
                console.log('updatedCart', updatedCart);
                return updatedCart;
            }
        });
        SetNewCart(newCart);
        return updateCart;
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
