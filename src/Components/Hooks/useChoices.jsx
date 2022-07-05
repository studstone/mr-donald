import { useState } from "react";

const useChoise = () => {

    const [choice, setChoice] = useState();

    const changeChoices = e => {
        setChoice(e.target.value);
    };

    return { choice, changeChoices };
};

export default useChoise;
