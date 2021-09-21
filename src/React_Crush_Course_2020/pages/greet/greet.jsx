import React from "react";
import { useParams } from "react-router-dom";

function Greet() {
    const params = useParams(); // for get the after text of exact path line greet/ but if I give another / like /greet/ its not going to work  // use useParams hook for get the url data after the exact path
    console.log(params);
    return (
        <div>
            <h1 className="text-4xl">Greet {params.name}</h1>
        </div>
    );
}

export default Greet;
