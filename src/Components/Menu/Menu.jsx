import React from 'react';
import styled from 'styled-components';
import BanerItem from './BanerItem';
import dbMenu from '../DBMenu';
import ListItem from './ListItem';

const MenyStyled = styled.main`
    background-color: #ccc;
    margin-top: 80px;
    margin-left: 380px;
`;

const SectionMenuWrapper = styled.div`
    padding: 17px 97px 217px 69px;
`;

const SectionMenu = styled.section`
    &:first-child {
        margin-bottom: 41px;
    }
`;

const SectionTitle = styled.h2`
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 53px;
    color: #000000;
    margin-bottom: 15px;
`;

const Menu = ({ setOpenItem, setActiveState }) => (
    <MenyStyled>
        <BanerItem />
        <SectionMenuWrapper>
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
        </SectionMenuWrapper>
    </MenyStyled>
);

export default Menu;
