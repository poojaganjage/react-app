import React, {useState, useEffect} from "react";
import useCustomCounter from "./CustomHook";

const HookFunction = () => { // As many as times we can call useState hook function on the top level inside a function based component.
    const [name, setName] = useState("Pooja"); // Declaring a state variable. => Hook Function(Built-in).
    const nameStateVariable = useState("Purnima");
    const [roll, setRoll] = useState(101);
    const [[{title}], setTitle] = useState([{title: "React JS Application"}]);
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(20);
    //setName("Deepika"); // This is not allowed to update the state value because it goes to an infinite loop.

    useEffect(() => { // It also called at the top level, but if any depends array values mentioned then it won't called. It prints the message as array values are undefined.
        console.log("Use Effect Called!");
    }, [title]); // We can write also [count, count1]. Array can take any type of data such as number, string etc.

    const [count2, handleIncrement] = useCustomCounter(); // Calling Custom hook into another hook.
    const data1 = useCustomCounter();

    const handleClick = () => {
        setName("Deepika");
        nameStateVariable[1]("Atish");
        setRoll(105);
        setTitle([{title: "React"}]);
        setCount(count + 1);
    };

    const countHandleIncrement = () => {
        setCount(count + 1);
    };

    const countHandleDecrement = () => {
        setCount1(count1 - 1);
    };

    console.log("Event Handler Method is Calling!");

    return(
        <React.Fragment>
            <h1>{title}</h1>
            <h1>Hello: {name + " " + roll} <br></br> RollNo: {roll}</h1> {/*Accessing a state variable*/}
            <h1>Hello {nameStateVariable[0]}</h1>
            <button type="button" onClick={handleClick}>Change</button>
            
            <h1>Count Up: {count}</h1>
            <button tupe="button" onClick={countHandleIncrement} style={{marginLeft: "10px"}}>Count Increment</button>

            <h1>Count Down: {count1}</h1>
            <button type="button" onClick={countHandleDecrement}>Count Decrement</button>

            <h1>Custom Hook Count Up: {count2}</h1>
            <button type="button" onClick={handleIncrement}>Custom Hook Count Increment</button>

            <h1>Custom Hook Count Up: {data1.count2}</h1>
            <button type="button" onClick={data1.handleIncrement}>Custom Hook Count1 Increment</button>
        </React.Fragment>
    );
};
export default HookFunction;