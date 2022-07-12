import styled from 'styled-components';
import { Product } from '../../Models/product';
import { StyledButton } from '../Buttons/Button';
import { formattedPrice } from '../../Utils/formatPrice';
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
    //state for when working with discounts to display discount message
    const [discountApplied, setDiscountApplied] = useState<boolean>(false);
    const cartPrice = getTotalPrice(items);
    const totalCartPrice = formattedPrice(cartPrice);

    //function to determine whether discount is applied.
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

    return (
        <>
            <Container>
                <TotalPrice>{`${totalCartPrice}`}</TotalPrice>
                <RowContainer>
                    {items.map((item, i) => (
                        <CartItemRow key={`item_identity_${i}`}>
                            <CartItem item={item.products} />
                            <StyledButton
                                height="25px"
                                width="125px"
                                onClick={() =>
                                    removeFromCart(items, item.products)
                                }
                            >
                                Remove
                            </StyledButton>
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
    font-size: 18px;
    max-height: 30px;
    max-width: 50px;
    padding: 15px;
    display: flex;
    justify-content: center;
    background-color: white;
    border: 2px grey solid;
    border-radius: 20px;
    position: sticky;
    top: 0;
    margin: 3rem 1rem 5rem;
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
    margin: 4px 0 4px 0;
    background-color: #b1c7b8;
    border: 3px solid grey;
    border-radius: 20px;
    width: 100%;
`;

export default CartList;
