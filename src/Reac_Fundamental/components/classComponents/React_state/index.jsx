import React, { Component } from "react";

export class State extends Component {
    //
    // this is ract 16 old style to define a variable
    // constructor(props) {
    //     super(props);
    //     this.count = 0;
    // to change any state I have to use state from component property
    // this.state = {
    //         count: 0,
    //     };
    // }
    // this is latest style to define a variable
    state = {
        count: 0,
    };
    //

    render() {
        // console.log(this.count);
        return (
            <div>
                <h1>Lets Learn about State</h1>
                <h3>Why do we need state</h3>
                <div>Count {this.state.count}</div>
                <button
                    onClick={() => {
                        //     // this.count++;
                        //     // update the sate with setState function // only thats property will update which one i declear in setState as {object}
                        //     this.setState({ count: this.state.count + 1 });
                        //     console.log("Clicked " + this.state.count);
                        this.setState(
                            // i can use function to update the state  setState function is asynchronous to handle this I have to use second argument
                            (prevValue) => {
                                return {
                                    count: prevValue.count + 1,
                                };
                            },
                            // to handle this asynchronous i have to use second argument in setState
                            () => {
                                console.log("Clicked " + this.state.count);
                            }
                        );
                        // this console log will work asynchronously this console execute before setState execute
                        // console.log("Clicked " + this.state.count);
                    }}>
                    Increment
                </button>
            </div>
        );
    }
}

export default State;
