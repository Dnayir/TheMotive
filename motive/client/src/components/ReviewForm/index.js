import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './review.css';
import httpClient from '../../pages/httpClient';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';



export const ReviewForm = () => {
    const [review, setReview] = useState('');
    const username = useSelector(((state) => state.username));
    const [venueName, setVenueName] = useState('');
    const [venueType, setVenueType] = useState('');
    const [review_description, setReview_description] = useState('');
    const [usernamePulled, setUsernamePulled] = useState('')

    const navigate = useNavigate()

    useEffect(() => {
        async function searchApi() {
          try {
            const result = await axios.get(
            `https://the-motive-one.herokuapp.com/username`
            );
            console.log(result)
            setUsernamePulled(result);
            
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
        console.log(username, venueName, venueType, review_description);

        const resp = await httpClient.post(
            'https://the-motive-one.herokuapp.com/review',
            {
              username: usernamePulled ,
              restaurant_name: venueName,
              type_of_food: venueType,
              review_description: review_description
            }
          )
          }
    return (

    <div>
        <section class="content">
                <div class="feedback-description">
                    <h1 class="title">Leave a review!</h1>
                    <p class="subtitle">Help others decide the motive!</p>
                </div>
            <form class="feedback-form" >
                <h1 class="blacktext" > Hi {usernamePulled} </h1>
                {/* <h1 class="blacktext" value={username}> Hi {username} </h1> */}
                <h2 class="blacktext" value='venueName'>You are reviewing KHARI CHANGE </h2>
                <input class="feedback-form__email" placeholder="What did you have?" required=""  />
                    <textarea class="feedback-form__message" placeholder="Leave your review" cols="30" name="review_description" rows="5">
                    </textarea>
                    <button class="feedback-form__submit" onClick={handleSubmit}>Submit</button>
            </form>
        </section>
    </div>
    )
}
 