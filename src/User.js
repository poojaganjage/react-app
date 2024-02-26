import React, {Component} from "react";

export default class User extends Component {
    render() {
        return(
            <div>
                <h1>Welcome {this.props.name}</h1>
                <h2>{this.props.title.description}</h2>
                <h3>Prime Member</h3>
                <button onClick={this.props.clickData}>Logout</button>
            </div>
        );
    }
}