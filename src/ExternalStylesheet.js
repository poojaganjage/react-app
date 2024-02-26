import React, {Component} from "react";
import "./ExternalStylesheet.css";
import UserExternalStylesheet from "./UserExternalStylesheet";
import Styles from "./ExternalStylesheet.module.css";
import Pic from "./pic.jpg";

export default class ExternalStylesheet extends Component {
    state = {
        style: false
    };

    render() {
        //let style = false;
        return(
            <React.Fragment>
                <img src={process.env.PUBLIC_URL + "/pic.jpg"} />
                {/*<img src={Pic} />*/}
                <h1 className={"headone-txt" + " " + [this.state.style ? "txtfz" : "txtfz"]}>React JS Application</h1>
                <h1 className={["headone-txt + txtfz"]}>React JS Front End Application</h1>
                <h1 className={this.state.style ? "txtb" : "txtg"}>External Stylesheet is a global css file</h1>
                <UserExternalStylesheet color={this.state.style ? "txtb" : "txtg + txtfz"} />
                <h1 className={Styles.txt}>CSS Module One</h1>
                <button className="btn btn-success">Button</button>
            </React.Fragment>
        );
    }
}