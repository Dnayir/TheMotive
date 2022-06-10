import React, { useEffect, useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import axios from 'axios';
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

    const [usernamePulled, setUsernamePulled] = useState('')

    useEffect(() => {
        async function searchApi() {
          try {
            const result = await axios.get(
            `https://the-motive-one.herokuapp.com/username`
            );
            console.log(result)
            const x = result.data.username;
            let y = 'WHATS THE MOTIVE' + x + '?'
            console.log(y)
            console.log(typeof(y))
            setUsernamePulled('WHATS THE MOTIVE' + x + '?')
          } catch (err) {
            console.error(err);
          }
        }
        searchApi();
      }, []);

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
                <div className='content-container'>

                    <div className='typewriter'>
                        <TypeWriterEffect 
                            textStyle={{
                                color: '#4DA537',
                                textShadow: '2px 2px 2px  #FF5900',
                                fontFamily: 'monospace',
                                fontWeight: 'bold',
                                fontSize: '2.4em',
                                textAlign: 'center',
                                
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginTop: '15px',
                            }}
                            cursorColor='#da3422'
                            text={usernamePulled}
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
                                            height='290'
                                            alt='Food Gif'
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'flex-end',
                                                alignSelf: 'center',
                                                marginRight: 'auto',
                                                marginTop: '-120px',
                                                
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
                                                marginTop: '-120px',
                                                
                                            }}
                                        />
                                </div>
                            </NavLink>
                        </div>

                    </div>
            
            </div>
        </div>
    )

}



export default MotivePage;