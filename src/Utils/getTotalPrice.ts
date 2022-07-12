import { Cart } from '../Models/cart';

export const getTotalPrice = (cartArray: Cart[]) => {
    const price = 0;
    const sumWithPrice = cartArray.reduce(
        (prevValue, currValue) => prevValue + currValue.products.price,
        price
    );

    return sumWithPrice;
};
