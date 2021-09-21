import React, { Component, useEffect, useState } from 'react'
class Counter extends Component {
    state = {
        couter: 0
    }
    targetVlue = 20;

    render() {
        if (this.state.couter < this.targetVlue) {
            setTimeout(() => {
                this.setState({ couter: this.state.couter + 1 })
            }, 1000);
        }
        else {
            console.log('complete')
        }

        return <>
            <p>Lets Create a Counter </p>

            <h1>Counter {this.state.couter}</h1>




        </>
    }
}


// const Counter = () => {
//     const [couter, setCouter] = useState(0)

//     useEffect(() => {
//         const targetVlue = 6000;
//         setTimeout(() => {
//             if (couter < targetVlue) {
//                 setCouter(couter + 5)
//             }
//             else {
//                 console.log('complete')
//             }
//         }, 1);
//     }, [couter])
//     return (
//         <div>
//             <h1>Lets make a Counter</h1>
//             <p>{couter}</p>
//         </div>
//     )
// }

export default Counter
