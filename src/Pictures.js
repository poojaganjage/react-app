import React, {Component} from "react";
import Image from "./Image";
import Pic from "./pic.jpg";
import Picsun from "./picsun.jpg";
import ErrorBoundaries from "./ErrorBoundaries";

export default class Pictures extends Component {
    render() {
        return(
            <div>
                {/*<ErrorBoundaries>
                    <Image pic={Pic} />
                    <br />
                    <Image pic={Picsun} />
                    <br />
                    <Image pic="No Image" />
                </ErrorBoundaries>*/}

                <ErrorBoundaries>
                    <h1>Image One</h1>
                    {/*<Image pic={Pic} picsun={Picsun} />*/}
                    <Image pic={Pic} />
                    <h1>Scenery One</h1>
                </ErrorBoundaries>
                    <br />
                <ErrorBoundaries>
                    <h1>Image Two</h1>
                    <Image pic={Picsun} />
                    <h1>Scenery Two</h1>
                </ErrorBoundaries>
                    <br />
                <ErrorBoundaries>
                    <h1>Image Three</h1>
                    <Image pic="No Image" />
                </ErrorBoundaries>

                {/*<React.StrictMode>
                    <Image pic={Pic} />
                </React.StrictMode>*/}     
            </div>
        );
    }
}