import React, { Fragment } from "react";
// props
function Greetcomponent(props) {
    console.log(props);
    return (
        <>
            <h1 className="text-center text-xl font-bold">Hello , {props.name}</h1>

            {/* i have to define props.chidren here for geting props children */}
            <h1>this is h1 tag</h1>
            {props.children}
        </>
    );
}

function Part2() {
    const arr = [
        {
            Id: 1,
            name: "saymun",
        },
        {
            Id: 2,
            name: "Hiramon",
        },
    ];

    return (
        <div>
            {/* I can pass the children inside components*/}
            {/* <Greetcomponent name="Saymun" children={<p>Hi i am children </p>} /> */}
            {/* I can wrap the children inside Component */}
            {/* <Greetcomponent name="Saymun">
                <p>Hi I am another children</p>
            </Greetcomponent> */}
            {/* uncomment to show the component */}
            {/* <Greetcomponent name="Saymun" children="Hi I am children " /> */}

            {/* /  lets working with List  */}

            <div className="block text-center text-xl">
                {[1, 2, 3].map((element) => {
                    return <div> {element * 2}</div>; // we can use map function inside jsx
                })}

                <ul>
                    {arr.map((el, index) => {
                        return (
                            <Fragment>
                                <p>Id No. {el.Id}</p>
                                <li key={index}>{el.name}</li>
                            </Fragment>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Part2;
