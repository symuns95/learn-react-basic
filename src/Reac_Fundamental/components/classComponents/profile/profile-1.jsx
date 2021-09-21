import React from "react";
import Bio from "./components/bio";
import Skill from "./components/skills";
import Social from "./components/social";
class Profile1 extends React.Component {
    personProps = {
        social: {
            social1: "Facebook",
            social2: "Github",
            social3: "youtube",
        },
        skills: {
            skillA: "javaScript",
            skillB: "React",
            skillC: "PHP",
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

export default Profile1;
