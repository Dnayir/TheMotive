import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import './navbar.css';

import friends from '../../images/friends.gif';
import logo from  '../../images/logo.gif';
import review from  '../../images/review.gif';
import logout from  '../../images/logout.gif';

import { loadLong, loadLat } from '../../actions';
import { useNavigate } from 'react-router-dom';


const NavBar = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [refresh, setRefresh] = useState(0);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position.coords);
            let updateLong = selectedLongitude => dispatch(loadLong(selectedLongitude));
                updateLong(position.coords.longitude)
            let updateLat = selectedLatitude => dispatch(loadLat(selectedLatitude));
                updateLat(position.coords.latitude)
        });
    
      }, [refresh]);

    function handleClick() {
        return navigate(-1)
    }

    // // ---- > NEED TO ADD CORRECT COOKIES!
    // function handleLogout() {
    //     document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"
    //     window.location.reload();
    // }

    return (

            <nav>

                <div className='nav-container'>

                    <div className='left-corner'>

                        <NavLink role='link' className='nav-item' to={handleClick}>
                            <div className='image-container'>
                                <img src={logo} 
                                    width='180' 
                                    height='160' 
                                    alt='the.MOTIVE Logo'
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'flex-start',
                                        alignSelf: 'flex-start',
                                        
                                        marginLeft: '110px',
                                        marginTop: '55px',
                                        margin: '0',
                                        
                                    }} />
                            </div>
                        </NavLink>

                    </div>
                    
                    <div className='right-corner'>

                        <NavLink role='link' className='nav-item' to='/review'>
                            <div className='icon-container'>
                                <img src={review} 
                                    width='60' 
                                    height='100' 
                                    alt='Location'
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        alignSelf: 'center',
                                        marginTop: '-170px',
                                        margin: '0',
                                        
                                    }} />

                            </div>
                        </NavLink>
        
                        <NavLink role='link' className='nav-item' to='/friends'>
                            <div className='icon-container'>
                                <img src={friends} 
                                     width='60' 
                                     height='100' 
                                    alt='Location'
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        alignSelf: 'center',
                                        margin: '0',
                                        
                                    }} />

                            </div>
                        </NavLink>

                        <NavLink role='link' className='nav-item' to='/'>
                            <div className='icon-container'>
                                <img src={logout} 
                                     width='60' 
                                     height='100' 
                                    alt='Location'
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'flex-start',
                                        alignSelf: 'center',

                                        marginTop: '-90px',
                                        margin: '0',
                                        
                                    }} />

                            </div>
                        </NavLink>
                    </div>

                </div>
            </nav>
            
    );
}

export default NavBar;