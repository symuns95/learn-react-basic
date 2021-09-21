// import React, { useEffect, useState, useRef } from "react";
import React, { useState } from "react";
// import UseScroll from "../utils/Hooks/useScroll";
import FunComImg from './FunComImg';

export const FunComponent = () => {
     const [isShowing, setisShowing] = useState(false);
     // const [title, settitle] = useState("this is title");
     // const [didMount, setDidMount] = useState(false);
     //const mountRef = useRef(false); // useRef.current value is now false

     function handleClick() {

          setisShowing(!isShowing);
     }

     // Component lifecycle using useEffect hook
     //
     // for componentDidmount only
     // useEffect(() => {
     //      console.log("App Mounted");
     // }, []);

     // useEffect(() => {
     //      // setDidMount(true);
     //      console.log("App Mounted");
     // }, []);

     //component did update
     // I can update by condition but it not a good way to update because here setDidMount can't compelete its work then App update is not work
     //
     // useEffect(() => {
     //      if (didMount) {
     //           console.log("App Updated");
     //      }
     // }, [isShowing]);
     //
     //
     // to update component by proper way I have to follow another method. for that method
     // i have to use another hook called (useRef)
     // lets use useRef

     // useEffect(() => {
     //      if (mountRef.current) {
     //           console.log("App Updated");
     //      } else {
     //           mountRef.current = true;
     //      }
     // }, [isShowing]);

     //
     return (
          <div>
               {console.log("re-rendered")}

               <div>
                    <div className="bg-gray-500 text-white p-5 border">Hello react title is</div>
                    <h1 className="h1 text-center">this is h1 tag </h1>
                    <button className="p-2 bg-blue-700 text-white block focus:outline-none mx-auto my-3 " onClick={handleClick}>
                         Toggle Image
                    </button>
                    {isShowing ? <FunComImg /> : null}
               </div>
          </div>
     );
};
export default FunComponent;
