import React from "react";
import MyProfile from "./myProfile";
import Profile1 from "./profile-1";
class CreatePofile extends React.Component {
    render() {
        console.log(this.props);
        const myProps = {
            name: "MD Saymun",
            about: "I wanna be full stuck Developer Now I am still learning about React",
        };
        const person1Prop = {
            name: "Mahabubur Rahman",
            about: "I wanna be full stuck Developer Now I wanna complete React",
        };
        return (
            <>
                <div className="container mx-auto mb-3 ">
                    <div className="w-1/2 mx-auto pt-10">
                        <h3 className="text-lg font-bold text-center my-3">Profiles</h3>
                    </div>
                    <section className="person-skill container mx-auto border">
                        <h3 className="font-bold text-lg text-center">List of Programmers</h3>
                        <MyProfile name={myProps.name} about={myProps.about} />
                        <Profile1 name={person1Prop.name} about={person1Prop.about} />
                    </section>
                </div>
            </>
        );
    }
}

export default CreatePofile;
