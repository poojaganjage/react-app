import React, {Component} from "react";
const Army = (Women, shot) => {
    
    class NewWomen extends Component {
        state = {
            gunshots: 0
        };

        handleGunshots = () => {
            this.setState({gunshots: this.state.gunshots + shot});
        };

        render() {
            console.log(this.props.camp);
            return(
                <div>
                    <Women hocgunname="AK47" hocgunshots={this.state.gunshots} hochandlegunshots={this.handleGunshots} {...this.props} />
                </div>
            );
        }
    }

    return NewWomen;
}
export default Army;