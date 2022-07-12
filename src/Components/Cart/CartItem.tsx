import { Product } from '../../Models/product';
import styled from 'styled-components';

interface CartItemProps {
    item: Product;
}

const CartItem = ({ item }: CartItemProps) => {
    return (
        <Item>
            {`${item.category.gender} ${item.category.activity} ${item.productName}`}
        </Item>
    );
};

const Item = styled.h6`
    font-size: 16px;
`;

export default CartItem;
