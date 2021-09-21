import React from "react";
import Images from "./ClsComImages";

class ClassComponent extends React.Component {
     // to geting props i have to make constructor
     // constructor(props) {
     //      console.log("App constructor");
     //      super(props);


     // state = {
     //      name: "this is class Component"
     //      , isShowing: false
     // }
     // and the other way to use normal function i have to bind this in constructor props
     // this.handleClick = this.handleClick.bind(this);
     // }

     state = {
          name: "this is class component",
          isShowing: false,
     };

     // if i Use normal function i have to bind (this) with normal function 
     handleClick = this.handleClick.bind(this);
     // or
     /// states are immutable

     // setState is not working in normal function
     handleClick() {
          this.setState({ isShowing: !this.state.isShowing });
     }

     // one way to use array function in setstate
     //  handleClick = () => {
     //       this.setState({ isShowing: !this.state.isShowing });
     //  };
     // and the other way to use setstate in function
     // handleClick() {
     //      this.setState({ isShowing: !this.state.isShowing });
     // }
     text = "text is here";

     // lifecycle hook of classbased components

     // this is the life cycyle hook of mounted
     // componentDidMount() {
     //      console.log("App Mounted"); // component didMount is excute after rendering
     //      this.setState({ name: "Hey lifecycle" });
     // }

     // componentDidUpdate() {
     //      console.log("App Updated");
     // }
     render() {
          console.log("App render");
          return (
               <>
                    {/* <Header /> */}
                    <div className="bg-gray-500 text-white p-5 border">Hello react title is</div>
                    <h1 className="h1 text-center"> Hello {this.state.isShowing ? this.state.name : null}</h1>
                    <button className="p-2 bg-blue-700 text-white d-block mx-auto my-3 " onClick={this.handleClick}>
                         Toggle
                    </button>
                    {this.state.isShowing ? console.log('isShowing is true now') : console.log('isShowing is false now')}
                    {/* here when image component is is rendering by conditional render mounting will start then after isShowing is false then images component is unmount */}
                    {this.state.isShowing ? <Images /> : null}
                    <p>{this.text}</p>
               </>
          );
     }
}

export default ClassComponent;
