import React from 'react';
import './motive.css';
import foodGif from '../../images/food.gif';
import drinkGif from '../../images/drink.gif';
import { NavBar } from '../../components';
import TypeWriterEffect from 'react-typewriter-effect';
import { useNavigate } from 'react-router-dom';

const MotivePage = () => {
    
    // ----> use Navigate if statement depending on onClick event
    // ----> onClick handlers for redirection

    return (
        <div className='main-container'>

                <div className='typewriter'>
                    <TypeWriterEffect 
                        textStyle={{
                            fontFamily: 'monospace',
                            fontWeight: 500,
                            fontSize: '1.8em',
                            color: '#ffffff',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: '55px',
                        }}
                        cursorColor='#da3422'
                        text='WHAT\S THE MOTIVE?'
                        typeSpeed={100}
                        startDelay={0.5}
                        loop={true}
                    
                    />
                </div>

                <br></br>

                <div className='category-container'>
                    
                    <div className='top-container'>
                        <div className='image-container'>
                            <img 
                                src={foodGif}
                                width='220'
                                height='250'
                                alt='Food Gif'
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'flex-end',
                                    alignSelf: 'center',
                                    marginRight: 'auto',
                                    
                                  }}
                             />
                        </div>
                    </div>
                    <div className='bottom-container'>
                        <div className='image-container'>
                        <img 
                                src={drinkGif}
                                width='220'
                                height='250'
                                alt='Food Gif'
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'flex-end',
                                    alignSelf: 'center',
                                    marginRight: 'auto',
                                    
                                  }}
                             />
                        </div>
                    </div>

                </div>

            
        </div>
    )

}



export default MotivePage;