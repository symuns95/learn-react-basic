import React, { Component } from "react";

export class Bio extends Component {
    render() {
        return (
            <>
                <div className="bio">
                    <h3 className="font-bold"> Name : {this.props.name}</h3>
                    <p>About : {this.props.about}</p>
                </div>
            </>
        );
    }
}

export default Bio;
