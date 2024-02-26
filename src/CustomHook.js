import {useEffect, useState} from "react";

const useCustomCounter = () => { // Custom hook can also call multiple times but the custom hooks are independent to each other.
    const [count2, setCount] = useState(0);

    useEffect(() => {
        console.log("UseEffect Called From Custom Hook!");
    });

    const handleIncrement = () => {
        setCount(count2 + 1);
    };

    console.log("Event Handler Method of Custom Hook is Calling");

    // return { // We can pass array also, but object passing would be easy one.
    //     count2, // count is the key here => return an object over here.
    //     handleIncrement, // handleIncrement is the key here => return an object over here.
    // };
    return([count2, handleIncrement]); // How to pass a function in a react element.
};
export default useCustomCounter;