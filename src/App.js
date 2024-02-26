import React, {Component, Fragment} from "react";

// let el = <h1>React JS Application</h1> // We make one element only.
// export default el;

class AppOne extends Component { // We make Component and inside that we make react element.
    render() {
        //return(<h1>React JS Application</h1>); // Create react element which is in JSX(modern Javascript) form. Single element return.
        return(
            <Fragment>
                <div>
                    <ol style={{listStyleType: "circle"}}>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                    </ol>
                    <h1 style={{fontSize: 30 + "px"}}>React JS Application</h1>
                    <p style={{color: "purple", fontSize: 20 + "px"}}>React JS is an open source Javascript library</p>
                </div>
            </Fragment>
        );
    }
}
//export default App;

class AppTwo extends Component { // Using Class Component.
    render() {
        return(
            <Fragment>
                <AppOne />
                <span>
                    <h1 style={{color:"purple"}}>Created By {this.props.created}</h1>
                </span>
            </Fragment>
        ); 
    }
}
export default AppTwo;
