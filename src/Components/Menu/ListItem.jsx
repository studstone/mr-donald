import React from 'react';
import styled from 'styled-components';
import { formatCurrency } from '../Function/secondoryFunction';

const List = styled.ul`
    display: flex;
    justify-content: space-between;
    row-gap: 31px;
    flex-wrap: wrap;
`;

const Item = styled.li`
    position: relative;
    width: 400px;
    height: 155px;
    background-image: ${({ img }) => `url(${img})`};
    background-position: center;
    background-size: cover;
    padding: 15px;
    color: white;
    z-index: 1;
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 35px;
    color: #FFFFFF;
    &::after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: black;
        opacity: 50%;
        z-index: -1;
    }
    &:hover {
        cursor: pointer;
        box-shadow: inset 0 0 10px 10px rgba(0,0,0,0.7);
        transition: .3s;
        &::after {
            opacity: 0;
        }
    }
`;

const ListItem = ({ itemList, setOpenItem, setActiveState }) => {
    const body = document.querySelector('body')

    return (
        <List>
            {itemList.map(item => (
                <Item
                    key={item.id}
                    img={item.img}
                    onClick={() => {
                        setActiveState(true);
                        setOpenItem(item);
                        body.style.overflow = 'hidden';
                    }}
                >
                    <p>{item.name}</p>
                    <p>{formatCurrency(item.price)}</p>
                </Item>
            ))}
        </List>
    );
}

export default ListItem;
