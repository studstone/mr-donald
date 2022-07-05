import React from 'react'
import styled from 'styled-components';
import { AdditivesCheckBox, AdditivesLable, AdditivesWrapper, Title } from '../StyledComponents/Additives';

const CustomCheckBox = styled.span`
    width: 24px;
    height: 24px;
    border: 1px solid #299B01;
    border-radius: 6px;
    margin-right: 10px;
    background-color: #f0f0f0;
    background-image: none;
`

function Topings({ toppings, checkToppings }) {
    return (
        <>
            <Title>Добавки</Title>
            <AdditivesWrapper>
                {toppings.map((item, i) => (
                    <AdditivesLable key={i}>
                        <AdditivesCheckBox
                            type='checkbox'
                            checked={item.checked}
                            onChange={() => checkToppings(i)}
                            checkbox
                        />
                        <CustomCheckBox />
                        {item.name}
                    </AdditivesLable>
                ))}
            </AdditivesWrapper>
        </>
    )
}

export default Topings