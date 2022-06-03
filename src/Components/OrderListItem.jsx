import React from 'react';
import styled from 'styled-components';
import TrashImage from '../image/trash.svg';
import TrashImagehHover from '../image/trash-hover.svg';

const OrderItemStyled = styled.li`
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 25px;
    &:last-child {
        margin-bottom: 0;
    }
`
const ItemName = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    flex-grow: 1;
`;

const ItemCount = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    margin-right: 30px;
`;

const ItemPrice = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    margin-right: 10px;
`

const TrashButton = styled.button`
    width: 24px;
    height: 24px;
    background-color: transparent;
    border: none;
    background-image: url(${TrashImage});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    &:hover {
        background-image: url(${TrashImagehHover});
        transition: .5s;
    }
`

const OrderListItem = ({ order }) => {
    return (

        < OrderItemStyled>
            <ItemName>{order.name}</ItemName>
            <ItemCount>2</ItemCount>
            <ItemPrice>{order.price.toLocaleString('ru-RU',
                { style: 'currency', currency: 'RUB' })}</ItemPrice>
            <TrashButton />
        </OrderItemStyled>
    );
}

export default OrderListItem;
