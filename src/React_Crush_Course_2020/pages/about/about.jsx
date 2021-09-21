import React from "react";
import { Link, NavLink } from "react-router-dom";
export function About() {
    return (
        <>
            <div>
                <div>
                    <NavLink exact to="/" activeClassName="underline">
                        Home
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/about" activeClassName="underline">
                        About
                    </NavLink>
                </div>
            </div>
            <h1>Welcome to About</h1>
        </>
    );
}
