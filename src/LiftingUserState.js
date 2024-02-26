import React, {Component} from "react";

export default class LiftingUserState extends Component {
    render() {
        return(
            <div>
                <h1>{this.props.name + " " + this.props.value + " " + this.props.add}</h1>
            </div>
        );
    }
}