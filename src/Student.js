import React from "react";
import AppTwo from "./App.js";
import PropTypes from "prop-types";

const headingStyle = {
    color: "red",
};

const Student = (props) => { // Using Function/Functional Component. => Parent Component.
    return(
        <div>
            <AppTwo created="Facebook"/> {/* Child Comment */}
            <span>
                <h1 style={{color:"purple", fontSize: "20px"}}>It has two types of Component such as {props.type}</h1>
                <h2 style={headingStyle}>{props.description}</h2>
            </span>
        </div>
    );
}

// class Student extends React.Component { // Using Class Component.
//     render() {
//         return(
//             <div>
//                 <AppTwo name="Deepika Ganjage"/>
//                 <h1 style={{color:"purple"}}>Hello {this.props.name}</h1>
//             </div>
//         );
//     }
// }
Student.propTypes = {
    type: PropTypes.string.isRequired,
};

Student.defaultProps = {
    type: "Function Component and Class Component",
};
export default Student;