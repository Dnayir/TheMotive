import React from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';

import friends from '../../images/friends.gif';
import logo from  '../../images/logo.gif';
import location from  '../../images/location.gif';
import logout from  '../../images/logout.gif';


const NavBar = () => {

    // ----> ENSURES USER IS LOGGED IN BEFORE SHOWING NAVBAR
    // const username = useSelector(state => state.username)

    return (
        <nav>
            <div className='left-corner'>
                <img src={logo} width='100' height='100' alt='the.MOTIVE Logo' />
            </div>

            {/* --- USE WHEN USERNAME FUNCTIONALITY CREATED */}
            {/* <div className='right-corner'>
                {username && navBarLinks}
            </div> */}

            <div className='right-corner'>

                {/* ---- MODAL BOX NEEDED FOR LOCATION ----- */}
                <NavLink role='link' className='nav-item' to='/location'>
                    <div className='image-container'>
                        <img src={location} width='100' height='100' alt='Location' />

                    </div>
                </NavLink>

                <NavLink role='link' className='nav-item' to='/friends'>
                    <div className='image-container'>
                        <img src={friends} width='100' height='100' alt='Location' />

                    </div>
                </NavLink>

                <NavLink role='link' className='nav-item' to='/friends'>
                    <div className='image-container'>
                        <img src={logout} width='100' height='100' alt='Location' />

                    </div>
                </NavLink>
            </div>
        </nav>
    );
}

export default NavBar;