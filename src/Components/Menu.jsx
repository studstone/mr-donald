import React from 'react';
import styled from 'styled-components';
import BanerItem from './BanerItem';
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

const Menu = ({ setOpenItem, setActiveState }) => {
    return (
        <MenyStyled>
            <BanerItem />
            <SectionMenu>
                <SectionTitle>Бургеры</SectionTitle>
                <ListItem
                    itemList={dbMenu.burger}
                    setOpenItem={setOpenItem}
                    setActiveState={setActiveState}
                />
            </SectionMenu>

            <SectionMenu>
                <SectionTitle>Закуски / напитки</SectionTitle>
                <ListItem
                    itemList={dbMenu.other}
                    setOpenItem={setOpenItem}
                    setActiveState={setActiveState}
                />
            </SectionMenu>
        </MenyStyled>
    );
}

export default Menu;
