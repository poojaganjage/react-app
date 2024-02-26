import React, {Component} from "react";
import Army from "./WithArmHOC";

class Deepika extends Component {
    // state = {
    //     gunshots: 0
    // };

    // handleGunshots = () => {
    //     this.setState({gunshots: this.state.gunshots + 1});
    // };

    render() {
        return(
            <div>
               {/*<h1 onMouseOver={this.handleGunshots}>Gun Name: {this.props.hocgunname} Deepika Gunshots: {this.state.gunshots}</h1>*/} 
               <h1 onMouseOver={this.props.hochandlegunshots}>Gun Name: {this.props.hocgunname} Deepika Gunshots: {this.props.hocgunshots}</h1>
                <h2>Camp: {this.props.camp1}</h2>
            </div>
        );
    }
}
export default Army(Deepika, 20);