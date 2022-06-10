import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import introGif from '../../images/intro.gif';
import TypeWriterEffect from 'react-typewriter-effect';

import { loadLong, loadLat } from '../../actions';
import useGeolocation from 'react-hook-geolocation';
import reactDom from 'react-dom';

import './landing.css';

const LandingPage = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords);
        let updateLong = selectedLongitude => dispatch(loadLong(selectedLongitude));
            updateLong(position.coords.longitude)
        let updateLat = selectedLatitude => dispatch(loadLat(selectedLatitude));
            updateLat(position.coords.latitude)
    });

  }, []);

  // -----> NAVIGATES TO LOGIN / SIGN UP TOGGLE FORM
  const handleEntry = (e) => {
    navigate('/user');
  };

  return (
    <div className="main-container">

      <div className='content-container'>

        <div className="animation-container">
          <img fluid='true'
            src={introGif}
            alt="Intro Gif"
            width='370' 
            height='500'
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-end',
              alignSelf: 'center',
              marginRight: 'auto',
              borderRadius: '25%',
            }}
            // width='300'
            // height='350'
            // padding-right='-15'
            />
        </div>

        <div className="typewriter">
          <TypeWriterEffect
            textStyle={{
              fontFamily: 'monospace',
              fontWeight: 'bold',
              fontSize: '1.4em',
              textAlign: 'center',
              color: '#4DA537',
              textShadow: '2px 2px 2px  #FF5900',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '-55px',
            }}
            cursorColor="#ff5900"
            multiText={[
              'for those who', 
              'thrive in spontaneity',
              'is your way',
              'to continue the night',
            ]}
            typeSpeed={70}
            startDelay={0.1}
            nextTextDelay={0.1}
            loop={true}
          />
        </div>

        <br></br>

        {/* --- NAVIGATES TO USER PAGE ---- */}
        <div className="button-container">
          <button type="button" 
                  className="landingButton" 
                  onClick={handleEntry} 
                >
            <span className="text">ENTER</span>
          </button>

        </div>
          
      </div>
    </div>
  );
};

export default LandingPage;
