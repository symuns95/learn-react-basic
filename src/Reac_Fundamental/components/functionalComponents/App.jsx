import React, { useState } from "react";
function App() {
    // in functinal component here is no need
    // state , variable, method, Lifeccle method
    // I can't define state in functional component
    const name = "saymun";

    const [counter, setCounter] = useState(0);
    return (
        <>
            <h1>I am functional Component</h1>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={() => setCounter(counter - 1)}>-</button>
        </>
    );
}

export default App;
