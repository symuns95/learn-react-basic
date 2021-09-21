import React, { Component } from "react";
// import State from "./React_state";
// import Timer from "./React_state/Timer_State_practice";
import Practice from "./React_state/Timer_State_practice/Practice";
class App extends Component {
  // component have two layer 1. daya layer and logic layer 2. Representative layer
  // Data and logic layer (optional)
  // .1 state
  // .2 Variable or Properties
  // .3 Function ro Method
  // 4. LIfe cycle layer

  // // Representation Layer (required)
  // 5. JSX
  render() {
    // const ComponentProps = new Component();
    //  console.log(ComponentProps); // to see the all properties of Component
    // console.log(this.props); // to see the props

    return (
      <>
        {/* <FunctionCom /> */}
        {/* <CreateProfile /> */}
        {/* <ClassCom /> */}
        {/* <State /> */}
        {/* <Timer /> */}
        <Practice />
      </>
    );
  }
}
export default App;
