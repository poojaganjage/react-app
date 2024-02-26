import React, {Component} from "react";
import Pooja from "./Pooja";
import Deepika from "./Deepika";

export default class HOC extends Component {
    render() {
        return(
            <div>
                <Pooja camp="100" />
                <Deepika camp1="200" />
            </div>
        )
    }
}