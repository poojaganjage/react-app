import React, {Component} from "react";
import User from "./User";
import Guest from "./Guest";

export default class Conditions extends Component {
    state = {
        isLoggedIn: false,
    };

    clickLogin = () => {
        this.setState({isLoggedIn: true});
    };

    clickLogout = () => {
        this.setState({isLoggedIn: false});
    };

    render = () => {
        // const isRegistered = this.props.consumer;
        //const primeMember = this.props.primeMember;
        // if(isRegistered && primeMember) {
        //     console.log("If-Else Statement is Executed!");
        //     return(
        //         <React.Fragment>{primeMember && <User />}</React.Fragment>
        //     );
        // } else {
        //     return <Guest />
        // }

        // return(
        //     <React.Fragment>
        //         <h1>{primeMember && <User />}</h1> {/*Inline If in JSX and OR Logical Operator is not Working in Inline If JSX*/}
        //         <h1>{primeMember && <User /> && <Guest />}</h1> {/*Inline If in JSX*/}
        //     </React.Fragment>
        // );
        
        //let consumer;
        //if(this.state.isLoggedIn) {
            // return(
            //     <React.Fragment>
            //         <User name="Pooja" clickData={this.clickLogout} />
            //     </React.Fragment>
            // );
            //consumer = <User name="Pooja" clickData={this.clickLogout} />;
        //} else {
            // return(
            //     <React.Fragment>
            //         <Guest name="Guest" clickData={this.clickLogin} />
            //     </React.Fragment>
            // );
            //consumer = <Guest name="Guest" clickData={this.clickLogin} />;
        //}
        // return(
        //     <div>{consumer}</div>
        // );

        // return(
        //     <div>
        //         {this.state.isLoggedIn ? <User name="Pooja" clickData={this.clickLogout} /> : <Guest name="Guest" clickData={this.clickLogin} />}
        //     </div>
        // );

        return(
            <div>
                {
                    (() => {
                        // if(this.state.isLoggedIn || primeMember) {
                        //     return <User name="Pooja" clickData={this.clickLogout} />
                        // } else {
                        //     return <Guest name="Guest" clickData={this.clickLogin} />
                        // } // Self Calling => IIFE.
                        switch(this.state.isLoggedIn) {
                            case true:
                                return <User name="Pooja" title={{description:"ReactJS Application"}} clickData={this.clickLogout} />
                            case false:
                                return <Guest name="Guest" clickData={this.clickLogin} />
                            default:
                                console.log("Default Case");
                        }
                    })()
                }
            </div>
        );
    }
}