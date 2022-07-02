import { useState } from 'react';

const getTopping = toppings => toppings.map(item => ({
    name: item,
    checked: false
}))

const useToppings = () => {

    const [topings, setTopings] = useState(null);

    const checkToppings = index => {
        setTopings(topings.map((item, i) => {
            if (i === index) {
                item.checked = !item.checked
            }
            return item
        }))
    }

    return { topings, checkToppings }
}

export default useToppings;