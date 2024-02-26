import React, {Component} from "react";
import "./ControlledComponent.css";

export default class ControlledComponent extends Component {
    state = {
        //value: "Controlled By React"
        value: "",
        textareaValue: "This is a text area",
        name: "Pooja",
        password: "Deepika@26"
    };

    handleChange = (e) => { // This event handler call on every word entered or changed.
        this.setState({value: e.target.value.toUpperCase().substr(0, 10)}); // By using toUpperCase method we manipulate the data =>  This is called a Controlled Component.
        console.log(e.target.value);
        console.log(this.state.value);
    };

    handleTextAreaChange = (e) => {
        this.setState({textareaValue: e.target.value});
    };

    // handleName = (e) => {
    //     this.setState({name: e.target.value});
    // };

    // handlePassword = (e) => {
    //     this.setState({password: e.target.value});
    // };

    handleMultipleInputChange = (e) => {
        //this.setState({[e.target.name]: e.target.value.toUpperCase()});
        // if(e.target.name === "name") {
        //     this.setState({[e.target.name]: e.target.value.toUpperCase()});
        // } else {
        //     this.setState({[e.target.name]: e.target.value});
        // }
        //const value = e.target.name === "name" ? this.setState({[e.target.name]: e.target.value.toUpperCase()}) : this.setState({[e.target.name]: e.target.value});
        //e.target.name === "name" ? this.setState({[e.target.name]: e.target.value.toUpperCase()}) : this.setState({[e.target.name]: e.target.value});
        const value = e.target.name === "name" ? e.target.value.toUpperCase() : e.target.value.substr(0, 20);
        this.setState({[e.target.name]: value});
        console.log(e.target.name);
        console.log(e.target.value);
        console.log(value);
    };

    handleSubmit = (e) => {
        console.log(e);
        console.log(e.target[0]);
        console.log(e.target[0].value);
        console.log(e.target[0].value.toUpperCase());
        e.preventDefault();
    };

    render() {
        // console.log(this.state.value);
        // console.log(this.state.textareaValue);
        return(
            <div>
                <h1>Form Controlled By React</h1>
                <form className="form" onSubmit={this.handleSubmit}>
                    <input className="form-control" type="text" value="Controlled By React" />
                    <br />
                    <input className="form-control" type="text" defaultValue="Controlled By React" />
                    <div className="form-group">
                        Name <input className="form-control" type="text" value={this.state.value} onChange={this.handleChange}/>
                    </div>
                    <br />
                    <div className="form-group">
                        Title <textarea className="form-control" value={this.state.textareaValue} onChange={this.handleTextAreaChange}></textarea>
                    </div>
                    <br />
                    <div className="form-group">
                        <label>Name</label>
                        {/*<input type="text" value={this.state.name} onChange={this.handleName} />*/}
                        <input className="form-control" type="text" value={this.state.name} name="name" onChange={this.handleMultipleInputChange} />
                    </div>
                    <br />
                    <div className="form-group">
                        <label>Password</label>
                        {/*<input type="text" value={this.state.password} onChange={this.handlePassword} />*/}
                        <input className="form-control" type="text" value={this.state.password} name="password" onChange={this.handleMultipleInputChange} />
                    </div>
                    <br />
                    <div className="form-group">
                        <label>Title</label>
                        <textarea className="form-control" value={this.state.textareaValue} name="title" onChange={this.handleMultipleInputChange}></textarea>
                    </div>
                    <br />
                    <input type="submit" value="Submit" className="btn btn-success" />
                </form>
            </div>
        );
    }
}