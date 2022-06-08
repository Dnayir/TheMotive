import React from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import './motive.css';
import foodGif from '../../images/food.gif';
import drinkGif from '../../images/drink.gif';
import { NavBar } from '../../components';
import TypeWriterEffect from 'react-typewriter-effect';
import { useDispatch } from 'react-redux';
import { loadType } from '../../actions';

const MotivePage = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    function handleFood(e) {
        dispatch(loadType('food'));
        navigate('/food');
    }

    function handleDrink(e) {
        dispatch(loadType('drink'));
        navigate('/drink');
    }



    return (
        <div className='main-container'>
                
                <NavBar />
                <div className='typewriter'>
                    <TypeWriterEffect 
                        textStyle={{
                            color: '#4DA537',
                            textShadow: '2px 2px 2px  #FF5900',
                            fontFamily: 'monospace',
                            fontWeight: 'bold',
                            fontSize: '3.7em',
                            textAlign: 'center',
                            lineHeight: '1.3',

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