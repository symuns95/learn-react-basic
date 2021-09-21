import React, { Component } from "react";

export class Social extends Component {
    render() {
        return (
            <>
                <div className="social">
                    <h4 className="font-bold">Social Links</h4>
                    <ul className="flex">
                        <li className="underline m-2">{this.props.social1}</li>
                        <li className="underline m-2">{this.props.social2}</li>
                        <li className="underline m-2">{this.props.social3}</li>
                    </ul>
                </div>
            </>
        );
    }
}

export default Social;
