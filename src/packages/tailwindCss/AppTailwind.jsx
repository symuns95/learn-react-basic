import React from 'react'
import Header from './header'
import Footer from './footer'
import DarkMode from './darkMode/darkMode'
const AppTailwind = () => {

    return (
        <div>
            <Header />
            {/* container style till medium screen */}
            <section className="md:container md:mx-auto">
                <div className="breakpoint ">
                    {/* different class for different breakpont */}
                    <div className="2xl:bg-gray-400 xl:bg-gray-500 lg:bg-gray-600 md:bg-gray-700 sm:bg-gray-800 sm:p-4 text-gray-100">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. A laboriosam quos pariatur, maiores inventore doloribus totam possimus magnam deserunt tenetur explicabo vel voluptates fugiat natus veniam fugit quasi sunt itaque.
                    </div>
                </div>
                <div className="grid__cols__style my-4">
                    <div class="grid grid-cols-3 gap-4">
                        <div className="border p-3 bg-purple-300">1</div>
                        <div className="border p-3 bg-purple-300">2</div>
                        <div className="border p-3 bg-purple-300">3</div>
                        <div className="border p-3 bg-purple-300">4</div>
                        <div className="border p-3 bg-purple-300">5</div>
                        <div className="border p-3 bg-purple-300">6</div>
                    </div>

                    <div className="grid__col_distrubution">
                        {/*  I can distrubute col according parent div grid col = how much col in one grid = grid-col-colNumber */}
                        <div className="grid grid-cols-6 gap-4">
                            {/* see here parent div is grid-cols-6 and child div is col-span-4 + col-span-2 = grid-cols-6 */}
                            <div className="border col-span-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea iste consectetur vitae eos consequuntur sunt beatae, doloremque nemo laboriosam quam a quo dolorem impedit iure voluptatem dolores excepturi rerum. Quis.
                            </div>
                            <div className="border col-span-2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea iste consectetur vitae eos consequuntur sunt beatae, doloremque nemo laboriosam quam a quo dolorem impedit iure voluptatem dolores excepturi rerum. Quis.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid__row__styel">
                    {/* here one row contains 3 rows and gap is 4  and row is column wise */}
                    <div className="grid grid-rows-3 grid-flow-col gap-4">
                        <div className="border p-3 bg-purple-300">1</div>
                        <div className="border p-3 bg-purple-300">2</div>
                        <div className="border p-3 bg-purple-300">3</div>
                        <div className="border p-3 bg-purple-300">4</div>
                        <div className="border p-3 bg-purple-300">5</div>
                        <div className="border p-3 bg-purple-300">6</div>
                    </div>
                </div>
                {/* multiple effect dakm mode :'media' take browser default value */}
                <DarkMode />
            </section>
            <Footer />
        </div>
    )
}

export default AppTailwind
