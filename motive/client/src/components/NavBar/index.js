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

                <div className='nav-container'>
                    
                    <div className='image-container'>
                        <img src={logo} 
                            width='180' 
                            height='160' 
                            alt='the.MOTIVE Logo'
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                alignSelf: 'center',
                                
                                marginLeft: '55px',
                                marginTop: '5px',
                                margin: '0',
                                
                            }} />
                    </div>
                        

                    {/* ---- MODAL BOX NEEDED FOR LOCATION ----- */}
                    <NavLink role='link' className='nav-item' to='/location'>
                        <div className='icon-container'>
                            <img src={location} 
                                width='60' 
                                height='80' 
                                alt='Location'
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'flex-start',
                                    alignSelf: 'center',
                                    marginRight: '225px',
                                    marginLeft: '-22px',
                                    marginTop: '-170px',
                                    margin: '0',
                                    
                                }} />

                        </div>
                    </NavLink>

                    <NavLink role='link' className='nav-item' to='/friends'>
                        <div className='icon-container'>
                            <img src={friends} 
                                width='60' 
                                height='80' 
                                alt='Location'
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    alignSelf: 'center',
                                    marginRight: '225px',
                                    marginLeft: '-26px',
                                    marginTop: '-170px',
                                    margin: '0',
                                    
                                }} />

                        </div>
                    </NavLink>

                    <NavLink role='link' className='nav-item' to='/friends'>
                        <div className='icon-container'>
                            <img src={logout} 
                                width='60' 
                                height='80' 
                                alt='Location'
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'flex-start',
                                    alignSelf: 'center',
                                    marginRight: '225px',
                                    marginLeft: '-22px',
                                    marginTop: '-90px',
                                    margin: '0',
                                    
                                }} />

                        </div>
                    </NavLink>

                </div>
            </nav>
            
    );
}

export default NavBar;