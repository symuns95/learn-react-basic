import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
// react will re-Rendered for (props/sate)
function ReactHooks() {
  const [count, setCount] = useState(0);
  const myRef = useRef();
  //setTimeout(() => {
  // although to get dom menupulation results by setTimeout is not good i Can use useEffect
  // console.log(myRef.current.innerText); // if I log useRef I showed it undefined because it rendered before jsx rendered  to define it  i can use useState or setimeout or another method i can follow
  // }, 10);
  console.log("This is going to undefined", myRef); // it is going to render before jsx render thats why I can't Manupulate DOM to Menupulate DOM I have to render myRef after jsx render

  //

  // uses of useEffect Hook
  // without second aurgument useEffect is going to run for mount the component and react it is going to run for every time after jsx rendered . as like props chage state changes
  useEffect(() => {
    // console.log(myRef); // it print with every rendering with jsx
  });

  // but when It has second argument I can define when useEfect will run for different element I can defin it in second argument and useEffect is run that particular element //  or if second argument is empty it going to work as component mount
  useEffect(() => {
    // example of uses of useEffect
    // for example Fetching Course information => when the URL chang .
    // console.log(myRef); // it run only for one time when second argument is empty
  }, []); // like this its related with DidMount
  useEffect(() => {
    console.log(myRef);
  }, [count]); // now useEffect is run for specific component here is for count

  return (
    <>
      {console.log("rerendered")}
      <h2>Count is : {count}</h2>
      <button ref={myRef} onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button ref={myRef} onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <h1>
        <a>Welcome To Home</a>
      </h1>
    </>
  );
}
export default ReactHooks;
