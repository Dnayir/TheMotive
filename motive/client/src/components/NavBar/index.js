import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import './navbar.css';

import friends from '../../images/friends.gif';
import logo from  '../../images/logo.gif';
import location from  '../../images/location.gif';
import logout from  '../../images/logout.gif';

import { loadLong, loadLat } from '../../actions';


const NavBar = () => {

    const dispatch = useDispatch();
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
    
    function handleUpdateLocation() {
        setRefresh(prev => prev + 1)
    }

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
                    {/* <button role='link' className='nav-item' onClick={handleUpdateLocation}>
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
                    </button> */}

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