import { useState } from "react";

const useCount = () => {
    const [count, setCount] = useState(1)

    const onChange = e => setCount(e.target.value)

    return { count, setCount, onChange }
}

export default useCount