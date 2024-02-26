import React, {Component} from "react";
//import {myContext} from "./ContextAPI";
import {Consumer} from "./Context";
import {myContext} from "./Context";

export default class ContextAPIGuest extends Component {
    static contextType = myContext;
    
    componentDidMount = () => {
        console.log(this.context);
    };

    render() {
        //const {name, value, arr, obj1} = this.context.data; // Object destructuring.
        return(
            <div>
                <h1>ContextAPIGuest Component</h1>
                {/*<myContext.Consumer>
                    {value => <h2>{value}</h2>}
                </myContext.Consumer>*/}
                {/*<myContext.Consumer>
                    {value => <h2>{value.name + " " + value.value + " " + value.arr[2] + " " + value.obj1.obj1}</h2>}
                </myContext.Consumer>*/}
                {/*<myContext.Consumer>
                    {value => (
                        <React.Fragment>
                            <h2>{value.data.name + " " + value.data.value + " " + value.data.arr[2] + " " + value.data.obj1.obj1}</h2>
                            <button onClick={value.handleClick}>Submit</button>
                        </React.Fragment>
                    )}
                </myContext.Consumer>
                <myContext.Consumer>
                    {({data, handleClick}) => (
                        <React.Fragment>
                            <h2>{data.name + " " + data.value + " " + data.arr[2] + " " + data.obj1.obj1}</h2>
                            <button onClick={handleClick}>Change Value</button>
                        </React.Fragment>
                    )}
                </myContext.Consumer>*/}
                {/*<Consumer>
                    {value => (
                        <React.Fragment>
                            <h2>{value.data.name + " " + value.data.value + " " + value.data.arr[2] + " " + value.data.obj1.obj1}</h2>
                            <button onClick={value.handleClick}>Change Value</button>
                        </React.Fragment>
                    )}
                </Consumer>
                <Consumer>
                    {({data, handleClick}) => (
                        <React.Fragment>
                            <h2>{data.name + " " + data.value + " " + data.arr[2] + " " + data.obj1.obj1}</h2>
                            <button onClick={handleClick}>Change Value</button>
                        </React.Fragment>
                    )}
                </Consumer>*/}
                {/*<Consumer>
                    {value => <h2>{value}</h2>}
                </Consumer>*/}
                <h2>{this.context.data.name + " " + this.context.data.value + " " + this.context.data.arr[2] + " " + this.context.data.obj1.obj1}</h2>
                <button onClick={this.context.handleClick}>Change Value</button>
                {/* <h2>{name + " " + value + " " + arr[2] + " " + obj1.obj1}</h2>
                <button onClick={this.context.handleClick}>Change Value</button> */}
                {/*<h2>{console.log(this.props.value.data.name)}</h2>*/}
                {/* <h2>{this.context}</h2> */}
            </div>           
        );
    }
}