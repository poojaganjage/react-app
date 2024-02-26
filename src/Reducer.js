import React, {useState, useReducer} from "react";
import useCounter from "./useCounter";
import ScreenComponent from "./ScreenComponent";

// const initialState = 0;
// function reducer(state, action) {
//     console.log("Reducer Rendered!");
//     switch(action.type) {
//         case "increment":
//             return state + 1 + action.payload;
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
                console.log(contact.id);
                console.log(action.payload.id);
                console.log(contact.id !== action.payload.id);
                return contact.id !== action.payload.id;
            });
        default:
            throw new Error();
    }
}

const Reducer = () => {
    const [state, dispatch]= useReducer(reducer, initialState);
    console.log(state);
    const [name1, setName1] = useState("");
    const [email, setEmail] = useState("");

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

    const {value, increment, decrement, reset} = useCounter(0, 5);

    return(
        <div>
            <h1>Reducer Hook</h1>
            {/*<h2>{state}</h2>
            <button onClick={() => {dispatch({type: "increment", payload: 2})}}>Increment</button>
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
            <hr></hr>

            <div>
                <h1>Counter: {value}</h1>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button> 
                <button onClick={reset}>Reset</button> 
            </div>
            <hr></hr>

            <ScreenComponent />
        </div>
    );
}
export default Reducer;