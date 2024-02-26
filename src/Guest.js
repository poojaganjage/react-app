import React, {Component} from "react";

export default class Guest extends Component {
    render() {
        return(
            <div>
                <h1>Welcome {this.props.name}</h1>
                <button onClick={this.props.clickData}>Login</button>
                <button style={{marginLeft: "10px"}}>SignUp</button>
            </div>
        );
    }
}