import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="backgroundd rounded-t-lg rounded-b-full m-2"id="about">
            <div className="flex justify-center items-center text-4xl font-extrabold tracking-tight leading-none text-gray-100 md:text-5xl lg:text-6xl dark:text-white" data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom" data-aos-duration="2000"><h1 className="m-3 mt-20">About &nbsp;
                <span class="text-blue-700 dark:text-blue-800">Us</span></h1>
            </div>
            <div className="flex justify-center items-center text-xl font-extrabold tracking-tight leading-none text-gray-100 md:text-xl lg:text-xl dark:text-white" data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom" data-aos-duration="2000"><h1 className="m-3 mt-9"> This is a place where telco students gather, tell stories, eat and drink with friends across generations.</h1>
            </div>
            <div className="flex justify-around m-5 items-end flex-col sm:flex-row" data-aos="fade-up" data-aos-duration="2000">
                <div class="mb-30 mt-10 m-2 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
                    <img class="rounded-t-lg" src={require('../../Assets/love.JPG')} alt=""/>
                        <div class="p-5">
                            <p>
                                <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">A place full of <span class="text-blue-700 dark:text-blue-800">LOVE</span></h5>
                            </p>
                    {/* <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p> */}
                        </div>
                </div>
                <div class="mb-30 mt-10 m-2 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
                    <img class="rounded-t-lg" src={require('../../Assets/laughh.JPG')} alt=""/>
                        <div class="p-5">
                            <p>
                                <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">A place full of <span class=" text-blue-700 dark:text-blue-800">LAUGHTER</span></h5>
                            </p>
                    {/* <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p> */}
                        </div>
                </div>
                <div class="mb-30 mt-10 m-2 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
                    <img class="rounded-t-lg" src={require('../../Assets/story.JPG')} alt=""/>
                        <div class="p-5">
                            <p>
                                <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">A place full of <span class=" text-blue-700 dark:text-blue-800">STORIES</span></h5>
                            </p>
                    {/* <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p> */}
                        </div>
                </div>
                <div class="mb-30 mt-10 m-2 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
                    <img class="rounded-t-lg" src={require('../../Assets/memories.JPG')} alt=""/>
                        <div class="p-5">
                            <p>
                                <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">A place full of <span class=" text-blue-700 dark:text-blue-800">MEMORIES</span></h5>
                            </p>
                    {/* <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p> */}
                        </div>
                </div>
            </div>
        </div>
    );
}



export default About;