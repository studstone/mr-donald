import { useState } from "react";

const useChoise = openItem => {

    const [choice, setChoice] = useState(openItem.choices);

    const changeChoices = e => {
        setChoice(e.target.value);
    };

    return { choice, changeChoices };
};

export default useChoise;
