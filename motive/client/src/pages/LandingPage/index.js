import React from 'react';
import introGif from '../../images/intro.gif';
import TypeWriterEffect from 'react-typewriter-effect';
import { useNavigate } from 'react-router-dom';
import Image from 'react-bootstrap/Image';

const LandingPage = () => {
  const navigate = useNavigate();

  // -----> NAVIGATES TO LOGIN / SIGN UP TOGGLE FORM
  const handleEntry = (e) => {
    navigate('/user');
  };

  return (
    <div className="main-container">

      <div className="animation-container">
        <img fluid
          src={introGif}
          alt="Intro Gif"
          width='400' 
          height='500'
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
            alignSelf: 'center',
            marginRight: 'auto',
            
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
            fontSize: '2.1em',
            color: '#4DA537',
            textShadow: '2px 2px 2px  #FF5900',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '5px',
          }}
          cursorColor="#ff5900"
          multiText={[
            'for those who thrive in spontaneity',
            'is your way to continue the night',
          ]}
          typeSpeed={70}
          startDelay={0.1}
          nextTextDelay={0.1}
          loop={true}
        />
      </div>

      <br></br>

      {/* --- NAVIGATES TO USER PAGE ---- */}
      <div className="d-grid gap-2 button">
        <button type="button" className="enterButton" onClick={handleEntry}>
          <span class="text">ENTER</span>
        </button>

        {/* <Button className='enterButton' role='button' size='lg'>
                      ENTER
                  </Button> */}
      </div>
        
      
    </div>
  );
};

export default LandingPage;
