import React, {Component} from "react";
import ContextAPIUser from "./ContextAPIUser";
//export const myContext = React.createContext();
import {Provider} from "./Context";

export default class ContextAPI extends Component {
    state = {
        name: "Pooja",
        value: 100,
        arr: [
            "Purnima", "Atish", 101
        ],
        obj1: {
            obj1: "Object1"
        }
    };

    handleClickContext = () => {
        this.setState({value: this.state.value + 10});
    };

    render() {
        const contextValue = {
            data: this.state,
            handleClick: this.handleClickContext
        };

        return(
            <div>
                <h1>ContextAPI Component</h1>
                {/*<myContext.Provider value={this.state.name}>
                    <ContextAPIUser name={this.state.name} /> 
                </myContext.Provider>*/}
                {/*<myContext.Provider value={this.state}>
                    <ContextAPIUser name={this.state.name} /> 
                </myContext.Provider>*/}
                {/*<myContext.Provider value={contextValue}>
                    <ContextAPIUser name={this.state.name} /> 
                </myContext.Provider>*/}
                <Provider value={contextValue}>
                    <ContextAPIUser name={this.state.name} /> 
                </Provider>
                {/* <ContextAPIUser name={this.state.name} /> */}
            </div>
        );
    }
}