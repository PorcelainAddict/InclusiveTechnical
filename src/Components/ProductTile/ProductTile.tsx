import styled from 'styled-components';
import { Product } from '../../Models/product';
import { StyledButton } from '../Buttons/Button';
import { formattedPrice } from '../../Utils/formatConfig';

interface ProductTileProps {
    product: Product;
    addToCart: (item: Product) => void;
}

const ProductTile = ({ product, addToCart }: ProductTileProps) => {
    const itemPrice = formattedPrice(product.price);

    return (
        <>
            <ProductContainer key={product.id}>
                <ProductImage src={product.image} />
                <ProductNameContainer>
                    <ProductName>{product.productName} - </ProductName>
                    <ProductColour fontColour={product.colour}>
                        {product.colour}
                    </ProductColour>
                </ProductNameContainer>
                <ProductDescription>{product.description}</ProductDescription>
                <ProductCategoryContainer>
                    <ProductGender>{product.category?.gender}</ProductGender>
                    <ProductActivity>
                        {product.category?.activity}
                    </ProductActivity>
                </ProductCategoryContainer>
                <OrderContainer>
                    <ProductPrice>{itemPrice}</ProductPrice>
                    {product.stock !== 0 && (
                        <ProductStock>{`In Stock ${product.stock}`}</ProductStock>
                    )}

                    {product.stock === 0 ? (
                        <OutOfStockMessage>
                            Sorry we are out of stock
                        </OutOfStockMessage>
                    ) : (
                        <StyledButton
                            onClick={() => addToCart(product)}
                            colour={'#70a37f'}
                            rounded={'30px'}
                            bkGroundColour={'#414073'}
                            width={'120px'}
                            height={'30px'}
                        >
                            {'Add to Cart'}
                        </StyledButton>
                    )}
                </OrderContainer>
            </ProductContainer>
        </>
    );
};

const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 2px green solid;
    border-radius: 15px;
    height: 20rem;
    padding: 2rem;
    width: 30rem;
    margin: 2rem;
    box-shadow: 6px 6px 25px #70a37f;
`;

const ProductImage = styled.img`
    height: 200px;
    width: 200px;
    margin: 0 0 0.5rem 0;
`;

const ProductNameContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
`;

const OutOfStockMessage = styled.p`
    font-size: 16px;
    margin: 0;
`;

const ProductName = styled.h1`
    display: flex;
    flex-direction: row;
    font-size: 20px;
    justify-content: start;
    margin: 5px;
`;

const ProductColour = styled.h6<{ fontColour: string }>`
    font-size: 20px;
    margin: 5px;
    font-weight: 200;
    //needs better theming - yellow too bright etc.
    color: ${(props) => (props.fontColour ? props.fontColour : '')};
`;

const ProductDescription = styled.h6`
    display: flex;
    flex-direction: row;
    justify-content: start;
    font-size: 10px;
    text-align: start;
    margin: 2px;
`;

const ProductCategoryContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

const ProductGender = styled.p`
    font-size: 20px;
`;

const ProductActivity = styled.p`
    font-size: 20px;
`;

const OrderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const ProductPrice = styled.p`
    font-size: 20px;
    margin: 2px;
`;

const ProductStock = styled.p`
    font-size: 20px;
    margin: 2px;
`;

export default ProductTile;
