import React, { useRef } from 'react';
// import Navbar from '../Navbar/Navbar';
import './Home.css';

const Home = () => {
    const ref = useRef(null);

    const handleClick = () => ref.current?.scrollIntoView({duration: 2000, behavior: 'smooth'});
    

    return (
        <div>
            <div className="Hoome flex m-10 mb-10 mt-24 justify-around flex-col sm:flex-row" id="home">
                <div class="m-1 mt-20 flex justify-center items-start">
                    <img className=" w-90 h-90 rounded-full justify-center items-center sm:items-end transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0" src="https://i1.sndcdn.com/avatars-000520828503-5vcc4c-t500x500.jpg" alt="telco" data-aos="fade-up" data-aos-duration="2000"/>
                </div>
                <div class="m-10 flex justify-center items-center">
                <div className="flex grid grid-cols-1 m-5 mb-10">
                    <div className="flex justify-center items-end mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-100 md:text-5xl lg:text-6xl dark:text-white" data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom" data-aos-duration="2000"><h1>Welcome to &nbsp;
                        <span class="text-blue-700 dark:text-blue-800">
                            STM 
                        </span>
                        !
                        </h1>
                    </div>
                    <div>
                        <button  onClick={handleClick} type="button" class="svg-wrapper transition-opacity mb-24 mt-4 flex justify-center items-start  button-sm text-white bg-transparent hover:bg-blue-800 border border-sky-500 focus:ring-4 focus:outline-none focus:ring-blue-600 font-medium rounded-lg text-sm px-10 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" data-aos="fade-up"
                                data-aos-anchor-placement="bottom-bottom" data-aos-duration="3000">
                            <a href="#about">Click Me</a>
                        </button>
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>
                    
                    
            
    );
};
    
 

export default Home;