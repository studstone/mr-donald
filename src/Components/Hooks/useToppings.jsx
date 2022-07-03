import { useState } from 'react';

const getTopping = toppings => toppings.map(item => ({
    name: item,
    checked: false
}))

const useToppings = openItem => {

    const [toppings, setTopings] = useState(getTopping(openItem.toppings));


    const checkToppings = index => {
        setTopings(toppings.map((item, i) => {
            const newItem = { ...item }
            if (i === index) {
                newItem.checked = !newItem.checked
            }

            return newItem
        }))
    }
    return { toppings, checkToppings }
}

export default useToppings;