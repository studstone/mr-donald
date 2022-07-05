import React from 'react';
import {
    AdditivesCheckBox, AdditivesLable, AdditivesWrapper,
    CustomCheckBox, Title
} from '../StyledComponents/Additives';



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
    );
}

export default Topings;
