export const formatConfig = {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 2,
    currencyDisplay: 'symbol',
};

export const formattedPrice = (price: number) =>
    new Intl.NumberFormat('en-GB', formatConfig).format(price);
