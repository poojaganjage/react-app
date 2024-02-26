import React, {Component} from "react";

export default class MarksMount extends Component {
    componentDidMount() {
        // Get data from the server and set the data to the state.
        console.log("Marks Mounting - ComponentDidMount -  Mounted");
    }

    render() {
        console.log("MarksMount - rendered");
        return(
            <div>
                <h1>MarksMount Component</h1>
            </div>
        );
    }
}