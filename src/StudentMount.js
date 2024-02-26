import React, {Component} from "react";
import MarksMount from "./MarksMount";

export default class StudentMount extends Component {
    componentDidMount() {
        // Get data from the server and set the data to the state.
        console.log("Student Mounting - ComponentDidMount -  Mounted");
    }

    render() {
        console.log("Student Mount - rendered");
        return(
            <div>
                <MarksMount />
                <h1>Hello {this.props.name}</h1>
            </div>
        );
    }
}