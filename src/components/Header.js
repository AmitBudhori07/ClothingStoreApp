import React from 'react';

function Nav() {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-teal p-4 shadow-xl mb-3 bg-white">
            <div className="flex items-center flex-no-shrink">
                <img src="/Gym_logo.png" alt="gym_logo"/>
           </div>
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
                    <svg className="h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                </button>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto pl-8">
                <div className="pt-2 relative mx-auto text-gray-600 flex-auto">
                    <i className="fas fa-search absolute p-3 pl-4 text-gray-dark"></i>
                    <input className="border-gray-300 bg-gray-light h-10 pl-14 pr-5 rounded-lg bg-gray-light focus:outline-none w-8/12"
                        type="search" name="search" placeholder="Find Fitness Gear" />
                        <i className="fas fa-bell transform scale-150 pl-10"></i>
                        <i className="fas fa-envelope transform scale-150 pl-10"></i>
                        <i className="fas fa-pencil-alt transform scale-150 pl-10"></i>
                </div>
                <div>
                    <div className="relative inline-flex">
                        <svg className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fillRule="nonzero" /></svg>
                        <select className="border border-1 border-black-light text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none font-dropdown">
                            <option>John Smith</option>
                            <option>Red</option>
                            <option>Blue</option>
                            <option>Yellow</option>
                            <option>Black</option>
                            <option>Orange</option>
                            <option>Purple</option>
                            <option>Gray</option>
                            <option>White</option>
                        </select>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav;