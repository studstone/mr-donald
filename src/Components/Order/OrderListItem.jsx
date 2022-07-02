import React from 'react';
import styled from 'styled-components';
import { calcPrice, formatCurrency } from '../Function/secondoryFunction';
import '../../style/order-animation.css'
import TrashIcon from './TrashIcon';

const OrderItemStyled = styled.li`
    position: relative;
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
    padding: 0;
    width: 25px;
    height: 24px;
    background-color: transparent;
    border: none;
`

const OrderListItem = ({ order }) => {
    return (

        < OrderItemStyled className='active'>
            <ItemName>{order.name}</ItemName>
            <ItemCount>{order.count}</ItemCount>
            <ItemPrice>{formatCurrency(calcPrice(order))}</ItemPrice>
            <TrashButton>
                <TrashIcon />
            </TrashButton>
        </OrderItemStyled>
    );
}

export default OrderListItem;
