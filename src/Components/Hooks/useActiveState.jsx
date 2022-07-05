import { useState } from 'react';

const useActiveState = () => {

    const [activeState, setActiveState] = useState(true);

    return { activeState, setActiveState };
};

export default useActiveState;
