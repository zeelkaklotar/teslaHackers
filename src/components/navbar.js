import React, { useState } from 'react';
import { Link } from 'gatsby';

function Navbar() {
    const [showLinks, setShowLinks] = useState(false);

    const toggleLinks = () => {
        setShowLinks(!showLinks);
    };

    return (
        <nav className="flex flex-col sm:flex-row justify-around gap-5 items-center sm:items-center h-auto sm:h-16 bg-[#020143] text-white">
    <div className="flex items-center gap-5">
        <div className="pl-8 sm:pl-0 text-xl mb-4 sm:mb-4 mt-3 text-blue-300">Zeel's Portfolio</div>
        <div className="sm:hidden">
            <button onClick={toggleLinks} className="block text-white hover:text-green-500 focus:outline-none">
                {showLinks ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transition-transform duration-300 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transition-transform duration-300 transform rotate-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                )}
            </button>
        </div>
    </div>
    <ul className={`flex ${showLinks ? 'flex-col' : 'hidden'} sm:flex flex-col sm:flex-row pr-8 sm:pr-0 mt-8`}>
        <li className="mr-6 mb-2 sm:mb-0">
            <Link to="" className="hover:text-fuchsia-300 text-fuchsia-600 no-underline">Home</Link>
        </li>
        <li className="mr-6 mb-2 sm:mb-0">
            <Link to="story" className="hover:text-fuchsia-300 text-fuchsia-600 no-underline">Story</Link>
        </li>
        <li className="mr-6 mb-2 sm:mb-0">
            <Link to="stacks" className="hover:text-fuchsia-300 text-fuchsia-600 no-underline">Stacks</Link>
        </li>
        <li className="mr-6 mb-2 sm:mb-0">
            <Link to="project" className="hover:text-fuchsia-300 text-fuchsia-600 no-underline">Project</Link>
        </li>
        <li>
            <Link to="contactUs" className="hover:text-fuchsia-300 text-fuchsia-600 no-underline">Contact Me</Link>
        </li>
    </ul>
</nav>
        

    );
}

export default Navbar;
