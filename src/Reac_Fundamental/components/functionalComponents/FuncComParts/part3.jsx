import React, { Fragment, useContext, useEffect, useRef, useState } from "react";
const Mycontext = React.createContext();
function Mycomponent2() {
    const { state, setSate, address } = useContext(Mycontext); // I can destructure it
    return (
        <>
            <h1 className="text-center text-2xl font-bold">
                My name is {state.name} and age is {state.age}
            </h1>
            <p>Address is : {address}</p>
        </>
    );
}

function Mycomponent() {
    // here I get the all sate values using useContext //  which i give value inside contexname.Provider value
    // const state = useContext(Mycontext);
    const { state, setSate } = useContext(Mycontext); // I can destructure it
    const myRef = useRef();
    useEffect(() => {
        console.log(myRef);
    }, [myRef]);

    function changeTxt() {
        setSate({ ...state, name: "Hiramon", age: 12 }); // I update the sate (...previous sate, update the name state, update age value)
        // since here my state is object so i have to sete new value inside object
    }

    return (
        <Fragment>
            <h1>This is Custom Component</h1>
            {/* <p>MY name is {state.name} </p>
            <p>and My age is {state.age} </p> */}
            <Mycomponent2 />
            <p ref={myRef} onClick={changeTxt}>
                Change Text
            </p>
        </Fragment>
    );
}
function Part3() {
    // lets lean about context api how I can manage state using context api
    const [value, setValue] = useState({
        name: "Saymun",
        age: 20,
    });
    return (
        <Mycontext.Provider
            value={{
                state: value,
                setSate: setValue,
                address: "Bhola",
            }}>
            <div>
                <h1>Lets learn aboout Context api </h1>
                <Mycomponent />
            </div>
        </Mycontext.Provider>
    );
}

export default Part3;
