import styled from 'styled-components';

const Footer = () => {
    return (
        <>
            <FooterBar>
                <Logo>OUTDOORSIE</Logo>
            </FooterBar>
        </>
    );
};

const FooterBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: sticky;
    bottom: 0;
    height: 70px;
    width: 100%;
    background-color: #41658a;
    z-index: 1;
`;

const Logo = styled.h1`
    font-size: 30px;
    color: #79b473;
`;
export default Footer;
