import React from "react";
import Skill from "../components/profile/components/skills";
function MyProps(props) {
    console.log("MyProps ", props);
    return (
        <>
            <h3 className="font-bold">My name is this {props.name}</h3>
            <Skill />
        </>
    );
}
export default MyProps;
