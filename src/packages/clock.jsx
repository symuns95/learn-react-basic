import React, { useEffect, useState } from 'react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
function MyApp() {
    const [value, setValue] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(
            () => setValue(new Date()),
            1000
        );

        return () => {
            clearInterval(interval);
        }
    }, []);

    return (
        <div className="flex flex-col items-center">
            <p>Current time:</p>
            <Clock value={value} />
        </div>
    )
}
export default MyApp