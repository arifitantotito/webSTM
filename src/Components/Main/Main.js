import React from 'react';
import './Main.css';

const Main = () => {
    return (
        <div>
            <div className="backgrounddd flex m-10 mb-10 mt-21 justify-between flex-col sm:flex-row"  id="main">
                <div class="m-1 mt-16 flex justify-center items-start" >
                    <img class="m-18 w-90 h-90 lg:max-w-lg rounded-lg justify-center items-center sm:items-end transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0" src={require('../../Assets/idal.png')} alt="idal" data-aos="fade-up" data-aos-duration="2000" />
                </div>
                <div class="m-10 flex justify-center items-center">
                    <div className="flex grid grid-cols-1 m-5 mb-10">
                        <div className="flex justify-center items-end mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-100 md:text-5xl lg:text-6xl dark:text-white" data-aos="fade-up"
                            data-aos-anchor-placement="bottom-bottom" data-aos-duration="2000">
                                <h1>A Lovely Place You Never Met Before
                                    <div className="text-xl md:text-xl lg:text-xl">
                                        <span class="text-blue-700 dark:text-blue-800">-WICK-</span>
                                    </div>
                                </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;