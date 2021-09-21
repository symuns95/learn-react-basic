// import React, { useEffect } from "react";
import React, { useEffect } from "react";
// import { ImgCom } from "./";

const FunComImg = () => {
     // if i return a function inside useeffect function that is work for component Unmount
     useEffect(() => {
          console.log("images Comp Mounted");

          const interval = setInterval(() => {
               console.log("Hey i am interval");
          }, 1000);

          return () => {
               // when return a function it excute as unmount
               console.log("image Comp Unmount");
               clearInterval(interval);
          };
     }, []);

     return (
          <div>
               {/* <ImgCom /> */}
               <h1>I am function component img</h1>
          </div>
     );
};
export default FunComImg