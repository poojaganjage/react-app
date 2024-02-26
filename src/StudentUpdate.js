import React, {Component} from "react";
import MarksUpdate from "./MarksUpdate";

export default class StudentUpdate extends Component {
    constructor() {
        super();
        this.state = {
            rollno: 101,
        };
    }

    clickHandle = () => {
        console.log("Button Clicked!")
        //this.setState({rollno: "102"});
        this.setState({rollno: this.state.rollno + 2});
    }

    render() {
        console.log("StudentUpdate rendered");
        return(
            <div>
                <h1>React JS Application</h1>
                <MarksUpdate rollno={this.state.rollno} />
                <button onClick={this.clickHandle}>Change</button>
            </div>
        )
    }
}