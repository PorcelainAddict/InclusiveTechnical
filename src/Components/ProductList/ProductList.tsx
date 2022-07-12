import styled from 'styled-components';
import ProductTile from '../ProductTile/ProductTile';
import { Product } from '../../Models/product';

interface ProductListProps {
    products: Product[];
    addToCart: (item: Product) => void;
}

const ProductList = ({ products, addToCart }: ProductListProps) => {
    return (
        <ProductGrid>
            {products.map((product, i) => (
                <ProductTile
                    key={`product_identity_${i}`}
                    product={product}
                    addToCart={addToCart}
                />
            ))}
        </ProductGrid>
    );
};

const ProductGrid = styled.div`
    display: flex;
    flex-direction: column;
    grid-area: 1/3/4/4;
`;

export default ProductList;
