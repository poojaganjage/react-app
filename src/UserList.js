import React, {Component} from "react";

export default class UserList extends Component {
    render() {
        return <li>{this.props.value.id}</li>; {/* key is not passed in a component as a prop*/}
    }
}