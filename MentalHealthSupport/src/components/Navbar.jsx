import React from 'react';
import {Link, NavLink} from 'react-router-dom'

export function Navbar(props) {
    return (
        <>
            <nav className="bg-white border-gray-200 dark:bg-gray-900 flex-between w-full pt-3 
            ">
                <div className="container mx-auto flex flex-wrap justify-between items-center p-4">
                    <a href="https://flowbite.com" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img
                            src="https://img.collegepravesh.com/2017/02/PICT-Logo.jpg"
                            className="h-10 w-15"
                            alt="Flowbite Logo"
                        />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                            PICT MENTAL HEALTH SUPPORT
                        </span>
                    </a>
                    <div className="flex items-center space-x-6 rtl:space-x-reverse">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2iN0nGbRtwii1D4Ft4vkO729jmT_1t3fdCw&s"
                            className="h-5"
                            alt="call"
                        />
                        <a
                            href="tel:5541251234"
                            className="text-sm text-gray-500 dark:text-white hover:underline"
                        >
                            (555) 412-1234
                        </a>
                        <NavLink
                            
                            className="text-sm text-blue-600 dark:text-blue-500 hover:underline"
                        >
                        <Link to ="/login">
                                       Login
                                        </Link>
                        </NavLink>
                        <button
                            type="button"
                            className="px-4 py-2 text-sm font-medium text-white bg-[#a9acec] rounded-lg hover:bg-[#7377bb] focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Chat with us
                        </button>
                    </div>
                </div>
            </nav>
            <nav className="bg-[#a9acec] dark:bg-gray-700 w-full">
                <div className="container mx-auto px-4 py-3">
                    <div className="flex items-center">
                        <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                            <li>
                                <NavLink
                                
                                    className="text-gray-900 dark:text-white hover:underline"
                                    aria-current="page"
                                >
                                    
                                    <Link to ="/">
                                          Home
                                        </Link>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className="text-gray-900 dark:text-white hover:underline">
                                        <Link to="/aboutus">
                                            About Us
                                        </Link>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    
                                    className="text-gray-900 dark:text-white hover:underline"
                                >
                                     <Link to="/consultation">
                                     Consultation
                                        </Link>
                                   
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    
                                    className="text-gray-900 dark:text-white hover:underline"
                                >
                                  <Link to="/surveycomponent">
                                   Feedback
                                        </Link>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
