import React from 'react';
import styled from 'styled-components';

const CountWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    & span {
        font: normal 400 21px/25px Roboto, sans-serif;
        margin-right: auto;
    }
`;

const CountInpyt = styled.input`
    padding: 5px;
    width: 40px;
    height: 30px;
    border: 1px solid #299B01;
    border-radius: 6px;
    font: normal 400 21px/25px Roboto, sans-serif;
    text-align: center;
    outline: none;
`;

const ButtonCountMinus = styled.button`
    width: 25px;
    height: 25px;
    background-color: transparent;
    border: 1px solid #299B01;
    border-radius: 6px;
    font: normal 400 15px/17px Roboto, sans-serif;
    text-align: center;
    margin-right: 5px;
    &:hover {
        background-color: #299B01;
        border: none;
        color: white;
        transition: all 0.5s ease-in-out;
    }
`;

const ButtonCountPlus = styled.button`
    width: 25px;
    height: 25px;
    background-color: transparent;
    border: 1px solid #299B01;
    border-radius: 6px;
    font: normal 400 15px/17px Roboto, sans-serif;
    text-align: center;
    margin-left: 5px;
    &:hover {
        background-color: #299B01;
        border: none;
        color: white;
        transition: all 0.5s ease-in-out;
    }
`;

function CountItem({ count, setCount, onChange }) {

    return (
        <CountWrapper>
            <span>Колличество</span>
            <ButtonCountMinus disabled={count <= 1} onClick={() => setCount(count - 1)}>-</ButtonCountMinus>
            <CountInpyt type='number' min='1' max='100' value={count < 1 ? 1 : count} onChange={onChange} />
            <ButtonCountPlus onClick={() => setCount(count + 1)}>+</ButtonCountPlus>
        </CountWrapper>
    );
}

export default CountItem;
