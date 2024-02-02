import React from 'react'
import { MdAccountCircle } from "react-icons/md";
import { Link } from 'react-router-dom'
import LogoFrontend from './LogoFrontend'
import styled from 'styled-components'
import Search from './Search'
import Location from './Location'
import { useAuth } from '../store/auth';

const NavBar = () => {

    const { loggedIn } = useAuth()

    return (
        <Wrappper>
            <LogoFrontend />
            <div className='nav-bar'>
                {/* <div className='nav-sec'>
                    <Link to="/" className='nav-part'>Home</Link>
            </div> */}
                <div className='nav-sec'>
                    <Location />
                </div>
                <div className='nav-sec'>
                    <Search />
                </div>
                {loggedIn ?
                    <div className='nav-sec'>
                        <Link to="/logout" className='nav-part'>Logout</Link>
                    </div>
                    : <>
                        <div className='nav-sec'>
                            <Link to="/login" className='nav-part'>Login</Link>
                        </div>
                        <div className='nav-sec'>
                            <Link to="/signup" className='nav-part'>Signup</Link>
                        </div>
                    </>
                }
                <div className='account nav-sec'>
                    <MdAccountCircle />
                </div>

            </div>
        </Wrappper>
    )
}
const Wrappper = styled.div`
display:flex;
gap:14rem;
.nav-bar{
    display:flex;
    justify-content: space-between;
    align-items:center;
    gap:4rem;
}
Link{
    text-decoration:none;
}
.account{
    font-size:1.7rem;
}
.nav-part{
    text-decoration:none;
    color:black;
    font-size:1.2rem;
}
`

export default NavBar