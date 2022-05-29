import React from 'react';
import styled from 'styled-components';
import logoImage from '../image/logo.svg';
import logoButton from '../image/logo-button.svg';

const NavBarStyled = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    padding: 13px 25px;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #299B01;
    color: white;
`
const Logo = styled.div`
    display: flex;
    align-items: center;
    width: 50px;
    height: 50px;
`
const HeaderTitle = styled.h1`
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 42px;
`
const ImgLogo = styled.img`
    margin-right: 10px;
`

const HeaderButton = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    border: none;
    background-color: transparent;
    color: inherit;
    font-style: normal;
    font-size: 16px;
    line-height: 19px;
`
const IconButton = styled.img`
    width: 32px;
    height: 32px;
`


const NavBar = () => {
    return (
        <NavBarStyled>
            <Logo>
                <ImgLogo src={logoImage} alt="Icon: Logo" />
                <HeaderTitle>MrDonal's</HeaderTitle>
            </Logo>
            <HeaderButton>
                <IconButton src={logoButton} alt="Icon: User" />
                войти
            </HeaderButton>
        </NavBarStyled>
    );
}

export default NavBar;
