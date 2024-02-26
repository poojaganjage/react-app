import React, {Component} from "react";

export default class StudentUnmount extends Component {
    componentDidMount() {
        console.log("Student Component Mounted");
    }

    componentWillUnmount() {
        console.log("Student Component Unmounted");
    }

    render() {
        console.log("Student rendered");
        return(
            <div>
                <h1>Student Component</h1>
            </div>
        )
    }
}