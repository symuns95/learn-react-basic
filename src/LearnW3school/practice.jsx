import React from 'react'
import './myScss.scss'
class Practice extends React.Component {
    render() {
        // let style = {
        //     "color": "red ",
        //     "background-color": "orange"   // i can use inline style in string

        // }
        return (
            <>
                <div className="bg-scss">
                    <h1>Hello Style!</h1>
                    <p>Add a little style!.</p>
                </div>
            </>
        );
    }
}

export default Practice