import React, { useEffect, useState } from 'react'
import "./navbar.css"
import logo from "../images/logo.jpg"

import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)




    return (
        <div className='navbar_parent'>
            {/* left side div */}
            <div className='nav_logo'>
                <img alt='hello' src={logo} width={300} />



            </div>

            {/* left end side div */}

            {/* middleDiv */}

            <div >
                <ul id='nav_links' className={isOpen ? "open" : ""}>
                    <li><NavLink to='/' >Home</NavLink></li>
                    <li><NavLink to='/About'>About Us</NavLink></li>
                    <li><NavLink to='/courses'>Courses</NavLink></li>
                    <li><NavLink to='/nonIt'>Non-IT To IT </NavLink></li>
                    <li><NavLink to='/event'>Event</NavLink></li>
                    <li><NavLink to='/labs'>LABS</NavLink></li>
                    <li><NavLink to='/team'>Team</NavLink></li>
                    <li><NavLink to='/contact'>Contact</NavLink></li>
                    <button className='hide'>Hire Talent</button>
                </ul>

            </div>

            {/* right side div */}
            <div className='nav_btn'>
                <div className='menu' onClick={() => {
                    setIsOpen(!isOpen)
                }}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                {/* {isWideScreen && <button>Hire Talent</button>} */}
                <button>Hire Talent</button>

            </div>
        </div>
    )
}

export default Navbar