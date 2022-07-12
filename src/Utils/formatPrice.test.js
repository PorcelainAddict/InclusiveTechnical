// const formattedPrice = require('./formatPrice');
import { formattedPrice } from './formatPrice';

test('Formats price into sterling with two decimals', () => {
    expect(formattedPrice(32.4)).toBe('£32.40');
});
