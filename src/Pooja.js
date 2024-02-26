import React, {Component} from "react";
import Army from "./WithArmHOC";

class Pooja extends Component {
    // state = {
    //     gunshots: 0
    // };

    // handleGunshots = () => {
    //     this.setState({gunshots: this.state.gunshots + 1});
    // };

    render() {
        return(
            <div>
                {/*<h1 onMouseOver={this.handleGunshots}>Gun Name: {this.props.hocgunname} Pooja Gunshots: {this.state.gunshots}</h1>*/}
                <h1 onMouseOver={this.props.hochandlegunshots}>Gun Name: {this.props.hocgunname} Pooja Gunshots: {this.props.hocgunshots}</h1>
                <h2>Camp: {this.props.camp}</h2>
            </div>
        );
    }
}
export default Army(Pooja, 10);