import React from 'react';
import introGif from '../../images/intro.gif';
import TypeWriterEffect from 'react-typewriter-effect';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  // -----> NAVIGATES TO LOGIN / SIGN UP TOGGLE FORM
  const handleEntry = (e) => {
    navigate('/user');
  };

  return (
    <div className="main-container">
      <div className="image-container">
        <img src={introGif} alt="Intro Gif" />
        <div className="typewriter">
          <TypeWriterEffect
            textStyle={{
              fontFamily: 'monospace',
              fontWeight: 500,
              fontSize: '1.5em',
              color: '#ff5900',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '5px',
            }}
            cursorColor="#ff5900"
            multiText={[
              'for those',
              'who thrive in spontaneity',
              'the.MOTIVE is your way',
              'to continue the night',
            ]}
            typeSpeed={100}
            startDelay={0.5}
            nextTextDelay={0.5}
            loop={true}
          />
        </div>

        <br></br>

        {/* --- NAVIGATES TO REGISTER/LOGIN PAGE ---- */}
        <div className="d-grid gap-2">
          <button type="button" className="enterButton" onClick={handleEntry}>
            <span class="text">ENTER</span>
          </button>

          {/* <Button className='enterButton' role='button' size='lg'>
                        ENTER
                    </Button> */}
        </div>
        <div>
          <a href="/Login">
            <button>Login</button>
          </a>
          <a href="/Register">
            <button>Register</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
