import formatPrice from './formatPrice';

test('Formats price into sterling with two decimals', () => {
    expect(formatPrice(32.4)).toBe('£32.40');
});
