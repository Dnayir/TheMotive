import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './review.css';
import httpClient from '../../pages/httpClient';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';



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

    <div>
        <section className="content">
                <div className="feedback-description">
                    <h1 className="title">Leave a review!</h1>
                    <p className="subtitle">Help others decide the motive!</p>
                </div>
            <form className="feedback-form" >
                <h1 className="blacktext" > Hi {usernamePulled} </h1>
                <h2 className="blacktext">You are reviewing {name} </h2>
                <input className="feedback-form__email" placeholder="What did you have?" required=""  />
                    <textarea className="feedback-form__message" placeholder="Leave your review" cols="30" name="review_description" rows="5">
                    </textarea>
                    <button className="feedback-form__submit" onClick={handleSubmit}>Submit</button>
            </form>
        </section>
    </div>
    )
}
 