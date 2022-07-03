import { useState } from 'react';

const getTopping = toppings => toppings.map(item => ({
    name: item,
    checked: false
}))

const useToppings = openItem => {

    const [toppings, setTopings] = useState(getTopping(openItem.toppings));

    const checkToppings = index => {
        setTopings(toppings.map((item, i) => {
            if (i === index) {
                item.checked = !item.checked
            }
            return item
        }))
    }

    return { toppings, checkToppings }
}

export default useToppings;