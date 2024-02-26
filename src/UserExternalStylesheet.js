import React, {Component} from "react";
import "./UserExternalStylesheet.css";
import Styles from "./UserExternalStylesheet.module.css";
import StylesOne from "./ExternalStylesheet.module.css";

export default class UserExternalStylesheet extends Component {
    render() {
        return(
        <React.Fragment>
            <h2 className="headtwo-txt">Welcome Pooja</h2>
            <h2 className={this.props.color}>To the React JS Application</h2>
            <h2 className={Styles.txt}>CSS Module Two</h2>
            <h2 className={StylesOne.txt}>CSS Module Three</h2>
        </React.Fragment>
        );
    }
}