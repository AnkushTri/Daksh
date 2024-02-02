import React from 'react'

import { Link } from 'react-router-dom'
import LogoFrontend from './LogoFrontend'

const NavBar = () => {
    return (
        <>
         <LogoFrontend />
        <div >
            <div >
                <Link to="/">Home</Link>
            </div>
            <div>
                <Link to="/about">About</Link>
            </div>
            <div>
                <Link to="/services">Services</Link>
            </div>

        </div>
        </>
    )
}

export default NavBar