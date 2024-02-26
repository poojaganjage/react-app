import React, {useState, useEffect, useRef, useMemo, useCallback, useReducer} from "react";
import FComponent from "./FComponent";
import CComponent from "./CComponent";
import { CounterContext } from "./CounterContext";
//import { type } from "@testing-library/user-event/dist/type";

function initialValue() {
    console.log("Set Initial Value");
    return 0;
}

function factorial(n) {
    let i = 0;
    while(i < 200000000) {
        i++;
    }
    if(n < 0) {
        return 0;
    }
    if(n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

// const initialState = 0;
// function reducer(state, action) {
//     console.log("Reducer Rendered!");
//     switch(action.type) {
//         case "increment":
//             return state + 1;
//         case "decrement":
//             return state - 1;
//         default:
//             throw new Error();
//     }
// }

const initialState = [{id: Date.now(), name1: "Pooja", email: "pooja260895@gmail.com"}];
function reducer(state, action) {
    //console.log("Reducer Rendered!");
    switch(action.type) {
        case "add":
            return [...state, action.payload];
        case "delete":
            return state.filter((contact) =>{
                return contact.id !== action.payload.id;
            });
        default:
            throw new Error();
    }
}

const HooksExample = () => {
    const [name, setName] = useState("Pooja"); // if we change the value of a component it can re-render. 
    const [flag, setFlag] = useState(false);
    //const [steps, setSteps] = useState(0);
    // const [steps, setSteps] = useState(() => {
    //     console.log("Set Initial Value");
    //     return 0;
    // });
    const [steps, setSteps] = useState(initialValue()); // This can do when state value initialize by the heavy operations or by the api call.
    const [names, setNames] = useState([]);
    const [counter, setCounter] = useState(0);
    const [counter1, setCounter1] = useState(1);
    //const result = factorial(counter1);
    const result = useMemo(() => {
        console.log("Use Memo!");
        return factorial(counter1);
    }, [counter1]);
    console.log("Use Memo:", result);

    const [state, dispatch]= useReducer(reducer, initialState);
    console.log(state);
    const [name1, setName1] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        console.log("Component Mounted or updated");
    }, [steps]);

    useEffect(() => {
        console.log("useRef!");
        previousCounterRef.current = counter;
    }, [counter]);

    const inputElement = useRef(""); // if we change the value of a component it cannot re-render. 
    console.log(inputElement);
    const previousCounterRef = useRef("");
    
     //let name = "Pooja";
    const changeName = () => {
        // let name = "Deepika";
        // return name;
        // return setName("Deepika");
        return setFlag(true);
    }

    const increment = () => {
        // setSteps(steps + 1);
        // setSteps(steps + 1);
        setSteps((steps) => {
            console.log(steps);
            return steps + 1;
        });
        console.log(steps);
        setSteps((prevState) => {
            console.log(prevState);
           return prevState + 1;
        });
    }

    const decrement = () => {
        setSteps(steps - 1);
    }

    const addNames = (e) => {
        setName("");
        //setNames(names.push({id: names.length, name: name}));
        //setNames(names.push({id: names.length, name})); // we can write name as single which is possible in es6.
        setNames([...names, {id: names.length, name}]); // This is way correct in terms of array and object.
        e.preventDefault();
    }

    const resetInput = () => {
        setName("");
        inputElement.current.focus();
        //inputElement.current.value = "Deepika"; // This cannot be done.
    }

    // const displayName = () => {
    //     return name;
    // }

    const displayName = useCallback((greeting) => {
        return greeting + " " + name;
    }, [name]);

    console.log("Use Callback:", displayName);

    const addContact = (e) => {
        setName1("");
        setEmail("");
        const contact = {
            id: Date.now(),
            name1 : name1,
            email: email
        }
        dispatch({type: "add", payload: contact});
        e.preventDefault();
    }

    return(
        <div>
            <h2>Hello {name}</h2>
            <h2>Hello {flag ? name : ""}</h2>
            <button onClick={changeName}>Click Me</button>
            <hr></hr>
            
            <button onClick={increment}>+</button>
            <div>{steps}</div>
            <button onClick={decrement}>+</button>
            <hr></hr>

            {/*<form onSubmit={addNames}>
                <input type="text" value={name} placeholder="Add Names" onChange={(e) => { return setName(e.target.value)}}></input>
                <br /><br />
                <button>Add Names</button>
            </form>
            <hr></hr>

            <ul>
                {
                    names.map((item) => { 
                        return(<li key={item.id}>{item.name}</li>)
                    })
                }
            </ul>*/}
            <hr></hr>

            <form onSubmit={addNames}>
                <input type="text" value={name} autoComplete="off" ref={inputElement} onChange={(e) => { return setName(e.target.value)}}></input>
                <br /><br />
                <button onClick={resetInput}>Reset</button>
            </form>
            <div>My name is {name}</div>

            <div>
                <h1>Random Counter: {counter}</h1>
                {typeof previousCounterRef.current !== "undefined" && <h2>Previous Counter: {previousCounterRef.current}</h2>}
                <button onClick={() => {setCounter(Math.ceil(Math.random() * 100))}}>Random Number Generator</button>
            </div>
            <hr></hr>

            <h1>
                Factorial of: {counter1} is : <span>{result}</span>
            </h1>
            <div>
                <button onClick={() => {setCounter1(counter1 - 1)}}>Decrement</button>
                <button onClick={() => {setCounter1(counter1 + 1)}}>Increment</button>
            </div>
            <hr></hr>

            <div>
                <div>
                    <label>Enter Name:</label>
                </div>
                <input type="text" value={name} placeholder="Enter Name" onChange={(e) => {setName(e.target.value);}}></input>
            </div>

            {/*<DisplayName name={name}></DisplayName>*/}
            <DisplayName displayName={displayName}></DisplayName>
            <hr></hr>
            
            {/*<CounterContext.Provider value={name}>
                <FComponent counter={steps}/>
                <hr></hr>
                <CComponent counter={steps}/>
            </CounterContext.Provider>*/}

            <CounterContext.Provider value={{counter, setCounter}}>
                <FComponent />
            </CounterContext.Provider>
            <hr></hr>

            <div>
                <h1>Reducer Hook</h1>
                {/*<h2>{state}</h2>
                <button onClick={() => {dispatch({type: "increment"})}}>Increment</button>
                <button onClick={() => {dispatch({type: "decrement"})}}>Decrement</button>
                <hr></hr>*/}
                <form onSubmit={addContact}>
                    <input type="text" value={name1} placeholder="name" onChange={(e) => {setName1(e.target.value)}}></input>
                    <br /><br />
                    <input type="text" value={email} placeholder="email" onChange={(e) => {setEmail(e.target.value)}}></input>
                    <br /><br />
                    <button>Add Contact</button>
                </form>
                <hr></hr>
                <ul>
                    {
                        state.map((contact) => {
                            return(
                                <li key={contact.id}>
                                    <h2>{contact.name1}</h2>
                                    <h2>{contact.email}</h2>
                                    <div>
                                        <button onClick={() => {dispatch({type: "delete", payload: {id: contact.id}})}}>Delete</button>
                                    </div>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

// const DisplayName = ({name}) => { // {name} <= object destructuring. Instead passing props as an argument we are passing object destructuring.
//     console.log("Rendered!");
//     return(
//         <div>
//             {name}
//         </div>
//     );
// }

// const DisplayName = React.memo(({name}) => { // Here I cannot use a useMemo because hook should defined at the top level.
//     console.log("Rendered!");
//     return(
//         <div>
//             <h2>My Name is: {name}</h2>
//         </div>
//     );
// });

const DisplayName = React.memo(({displayName}) => {
    // const [value, setValue] = useState("");
    // console.log(displayName);
    // useEffect(() => {
    //     setValue(displayName("Hello"));
    //     console.log("Component Rendered!");
    //     console.log(displayName);
    // }, [displayName]);

    console.log("Component Rendered!");
    return(
        <div>
            <h2>My Name is: {"Pooja"}</h2>
        </div>
    );
});

export default HooksExample;