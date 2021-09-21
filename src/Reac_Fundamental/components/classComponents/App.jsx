import React, { Component } from "react";
import Jsx from "./JSX";
import ExplainJsx from "./explainJsx";

class Child extends Component {
    render() {
        // here I receive func from props and inside func i define this component with (this)
        // this.props.func(this);

        console.log(this.props.func(1, 2), this);
        return <h1> Hlw I am Child </h1>;
    }
}
// class AnotherCom extends React.Component {
//     render() {
//         return (
//             <>
//                 <h1>{this.props.construc}</h1>
//                 <h2>this is another Class Component</h2>
//             </>
//         );
//     }
// }

const ChildComponent = (props) => (
    <div>
        <h3>I am child component</h3>
        <p>I don't know what to do</p>
        {props.children}
    </div>
);
class App extends React.Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         name: "Hi i am constructor",
    //     };
    // }

    getContext(a, b) {
        // only this implementation only call wherever i call the function
        console.log(" This is conext ", this);
        return a + b;
    }

    render() {
        // here inside getcontext (this) is refer the app component
        this.getContext(this);
        // const obj = {
        //     title: "this is h1",
        //     className: "test",
        // };
        const name = "Md Saymun";
        const bio = (
            <div>
                <h3>{name}</h3>
                <p>I am md Saymun. I want to be Full Stuck Developer</p>
            </div>
        );
        return (
            <>
                {/* <h1 {...obj}>this is Class Component</h1> */}
                {/* <Jsx /> */}
                <p>
                    {/* {`i can't define multiple statment inside this. `}
                    {"like if else , for loop"} */}
                </p>
                {/* <p>{new Date().toISOString()}</p>*/}
                {/* {bio} */}
                {/* <ExplainJsx /> */}

                {/* <AnotherCom construc={this.state.name} /> */}

                {/* I pass a function as props value  */}
                {/* I can only pass the value from Parent component to child Component but i never pass value from children to props thats called one way data binding */}
                <Child func={this.getContext} />

                {/*  lets see how to render children props */}
                {/* I can also render children this method  */}
                {/* <ChildComponent children={<h1>I am children</h1>} /> */}
                <ChildComponent>
                    <h3>Hello I am from parent</h3>
                </ChildComponent>
            </>
        );
    }
}

export default App;
