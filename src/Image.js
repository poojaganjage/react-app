import React, {Component} from "react";
import ErrorBoundaries from "./ErrorBoundaries";

export default class Image extends Component {
    componentWillMount () {
        console.log("Image Component Will Mount");
    }

    render() {
        console.log("Image");
        if(this.props.pic === "No Image") {
            //return "Error Boundaries"; // Here we return an integer, string and array but not possible to return an object which is in key value pair.
            throw new ErrorBoundaries();
        }
        console.log("******************************");

        return(
            <div>
                <img src={this.props.pic} alt="Pic" style={{width: "500px"}} />
                {/*<img src={this.props.picsun} alt="Pic" style={{width: "500px"}} />*/}
            </div>
        );
    }
}