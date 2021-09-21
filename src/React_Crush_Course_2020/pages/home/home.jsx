import React from "react";
import { NavLink } from "react-router-dom";
import ReactHooks from "../../course_part/reactHooks";
function Home() {
    return (
        <>
            {console.log("rerendered")}
            <div className="flex">
                <div className="mx-3">
                    <NavLink exact to="/" activeClassName="underline">
                        Home
                    </NavLink>
                </div>
                <div className="mx-3">
                    <NavLink to="/about" activeClassName="underline">
                        About
                    </NavLink>
                </div>
            </div>
            <h1>Welcome To Home</h1>
            <ReactHooks />
        </>
    );
}
export default Home;
