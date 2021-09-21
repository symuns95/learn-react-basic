import React, { Component } from "react";

export class Skill extends Component {
    render() {
        return (
            <>
                <div className="skills my-3">
                    <ul className="flex">
                        <li className="bg-gray-300 px-2 p-1 m-2 hover:bg-gray-400">{this.props.skillA}</li>
                        <li className="bg-gray-300 px-2 p-1 m-2 hover:bg-gray-400">{this.props.skillB}</li>
                        <li className="bg-gray-300 px-2 p-1 m-2 hover:bg-gray-400">{this.props.skillC}</li>
                    </ul>
                </div>
            </>
        );
    }
}

export default Skill;
