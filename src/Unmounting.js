import React, {Component} from "react";
import StudentUnmount from "./StudentUnmount";

export default class Unmounting extends Component {
    componentDidMount() {
        console.log("App Component Mounted");
    }

    componentWillUnmount() {
        console.log("App Component Unmounted");
    }

    render() {
        console.log("App rendered");
        return(
            <div>
                <StudentUnmount />
                <h1>App Component</h1>
            </div>
        )
    }
}