import React, { useState } from "react";
/// if i write function here I can't access setEmail from here  //
// I can define function outside The component If I wanna to do that I have to pass the setEmail as parameter
// function updateEmailField(e, setEmail) {
//     // setEmail();
//     console.log(e.target.value);
//     setEmail(e.target.value);
// }
function Part1() {
    // in functinal component here is no need
    // state , variable, method, Lifeccle method
    // I can't define state in functional component
    const [counter, setCounter] = useState(0);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function updateEmailField(event) {
        // console.log(event.target.value);
        setEmail(event.target.value);
    }
    function updatePasswordFiled(event) {
        setPassword(event.target.value);
    }

    function submitForm() {
        console.log(email, password);
    }

    // conditional rendering part
    let msg = "";
    if (email === "admin" && password === "admin") {
        msg = "Hellow Admin";
    } else {
        msg = "who are you ?";
    }

    return (
        <>
            <div className="container m-auto border p-4 text-center">
                <h1>I am functional Component</h1>
                <h2 className="text-2xl">{counter}</h2>
                <button onClick={() => setCounter(counter + 1)} className="border shadow bg-gray-300 px-3 py-2 m-1">
                    Increment +
                </button>
                <button onClick={() => setCounter(counter - 1)} className={`border shadow  px-3 py-2 m-1 ${counter <= 0 ? "bg-gray-100" : "bg-gray-300"}`} disabled={counter <= 0}>
                    Decrement -
                </button>

                <div className=" w-1/4 mx-auto my-2">
                    {/* <input type="text" value={name} className="border shadow w-full px-4 py-2" onChange={(e) => updateEmailField(e, setEmail)} /> */}
                    {/* or I can called setEmail by this method if I wanna use setEmail outside the Component */}

                    {/* or I can use this method like if i define function inside App component then i will get setEmail function // or I can define updateEmailField function after return inside App component */}
                    <input type="email" value={email} className="border shadow w-full px-4 py-2" onChange={updateEmailField} />
                </div>
                <div className="w-1/4 mx-auto my-2">
                    <input type="password" value={password} className="border shadow w-full px-4 py-2" onChange={updatePasswordFiled} />
                </div>
                <div>
                    <button
                        onClick={submitForm}
                        className=" shadow bg-gray-700 text-gray-50 hover:bg-transparent border-2 border-transparent focus:outline-none focus:shadow-lg hover:border-gray-700 px-4 py-2 hover:text-gray-700">
                        Sign In
                    </button>
                </div>

                {/* conditional randering */}

                {/* <div>{msg}</div> */}
                <div>{email === "admin" && password === "admin" && "Hello admin"}</div>
            </div>
        </>
    );
    /// or i can difine the function after return statement but here function cannot be an array function like (const fuc=()=>{}) it is to be a normal function

    // // function updateEmailField(event) {
    //     // console.log(event.target.value);
    //     setEmail(event.target.value);
    // }
}

export default Part1;
