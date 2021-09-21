import React from 'react'
import useDarkmode from './useDarkmode'

const DarkMode = () => {
    const [colorTheme, setTheme] = useDarkmode()

    return (
        < >
            {
                colorTheme === "dark" ? <button onClick={() => setTheme(colorTheme)} className="bg-blue-500 text-gray-50 p-2 md:m-3 px-3 transition duration-500">Dark</button>
                    : <button onClick={() => setTheme(colorTheme)} className="bg-blue-500 text-gray-50 p-2 md:m-3 px-3 transition duration-500">Light</button>
            }

            <section className="dark:bg-gray-800 dark:text-gray-50 text-gray-700 flex h-screen transition duration-500">
                {
                    colorTheme !== "dark" ? <h1 className="m-auto">Welcome to DarkMode</h1> : <h1 className="m-auto">Welcome to LightMode</h1>
                }
            </section>
        </>
    )
}

export default DarkMode
