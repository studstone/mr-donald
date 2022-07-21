import React from 'react';
import styled from 'styled-components';
import { calcPrice, formatCurrency } from '../Function/secondoryFunction';
import '../../style/order-animation.css';
import TrashIcon from './TrashIcon';

const OrderItemStyled = styled.li`
    position: relative;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    margin-bottom: 25px;
    &:last-child {
        margin-bottom: 0;
    }
`;
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
`;

const TrashButton = styled.button`
    padding: 0;
    width: 25px;
    height: 24px;
    background-color: transparent;
    border: none;
`;

const ToppingsName = styled.p`
    color: #9a9a9a;
    font-size: 14px;
    width: 100%;
    margin-top: 5px;
`;

const OrderListItem = ({ order, index, deleteItem, setOpenItem, setActiveState }) => {
    const body = document.querySelector('body');

    const topping = order.topping.filter(item => item.checked)
        .map(item => item.name)
        .join(', ');

    return (

        < OrderItemStyled
            className='active'
            onClick={() => {
                setActiveState(true);
                setOpenItem({ ...order, index });
                body.style.overflow = 'hidden';
            }}
        >
            <ItemName>{order.name} {order.choice}</ItemName>
            <ItemCount>{order.count}</ItemCount>
            <ItemPrice>{formatCurrency(calcPrice(order))}</ItemPrice>
            <TrashButton onClick={() => deleteItem(index)} >
                <TrashIcon />
            </TrashButton>
            {topping && <ToppingsName>Допы: {topping}</ToppingsName>}
        </OrderItemStyled>
    );
};

export default OrderListItem;
