import styled from 'styled-components';
import { Product } from '../../Models/product';
import { StyledButton } from '../Buttons/Button';
import { formattedPrice } from '../../Utils/formatConfig';
import { Cart } from '../../Models/cart';
import CartItem from '../Cart/CartItem';
import { getTotalPrice } from '../../Utils/getTotalPrice';
import { useState } from 'react';

interface CartListProps {
    items: Cart[];
    removeFromCart: (cart: Cart[], product: Product) => void;
    visibleCart: (show: boolean) => void;
    showCart: boolean;
}

const CartList = ({
    items,
    removeFromCart,
    visibleCart,
    showCart,
}: CartListProps) => {
    const [discountApplied, setDiscountApplied] = useState<boolean>(false);
    const cartPrice = getTotalPrice(items);
    const totalCartPrice = formattedPrice(cartPrice);

    const withDiscount = (price: number) => {
        const discount =
            price > 50
                ? formattedPrice(price - 10)
                : items.find((cat) => {
                      if (
                          price > 75 &&
                          cat.products.category.gender === 'womens' &&
                          cat.products.category.activity === 'cycling'
                      ) {
                          price - 15;
                      }
                  });
        return discount;
    };

    const priceText = withDiscount(cartPrice);

    console.log('cartItems', items);

    return (
        <>
            <Container>
                <TotalPrice>{`${totalCartPrice}`}</TotalPrice>
                <RowContainer>
                    {items.map((item, i) => (
                        <CartItemRow key={`item_identity_${i}`}>
                            <CartItem item={item.products} />
                            <StyledButton
                                onClick={() =>
                                    removeFromCart(items, item.products)
                                }
                            />
                        </CartItemRow>
                    ))}
                </RowContainer>
                <ButtonContainer>
                    <StyledButton
                        onClick={() => visibleCart(showCart)}
                        color="white"
                        position="sticky"
                        topPosition="0"
                    >
                        X
                    </StyledButton>
                </ButtonContainer>
            </Container>
        </>
    );
};

const TotalPrice = styled.h2`
    font-size: 16px;
    display: flex;
    justify-content: center;
    position: sticky;
    top: 0;
    margin: 40px;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin: 10px;
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #70a37f;
    border: 3px solid grey;
    border-radius: 20px;
    max-height: 40vh;
    overflow-y: scroll;
    scrollbar-width: none;
`;

const RowContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
`;

const CartItemRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 70%;
`;

export default CartList;
