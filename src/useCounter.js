import {useState} from "react";

export default function useCounter(initialValue, value1) {
    const [value, setValue] = useState(initialValue, value1);

    const increment = () => {
        setValue(value);
        setValue((value) => {
            return value + value1;
        });
    }

    const decrement = () => {
        return setValue(value - 1);
    }

    const reset = () => {
        return setValue(initialValue);
    }

    return({value, increment, decrement, reset});
}