import React from 'react';
import './Navbar.css';

function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
      <div>
        <nav className=" flex flex-wrap items-center justify-between py-3 mb-3">
          <div className="absolute top-5 md:right-5 container mx-auto flex flex-wrap items-center justify-between"data-aos="fade-left" data-aos-duration="1500">
            <div className=" w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start" >
              <p className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" href="#pablo"></p>
              <button 
                className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
                  >
                  <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                  <path data-aos="fade-left" data-aos-duration="1500" fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
              </button>
            </div>
          <div 
            className={
              "lg:flex flex-grow items-center " +
              (navbarOpen ? " " : " hidden")
            } id="example-navbar-danger" 
            >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto" >
              <li className="nav-item" >
                <p className="block md:bgg bggg px-3 py-2 flex justify-center items-center text-xs uppercase font-bold leading-snug text-white md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" href="#">
                  <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75 "></i><span className="ml-2">Home</span>
                </p>
              </li>
              <li className="nav-item">
                <a className="block md:bgg bggg px-3 py-2 flex justify-center items-center text-xs uppercase font-bold leading-snug text-white  md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" href="#about">
                  <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><span className="ml-2">About</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="block md:bgg bggg px-3 py-2 flex justify-center items-center text-xs uppercase font-bold leading-snug text-white  md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" href="#main">
                  <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Main</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="block md:bgg bggg sm:bg-slate-600 px-3 py-2 flex justify-center items-center text-xs uppercase font-bold leading-snug text-white  md:hover:text-blue-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" href="#menu">
                  <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Menu</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    );
}

export default Navbar;