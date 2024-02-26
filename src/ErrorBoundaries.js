import React, {Component} from "react";

export default class ErrorBoundaries extends Component {
    state = {
        hasError: false
    };

    componentWillMount () {
        console.log("Error Boundaries Component Will Mount");
    }

    static getDerivedStateFromError(error) {
        return {hasError: true}
    }

    componentDidCatch(error, info) {
        console.log(error);
        console.log(info);
    }

    render() {
        console.log("Error Boundaries");
        if(this.state.hasError) {
            return <h1>Error: Image Not Found!</h1>
        }
        console.log("Error Boundaries One");

        return(
            <div>
                {this.props.children}
            </div>
        );
    }
}