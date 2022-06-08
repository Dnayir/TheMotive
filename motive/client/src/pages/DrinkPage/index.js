import React from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import '../../pages/MotivePage/motive.css';
import foodGif from '../../images/food.gif';
import drinkGif from '../../images/drink.gif';
import { NavLink, useNavigate } from 'react-router-dom';
import { NavBar } from '../../components';
import { loadDrinkCategory } from '../../actions';
import TypeWriterEffect from 'react-typewriter-effect';

const DrinkPage = () => {

    // ----> NEEDS NEW DRINK ANIMATED ICONS!

    const navigate = useNavigate();
    const dispatch = useDispatch();

    function handleBar(e) {
        // NEED TO SPECIFY IT IS A BAR CATEGORY
        let updateBar = selectedBar => dispatch(loadDrinkCategory(selectedBar));
        updateBar(e.currentTarget.value)
        navigate('/venues');
    }

    function handlePub(e) {
        // NEED TO SPECIFY IT IS A PUB CATEGORY
        let updateBar = selectedPub => dispatch(loadDrinkCategory(selectedPub));
        updateBar(e.currentTarget.value)
        navigate('/venues');
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
                        text='WHAT\S THE VIBE?'
                        typeSpeed={70}
                        startDelay={0.1}
                        loop={true}
                    
                    />
                </div>

                <br></br>

                <div className='category-container'>
                    
                    <div className='top-container'>
                        <NavLink role='link' className='nav-item' to='/venues'>
                            <div className='image-container'>
                                <img 
                                // BAR ANIMATED ICON NEEDED

                                    src={foodGif}
                                    onClick={handleBar}
                                    value='bar'
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
                        <NavLink role='link' className='nav-item' to='/venues'>
                            <div className='image-container'>
                                <img 
                                // PUB ANIMATED ICON NEEDED

                                        src={drinkGif} 
                                        onClick={handlePub}
                                        value='Pub'
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


export default DrinkPage;