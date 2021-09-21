import React, { Component } from "react";

export default class Images extends Component {
     // constructor(props) {
     //      super(props);

     //      this.state = {
     //           interval: null,
     //      };
     // }
     // updated define state after es6
     state = {
          interval: null
     }

     componentDidMount() {
          console.log("img comp mounted");
          this.setState({
               interval: setInterval(() => {
                    console.log("Hey I am interval");
               }, 1000),
          });
     }
     componentWillUnmount() {
          console.log("img component unMount");
          clearInterval(this.state.interval);
     }
     render() {
          return (
               <div>
                    <img
                         className="img-test"
                         id="img-test"
                         src="https://images.unsplash.com/photo-1620553170401-73d64186196d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                         alt="img error"
                    />
               </div>
          );
     }
}
