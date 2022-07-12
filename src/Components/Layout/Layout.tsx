import styled from 'styled-components';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { ReactNode } from 'react';

const StyledLayout = styled.div`
    font-size: 16px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0;
`;

const PageContainer = styled.div`
    margin: 0 auto;
    flex: 100%;
    flex: auto;
`;

type Props = {
    children: ReactNode;
};

export const Layout = ({ children }: Props) => {
    return (
        <StyledLayout>
            <Header />
            <PageContainer>{children}</PageContainer>
            <Footer />
        </StyledLayout>
    );
};
