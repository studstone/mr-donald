import React from 'react'
import styled from 'styled-components';

const Title = styled.h1`
    width: 100%;
    font: normal 400 24px/42px Pacifico, cursive;
    text-align: left;
`
const TopingWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`
const TopingLable = styled.label`
    padding-left: 66px;
    font: normal 400 20px/23px Roboto, sans-serif;
    width: 50%;
    display: flex;
    margin-bottom: 10px;
    &:nth-last-child(2) {
        margin-bottom: 0;
    }
    &:last-child {
        margin-bottom: 0;
    }
`
const TopingCheckbox = styled.input`
    cursor: pointer;
    margin: 0;
    margin-right: 13px;
    width: 24px;
    height: 24px;
    outline: none;
`

function Topings() {
    return (
        <>
            <Title>Добавки</Title>
            <TopingWrapper>
                <TopingLable>
                    <TopingCheckbox type='checkbox' />
                    ДопДопДопДоп
                </TopingLable>
            </TopingWrapper>
        </>
    )
}

export default Topings