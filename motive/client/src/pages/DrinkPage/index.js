import React, { useEffect } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import '../../pages/MotivePage/motive.css';
import barGif from '../../images/bar.gif';
import pubGif from '../../images/pub.gif';

import { NavBar } from '../../components';
import { loadDrinkCategory } from '../../actions';
import TypeWriterEffect from 'react-typewriter-effect';

const DrinkPage = () => {
  useEffect(() => {
    async function handleUserId() {
      try {
        const result = await axios.get(
          `https://the-motive-one.herokuapp.com/check`
        );
        if (result === false) {
          return navigate('/user');
        }
      } catch (err) {
        console.error(err);
      }
    }
    handleUserId();
  }, []);

  // ----> NEEDS NEW DRINK ANIMATED ICONS!

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleBar(e) {
    // NEED TO SPECIFY IT IS A BAR CATEGORY
    let updateBar = (selectedBar) => dispatch(loadDrinkCategory(selectedBar));
    updateBar(e.currentTarget.value);
    navigate('/venues');
  }

  function handlePub(e) {
    // NEED TO SPECIFY IT IS A PUB CATEGORY
    let updateBar = (selectedPub) => dispatch(loadDrinkCategory(selectedPub));
    updateBar(e.currentTarget.value);
    navigate('/venues');
  }

  return (
    <div className="main-container">

      <NavBar />
      <div className='content-container'>

        <div className="typewriter">
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
            cursorColor="#da3422"
            text="WHAT'S THE VIBE?"
            typeSpeed={70}
            startDelay={0.1}
            loop={true}
          />
        </div>

        <br></br>

        <div className="category-container">

          <div className="top-container">
            <NavLink role="link" className="nav-item" to="/venues">
              <div className="image-container">
                <img
                    src={barGif}
                    onClick={handleBar}
                    value="bar"
                    width="170"
                    height="290"
                    alt="Bar Gif"
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
          <div className="bottom-container">
            <NavLink role="link" className="nav-item" to="/venues">
              <div className="image-container">
                <img
                    src={pubGif}
                    onClick={handlePub}
                    value="Pub"
                    width="170"
                    height="200"
                    alt="Pub Gif"
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
  );
};

export default DrinkPage;
