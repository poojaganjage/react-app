import React, {Component} from "react";
import ContextAPIGuest from "./ContextAPIGuest";
//import {myContext} from "./ContextAPI";
import {Consumer} from "./Context";

export default class ContextAPIUser extends Component {
    render() {
        return(
            <div>
                <h1>ContextAPIUser Component {this.props.name}</h1>
                <Consumer>
                    {value => <ContextAPIGuest value={value} />}
                </Consumer>
                <ContextAPIGuest />
            </div>
        );
    }
}