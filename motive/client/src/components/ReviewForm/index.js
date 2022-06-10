import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './review.css';
import httpClient from '../../pages/httpClient';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import TypeWriterEffect from 'react-typewriter-effect';



export const ReviewForm = () => {
    const { name } = useParams();
    const [review, setReview] = useState('');
    const username = useSelector(((state) => state.username));
    const [venueType, setVenueType] = useState('');
    const [review_description, setReview_description] = useState('');
    const [usernamePulled, setUsernamePulled] = useState('guest')

    const navigate = useNavigate()

    useEffect(() => {
        async function searchApi() {
          try {
            const result = await axios.get(
            `https://the-motive-one.herokuapp.com/username`
            );
            console.log(result)
            setUsernamePulled(result.data.username);
            
          } catch (err) {
            console.error(err);
          }
        }
        searchApi();
      }, []);

      const handleSubmit = () => {
        navigate('/motive')
      }
    
    const postReview = async () => {
        console.log(username, name, venueType, review_description);

        const resp = await httpClient.post(
            'https://the-motive-one.herokuapp.com/review',
            {
              username: usernamePulled ,
              restaurant_name: name,
              type_of_food: venueType,
              review_description: review_description
            }
          )
          }
    return (

    <div className='main-container'>

        <div className="review-content-container">

              
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
                            cursorColor='#da3422'
                            text="Help others decide the motive!"
                            typeSpeed={70}
                            startDelay={0.1}
                            loop={true}
                        
                        />
                </div>
               
                <br></br>

                <div className='review-form-container'>

                  <form className="review-form" >
                      <h1 className="header-text" > Hi {usernamePulled}! </h1>
                      <h2 className="lower-text">You are reviewing {name} </h2>
                      <input className="review-input" placeholder="Enter review here" required="" cols="30" />
                      <button className="reviewButton" onClick={handleSubmit}>Submit</button>
                  </form>

                </div>
        </div>
    </div>
    )
}
 