import { useState } from 'react';
import styled from 'styled-components';
import CartList from './CartList';
import { Cart } from '../../Models/cart';
import { Product } from '../../Models/product';
import { StyledButton } from '../Buttons/Button';

interface CartDrawerProps {
    items: Cart[];
    removeFromCart: (cart: Cart[], item: Product) => void;
}

const CartDrawer = ({ items, removeFromCart }: CartDrawerProps) => {
    const [showCart, setShowCart] = useState<boolean>(true);

    const handleShowCart = (shown: boolean) => {
        setShowCart(!shown);
    };

    return (
        <>
            {showCart ? (
                <CartContainer>
                    <CartList
                        items={items}
                        removeFromCart={removeFromCart}
                        visibleCart={handleShowCart}
                        showCart={showCart}
                    />
                </CartContainer>
            ) : (
                <StyledButton
                    height="40px"
                    width="160px"
                    position="sticky"
                    bottomPosition="10px"
                    margin="0 0 20px 0"
                    zIndex="3"
                    onClick={() => handleShowCart(showCart)}
                >
                    Cart
                </StyledButton>
            )}
        </>
    );
};

const CartContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: sticky;
    bottom: 0;
    width: 100%;
    z-index: 2;
`;

export default CartDrawer;
