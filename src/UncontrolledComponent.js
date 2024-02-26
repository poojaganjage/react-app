import React, {Component} from "react";

export default class UncontrolledComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };
        this.textInput = React.createRef();
        this.backRef = null;
        this.setBackRef = (element) => {
            this.backRef = element;
        }
    }

    // setBackRef = (element) => {
    //     this.backRef = element;
    // }

    componentDidMount = () => {
        console.log(this.textInput);
        console.log(this.textInput.current);
        this.textInput.current.focus();
        console.log(this.backRef);
        if(this.backRef) {
            this.backRef.focus();
        }
    };

    handleSubmit = (e) => {
        this.setState({value: this.textInput.current.value});
        e.preventDefault();
    }

    render() {
        return(
            <div>
                <h1>Updated Value: {this.state.value}</h1>
                <form onSubmit={this.handleSubmit}>
                    Name: <input type="text" />
                    <br /><br />
                    Password: <input type="text" name="password" ref={this.textInput} />
                    <br /><br />
                    Address: <input type="text" name="address" ref={this.setBackRef} />
                    <br /><br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}