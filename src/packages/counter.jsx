import React from 'react'
import NumberCounter from 'number-counter';


function Counter() {
    return (
        <div>
            <NumberCounter end={100} delay={5} className="increment" preFix="Total" postFix="Members" />
        </div>
    )
}

export default Counter
