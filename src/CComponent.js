import React, {Component} from "react";
import { CounterContext } from "./CounterContext";

export default class CComponent extends Component {
    render() {
        return(
            <div>
            <h1>Class Component</h1>
            <h2>{this.props.counter}</h2>
            <CounterContext.Consumer>
                {(value) => {
                    return <h3>Hello : {value}</h3>
                }}
            </CounterContext.Consumer>
        </div>
        );
    }
}
