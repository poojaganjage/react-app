import React, {Component, useDebugValue} from "react";

export default class InlineStylesheet extends Component {
    state = {
        change: false
    };

    changeColor = () => {
        this.setState({change: true});
    };

    render() {
        const btnStyle1 = {
            color: "purple",
            marginLeft: "10px"
        };
        
        const btnStyle2 = {
            backgroundColor: "orange"
        };

        if(this.state.change) {
            btnStyle2.backgroundColor = "white"; // Reinitialize/Override values.
        }

        return(
            <div>
                <button style={btnStyle1}>Button1</button>
                <button style={{btnStyle1, btnStyle2}}>Button2</button>
                <button style={{...btnStyle1, ...{backgroundColor: "cadetblue"}}}>Button3</button>
                <button style={{...btnStyle1, ...btnStyle2}} onClick={this.changeColor}>Button4</button>
            </div>
        );
    }
}