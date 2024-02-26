import React, {forwardRef, useState} from "react";
import { useImperativeHandle } from "react";

const UseImperativeHandleHook = forwardRef((props, ref) => {
    const [count, setCount] = useState(0);

    const decrement = () => {
        setCount(count - 1);
    }

    useImperativeHandle(ref, () => ({
        decrement
    }));

    return(
        <div>
            <h1>Child Component</h1>
            <h2>{count}</h2>
        </div>
    );
});
export default UseImperativeHandleHook;