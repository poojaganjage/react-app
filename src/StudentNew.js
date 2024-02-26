import React, {Component} from "react";

// class StudentNew extends Component {
//     // state = { // State Using Inside The Class.
//     //     name: "Pooja",
//     //     //rollno: "101", 
//     //     rollno: this.props.rollno,
//     // };
//     constructor(props) { // State Using Constructor.
//         super(props);
//         this.state = {
//             name: "Pooja",
//             rollno: this.props.rollno,
//         };
//     }
//     render() {
//         return <h1>Name: {this.state.name} <br></br> Roll No.: {this.state.rollno}</h1>
//     }
// }
// export default StudentNew;

class StudentNew extends Component {
    constructor(props) {
        super(props); // Inside constructor whatever it is initialize, it can be accessible through out the class.
        this.state = {
            id: "101",
            title: "Event Handling operation performed",
            description: this.props.description,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    // handleClick() { // Using Regular Function. Here this can be accessible using constructor and bind() method.
    //     console.log("Button Clicked!", this.state.title); // If we bind this in regular function then we can access state values in a regular function.
    //     console.log(this.props.description);
    //     console.log(this.state.description);
    //     alert("Button Clicked!");
    // }

    //handleClick = (id, e) => {
    handleClick = ({name}, j, e) => { // Using Arrow Function. Preferred Way. A class member cannot have the 'const' keyword.
        console.log("Button Clicked!", this);
        //this.state.title = "Event"; // Data reinitialize/override happened. But it works behind the scenes but react not display on the front end.
        //this.setState({title: "Event Handling", description: "Operations Performed"}); // For dynamically data want to change use only setState() method.
        this.setState(function(state, props) { // Using regular Function.
            console.log(state, props);
            console.log(state.title, props.description);
            console.log(this.state, this.props);
            console.log(this.state.title, this.props.description);
        });
        //console.log(name, j);
        console.log(name + " " + j);
        console.log(j);
        console.log(e);
        // this.setState((state, props) => { // Using arrow Function.
        //     console.log(state, props);
        //     console.log(state.title, props.description);
        //     console.log(this.state, this.props);
        //     console.log(this.state.title, this.props.description);
        // });
    }

    // handleClickArg = (e) => {
    //     //this.handleClick(this.state.id, e);
    //     this.handleClick({name: "Pooja"}, "101", e);
    // }

    render() { // Function
        return(
            <div>
                <h1>Hello Event</h1>
                <h1>{this.state.title + " " + this.state.description}</h1>
                {/* <button onClick={this.handleClickArg}>Click Me</button> */}
                <button onClick={(e) => {this.handleClick({name: "Pooja"}, "101", e)}}>Click Me</button> {/* Anonymous Arrow Function */}
                <button onClick={this.handleClick.bind(this, {name: "Pooja"}, "101")}>Click Me</button>
            </div>
        )
    }
}
export default StudentNew;

/*function StudentNew(props) {
    // function handleClick() {
    //     console.log("Button Clicked!");
    //     console.log(props.description);
    // }

    const handleClick = (e) => {
        e.preventDefault();
        console.log("Button Clicked!");
        console.log(props.description);
    }

    return(
        <div>
            <h1>Hello Event</h1>
            <button onClick={handleClick}>Click Me</button>
            <br></br>
            <br></br>
            <a href="https://www.google.com" onClick={handleClick}>Click The Link</a>
        </div>
    );
}
export default StudentNew;*/
