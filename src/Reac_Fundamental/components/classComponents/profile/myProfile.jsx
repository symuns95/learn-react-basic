import React from "react";
import Bio from "./components/bio";
import Skill from "./components/skills";
import Social from "./components/social";
class MyProfile extends React.Component {
    personProps = {
        social: {
            social1: "Facebook",
            social2: "Instagram",
            social3: "youtube",
        },
        skills: {
            skillA: "javaScript",
            skillB: "React",
            skillC: "NodeJs",
        },
    };
    render() {
        return (
            <>
                <div className="my-3 p-3">
                    <Bio name={this.props.name} about={this.props.about} />
                    <Skill skillA={this.personProps.skills.skillA} skillB={this.personProps.skills.skillB} skillC={this.personProps.skills.skillC} />
                    <Social social1={this.personProps.social.social1} social2={this.personProps.social.social2} social3={this.personProps.social.social3} />
                </div>
            </>
        );
    }
}

export default MyProfile;
