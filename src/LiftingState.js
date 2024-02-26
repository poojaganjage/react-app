import React, {Component} from "react";
import LiftingUserState from "./LiftingUserState";

export default class LiftingState extends Component {
    constructor() {
        super();
        this.state = {
            name: "Pooja",
            value: 100
        };
        this.add = (a, b) => {
            return a + b;
        };
    }

    // add = (a, b) => {
    //     return a + b;
    // };
    
    render() {
        return(
            <div>
                <LiftingUserState name={this.state.name + " " + this.state.value} value={this.state.value} add={this.add(10, 20)} />
            </div>
        );
    }
}