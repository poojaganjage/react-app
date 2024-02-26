import React, {Component} from "react";

export default class MarksUpdate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mrollno: this.props.rollno,
        };
    }

    static getDerivedStateFromProps(props, state) {
        console.log("Get Derived State From Props rendered");
        console.log(props, state);
        if(props.rollno !== state.mrollno) {
            return {mrollno: props.rollno};
        }
        return null;
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate - rendered");
        if(this.state.mrollno < 107) {
            console.log("MarksUpdate - shouldComponentUpdate");
            console.log(nextProps, nextState); // Here this.nextProps cannot be used.
            return true;
        }
        console.log(nextProps, nextState);
        return false;
    }

    // It runs before Update. When execute getSnapshotBeforeUpdate lifecycle method then compulsory need to define a componentDidUpdate lifecycle method.
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("MarksUpdate - getSnapshotBeforeUpdate rendered");
        console.log(prevProps, prevState);
        return 10;
    }

    // It runs after Updating occurs. 
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("MarksUpdate - componentDidUpdate rendered");
        console.log(prevProps, prevState, snapshot);
    }

    render() {
        console.log("MarksUpdate rendered");
        return(
            <div>
                <h1>{this.state.mrollno}</h1>
            </div>
        )
    }
}