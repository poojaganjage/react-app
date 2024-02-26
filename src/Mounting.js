import React, {Component} from "react";
import StudentMount from "./StudentMount";

export default class Mounting extends Component {
    constructor(props) {
        super(props);
        console.log("Mounting - Constructor Called");
        console.log(props);
        this.state = {
            rollno: "101",
        };
    }

    static getDerivedStateFromProps(props,state) {
        console.log("Mounting - Get Derived State From Props Called");
        console.log(props,state);
        return null; // It return object to update the state or state object and null.
    }

    componentDidMount() {
        // Get data from the server and set the data to the state.
        console.log("Mounting - ComponentDidMount -  Mounted");
    }

    render() {
        console.log("Mounting - Rendered");
        return(
            <div>
                <StudentMount name="Pooja" />
                <h1>Welcome to React Js Application</h1>
            </div>
        )
    }
}