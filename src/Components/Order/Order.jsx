import React from 'react';
import styled from 'styled-components';
import ButtonCheckout from '../Button/ButtonCheckout';
import { calcPrice, formatCurrency } from '../Function/secondoryFunction';
import OrderListItem from './OrderListItem';

const OrderStyled = styled.section`
    position: fixed;
    padding: 23px 14px 23px 21px;
    top: 80px;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    width: 380px;
    height: calc(100% - 80px);
    box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.25);
    color: #000000;
`;
const OrderTitle = styled.h1`
    font-style: normal;
    font-weight: 400;
    font-size: 39px;
    line-height: 68px;
    text-transform: uppercase;
    margin-bottom: 15px;
`;

const OrderContent = styled.div`
    flex-grow: 1;
    width: 100%;
`;
const OrderList = styled.ul`
`;
const Total = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 15px;
`;
const TotalName = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    flex-grow: 1;
`;

const TotalCount = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    margin-right: 30px;
`;

const TotalPrice = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    margin-right: 10px;
`;

const EmtyList = styled.p`
    text-align: center;
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 25px;
`;

const Order = ({ orders, setOrders, setOpenItem, setActiveState }) => {

    const deleteItem = index => {
        const newOrders = orders.filter((item, i) => index !== i);
        setOrders(newOrders);
    };

    const total = orders.reduce((res, order) =>
        calcPrice(order) + res, 0);
    const totalCounter = orders.reduce((res, order) =>
        order.count + res, 0);

    return (
        <OrderStyled >
            <OrderTitle>Ваш Заказ</OrderTitle>
            <OrderContent>
                {orders.length ?
                    <OrderList>
                        {orders.map((order, index) => <OrderListItem
                            key={index}
                            order={order}
                            deleteItem={deleteItem}
                            index={index}
                            setOpenItem={setOpenItem}
                            setActiveState={setActiveState}
                        />
                        )}
                    </OrderList> :
                    <EmtyList>Список заказов пуст</EmtyList>
                }
            </OrderContent>
            <Total>
                <TotalName>Итого:</TotalName>
                <TotalCount>{totalCounter}</TotalCount>
                <TotalPrice>{formatCurrency(total)}</TotalPrice>
            </Total>
            <ButtonCheckout>Оформить</ButtonCheckout>
        </OrderStyled>
    );
};

export default Order;
