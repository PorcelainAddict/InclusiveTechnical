import styled from 'styled-components';

const Header = () => {
    return (
        <>
            <NavBar>
                <LogoImg src="./moose.png" />
                <Logo>OUTDOORSIE</Logo>
            </NavBar>
        </>
    );
};

const NavBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 70px;
    width: 100%;
    background-color: #41658a;
`;

const LogoImg = styled.img`
    height: 65px;
    width: 65px;
`;

const Logo = styled.h1`
    font-size: 30px;
    color: #79b473;
`;

export default Header;
