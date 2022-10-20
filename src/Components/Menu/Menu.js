import React, { useState } from 'react';
import './Menu.css';

const secretMenu = [
    "Mie Kocok Telur",
    "Creamy Latte Gapake Gula",
    "Rinso Dingin",
    "Teh Stelan Adib",
    "Mie Tek-tek Double + Nasi Setengah",
    "Kopi Item Ga Di Aduk",
    "Mie Tek-tek + Mie Aceh",
    "Puasa",
    "Nasi Mawud",
    "Es Teh Manis Anget Ga Pake Gula",
    "Biasa Pak"
  ];

    const getRandomSecretMenu = () => {
    return secretMenu[Math.floor(Math.random() * secretMenu.length)];
  };

const Menu = () => {
    const [secretMenu, setSecretMenu] = useState('');
    const handleClick = () => {
    // shuffle array and pick random
    const randomSecretMenu = getRandomSecretMenu();
    setSecretMenu(randomSecretMenu);
  };
    return (
        <div className="backgroundd rounded-t-full rounded-b-lg flex flex-col m-2" id="menu">
            <div className="flex justify-center items-center text-4xl font-extrabold tracking-tight leading-none text-gray-100 md:text-5xl lg:text-6xl dark:text-white" data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom" data-aos-duration="2000">
                    <h1 className="m-3 mt-20">Our &nbsp;
                        <span class="text-blue-700 dark:text-blue-800">Menu</span>
                    </h1>
            </div>
            <div className="m-10 mt-16 flex justify-center items-start">
                <img class="m-18 w-90 h-90 lg:max-w-lg rounded-lg h-auto justify-center items-center sm:items-end transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0" 
                    data-aos="fade-up" data-aos-duration="2000" src={require('../../Assets/menu.jpeg')} alt="menu"/>
            </div>
            <div className="m-10 flex justify-center items-center">
                <div class="p-6 max-w-sm rounded-lg border border-gray-800 shadow-md dark:bg-gray-800 dark:border-gray-700" data-aos="fade-up" data-aos-duration="2000" >
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-black-100 dark:text-white" data-aos="fade-up" data-aos-duration="2000" >Your Secret Menu Is</h5>
                    <p class="mb-3 font-normal text-gray-100 dark:text-white">{secretMenu}</p>
                    <button  onClick={handleClick} type="button" class="svg-wrapper transition-opacity flex justify-center items-start  button-sm text-white bg-transparent hover:bg-blue-800 border border-sky-500 focus:ring-4 focus:outline-none focus:ring-blue-600 font-medium rounded-lg text-sm px-10 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" data-aos="fade-up"
                            data-aos-anchor-placement="bottom-bottom" data-aos-duration="3000">
                        <p>Click Me</p>
                    </button>
                </div>
            </div> 
        </div>
    );
}

export default Menu;