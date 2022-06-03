import React from 'react';
import styled from 'styled-components';
import ButtonCheckout from './ButtonCheckout';
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
    min-width: 380px;
    height: calc(100% - 80px);
    box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.25);
    color: #000000;
`
const OrderTitle = styled.h1`
    font-style: normal;
    font-weight: 400;
    font-size: 39px;
    line-height: 68px;
    text-transform: uppercase;
    margin-bottom: 15px;
`

const OrderContent = styled.div`
    flex-grow: 1;
    width: 100%;
`
const OrderList = styled.ul`
`
const Total = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 15px;
`
const TotalName = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    flex-grow: 1;
`

const TotalCount = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    margin-right: 30px;
`

const TotalPrice = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    margin-right: 10px;
`

const Order = () => {
    return (
        <OrderStyled>
            <OrderTitle>Ваш Заказ</OrderTitle>
            <OrderContent>
                <OrderList>
                    <OrderListItem />
                    <OrderListItem />
                    <OrderListItem />
                </OrderList>
            </OrderContent>
            <Total>
                <TotalName>Итого:</TotalName>
                <TotalCount>5</TotalCount>
                <TotalPrice>250 Р</TotalPrice>
            </Total>
            <ButtonCheckout>Оформить</ButtonCheckout>
        </OrderStyled>
    );
}

export default Order;
