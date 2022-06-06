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
                <div className='image-container'>
                    <img src={logo} 
                        width='250' 
                        height='220' 
                        alt='the.MOTIVE Logo'
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            alignSelf: 'center',
                            marginRight: '225px',
                            margin: '0',
                            
                        }} />
                </div>
                    
            </div>

            {/* --- USE WHEN USERNAME FUNCTIONALITY CREATED */}
            {/* <div className='right-corner'>
                {username && navBarLinks}
            </div> */}

            <div className='right-corner'>

                {/* ---- MODAL BOX NEEDED FOR LOCATION ----- */}
                <NavLink role='link' className='nav-item' to='/location'>
                    <div className='icon-container'>
                        <img src={location} width='100' height='100' alt='Location' />

                    </div>
                </NavLink>

                <NavLink role='link' className='nav-item' to='/friends'>
                    <div className='icon-container'>
                        <img src={friends} width='100' height='100' alt='Location' />

                    </div>
                </NavLink>

                <NavLink role='link' className='nav-item' to='/friends'>
                    <div className='icon-container'>
                        <img src={logout} width='100' height='100' alt='Location' />

                    </div>
                </NavLink>
            </div>
        </nav>
    );
}

export default NavBar;