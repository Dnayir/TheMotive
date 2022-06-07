import React from 'react';
import '../../pages/MotivePage/motive.css';
import { NavBar } from '../../components';
import TypeWriterEffect from 'react-typewriter-effect';

const FoodPage = () => {

    // ----> use Navigate if statement depending on onClick event
    // ----> NEEDS NEW DRINK ANIMATED ICONS!

    // ----> onClick handlers for redirection
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
                    
                    
                    
                </div>
            
            
        </div>
    )

}


export default DrinkPage;
