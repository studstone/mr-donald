import React from 'react';
import styled from 'styled-components';
import dbMenu from './DBMenu';
import ListItem from './ListItem';

const MenyStyled = styled.main`
    background-color: #ccc;
    margin-top: 80px;
`;

const SectionMenu = styled.section`
    padding: 25px;
`

const SectionTitle = styled.h2`
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 53px;
    color: #000000;
`

const Menu = () => {
    return (
        <MenyStyled>
            <SectionMenu>
                <SectionTitle>Бургеры</SectionTitle>
                <ListItem itemList={dbMenu.burger} />
            </SectionMenu>

            <SectionMenu>
                <SectionTitle>Закуски / напитки</SectionTitle>
                <ListItem itemList={dbMenu.other} />
            </SectionMenu>
        </MenyStyled>
    );
}

export default Menu;
