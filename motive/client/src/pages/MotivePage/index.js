import React, { useState } from 'react';
import { useNavigate, useDispatch } from 'react-router-dom'
import './motive.css';
import foodGif from '../../images/food.gif';
import drinkGif from '../../images/drink.gif';
import { NavBar } from '../../components';

import { NavLink } from 'react-router-dom';
import TypeWriterEffect from 'react-typewriter-effect';





const MotivePage = () => {
    
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleFood(e) {
        navigate('/food');
    }

    function handleDrink(e) {
        navigate('/drink');
    }



    return (
        <div className='main-container'>
       
                <NavBar />
                <div className='typewriter'>
                    <TypeWriterEffect 
                        textStyle={{
                            fontFamily: 'monospace',
                            fontWeight: 'bold',
                            fontSize: '3.7em',
                            textAlign: 'center',
                            lineHeight: '1.3',
                            textShadow: '7px 7px 7px  #FF5900',
                            color: '#ffffff',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: '100px',
        
                    
                        }}
                        cursorColor='#da3422'
                        text='WHAT\S THE MOTIVE?'
                        typeSpeed={70}
                        startDelay={0.1}
                        loop={true}
                    
                    />
                </div>

                <br></br>

                <div className='category-container'>
                    
                    <div className='top-container'>
                        <NavLink role='link' className='nav-item' to='/food'>
                                <div className='image-container'>
                                    <img 
                                        src={foodGif}
                                        onClick={handleFood}
                                        width='170'
                                        height='200'
                                        alt='Food Gif'
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'flex-end',
                                            alignSelf: 'center',
                                            marginRight: 'auto',
                                            marginTop: '-40px',
                                            
                                        }}
                                    />
                                </div>
                            </NavLink>
                    </div>

                    <div className='bottom-container'>
                        <NavLink role='link' className='nav-item' to='/drink'>
                            <div className='image-container'>
                                <img 
                                        src={drinkGif}
                                        onClick={handleDrink}
                                        width='170'
                                        height='200'
                                        alt='Food Gif'
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'flex-end',
                                            alignSelf: 'center',
                                            marginRight: 'auto',
                                            marginTop: '-10px',
                                            
                                        }}
                                    />
                            </div>
                        </NavLink>
                    </div>

                </div>
            
            
        </div>
    )

}



export default MotivePage;