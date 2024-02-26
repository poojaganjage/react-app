import React, {useContext} from "react";
import { CounterContext } from "./CounterContext";

const FComponent = (props) => {
    //const value = useContext(CounterContext);
    const {counter, setCounter} = useContext(CounterContext);
    return(
        <div>
            <h1>Function Component</h1>
            {/*<h2>{props.counter}</h2>
            <CounterContext.Consumer>
                {(value) => {
                    return <h3>Hello : {value}</h3>
                }}
            </CounterContext.Consumer>
            <h2>Hello : {value}</h2>
            <FChild counter={props.counter}/>*/}
            <h2>counter : {counter}</h2>
            <button onClick={() => {setCounter(counter + 1)}}>Increment Counter</button>
            <FChild />
        </div>
    );
}

const FChild = (props) => {
    return(
        <div>
            <h1>Function Child Component</h1>
            {/*<h2>{props.counter}</h2>*/}
        </div>
    );
}
export default FComponent;