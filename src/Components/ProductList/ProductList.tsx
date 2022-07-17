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
                    key={`product_identity_${product.id}_${i}`}
                    product={product}
                    addToCart={addToCart}
                />
            ))}
        </ProductGrid>
    );
};

//need to refactor to grid
const ProductGrid = styled.ul`
    display: flex;
    flex-direction: column;
`;

export default ProductList;
