import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './food.css';
import { NavBar } from '../../components';
import { setFoodCategory } from '../../actions';

import TypeWriterEffect from 'react-typewriter-effect';
import { Dropdown, DropdownButton } from 'react-bootstrap';


const FoodPage = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    function handleCategory(e) {
        e.preventDefault();
        // NEED TO SPECIFY IT IS A BAR CATEGORY
        const data = new FormData(e.currentTarget)
        // alert(data.get("category")  )
        dispatch(setFoodCategory(data.get("category")));
        navigate('/venues');
    }
  
    return (
        <div className='main-container'>
       
                <NavBar />
                <div className='typewriter'>
                    <TypeWriterEffect 
                        textStyle={{
                            color: '#4DA537',
                            textShadow: '2px 2px 2px  #FF5900',
                            fontFamily: 'monospace',
                            fontWeight: 'bold',
                            fontSize: '3.7em',
                            textAlign: 'center',
                            lineHeight: '1.3',

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

                    <form onSubmit={handleCategory} >

                        <select name="category" >
                            <option value='African'>African</option>
                            <option value='American'>American</option>
                            <option value='Afghan'>Afghan</option>
                            <option value='African'>African</option>
                            <option value='American'>American</option>
                            <option value='Arepa'>Arepa</option>
                            <option value='Argentinian'>Argentinian</option>
                            <option value='Armenian'>Armenian</option>
                            <option value='Asian'>Asian</option>
                            <option value='Australian'>Australian</option>
                            <option value='Austrian'>Austrian</option>
                            <option value='Bangladeshi'>Bangladeshi</option>
                            <option value='Belarusian'>Belarusian</option>
                            <option value='Belgian'>Belgian</option>
                            <option value='Bosnian'>Bosnian</option>
                            <option value='Brazilian'>Brazilian</option>
                            <option value='Bulgarian'>Bulgarian</option>
                            <option value='Burmese'>Burmese</option>
                            <option value='Cajun'>Cajun</option>
                            <option value='Cambodian'>Cambodian</option>
                            <option value='Caribbean'>Caribbean</option>
                            <option value='Caucasian'>Caucasian</option>
                            <option value='Chinese'>Chinese</option>
                            <option value='Colombian'>Colombian</option>
                            <option value='Cuban'>Cuban</option>
                            <option value='Czech'>Czech</option>
                            <option value='Dumpling'>Dumpling</option>
                            <option value='Dutch'>Dutch</option>
                            <option value='Eastern European'>Eastern European</option>
                            <option value='Egyptian'>Egyptian</option>
                            <option value='Empanada'>Empanada</option>
                            <option value='English'>English</option>
                            <option value='Ethiopian'>Ethiopian</option>
                            <option value='Falafel'>Falafel</option>
                            <option value='Fast Food'>Fast Food</option>
                            <option value='Filipino'>Filipino</option>
                            <option value='French'>French</option>
                            <option value='German'>German</option>
                            <option value='Greek'>Greek</option>
                            <option value='Halal'>Halal</option>
                            <option value='Hawaiian'>Hawaiian</option>
                            <option value='Himalayan'>Himalayan</option>
                            <option value='Honduran'>Honduran</option>
                            <option value='Hotpot'>Hotpot</option>
                            <option value='Hungarian'>Hungarian</option>
                            <option value='Indian'>Indian</option>
                            <option value='Indonesian'>Indonesian</option>
                            <option value='Iraqi'>Iraqi</option>
                            <option value='Israeli'>Israeli</option>
                            <option value='Japanese'>Japanese</option>
                            <option value='Italian'>Italian</option>
                            <option value='Jewish'>Jewish</option>
                            <option value='Kebab'>Kebab</option>
                            <option value='Korean'>Korean</option>
                            <option value='Kurdish'>Kurdish</option>
                            <option value='Latin American'>Latin American</option>
                            <option value='Lebanese'>Lebanese</option>
                            <option value='Malay'>Malay</option>
                            <option value='Mauritian'>Mauritian</option>
                            <option value='Mediterranean'>Mediterranean</option>
                            <option value='Mexican'>Mexican</option>
                            <option value='Middle Eastern'>Middle Eastern</option>
                            <option value='Modern European'>Modern European</option>
                            <option value='Molecular Gastronomy'>Molecular Gastronomy</option>
                            <option value='Mongolian'>Mongolian</option>
                            <option value='Moroccan'>Moroccan</option>
                            <option value='New American'>New American</option>
                            <option value='Noodle'>Noodle</option>
                            <option value='Pakistani'>Pakistani</option>
                            <option value='Persian'>Persian</option>
                            <option value='Peruvian'>Peruvian</option>
                            <option value='Polish'>Polish</option>
                            <option value='Portuguese'>Portuguese</option>
                            <option value='Poutine'>Poutine</option>
                            <option value='Puerto Rican'>Puerto Rican</option>
                            <option value='Romanian'>Romanian</option>
                            <option value='Russian'>Russian</option>
                            <option value='Salad'>Salad</option>
                            <option value='Salvadoran'>Salvadoran</option>
                            <option value='Sandwich'>Sandwich</option>
                            <option value='Satay'>Satay</option>
                            <option value='Scandinavian'>Scandinavian</option>
                            <option value='Scottish'>Scottish</option>
                            <option value='Seafood'>Seafood</option>
                            <option value='Shawarma'>Shawarma</option>
                            <option value='Singaporean'>Singaporean</option>
                            <option value='Slovak'>Slovak</option>
                            <option value='Soup'>Soup</option>
                            <option value='South American'>South American</option>
                            <option value='Southern'>Southern</option>
                            <option value='Spanish'>Spanish</option>
                            <option value='Sri Lankan'>Sri Lankan</option>
                            <option value='Swiss'>Swiss</option>
                            <option value='Syrian'>Syrian</option>
                            <option value='Tatar'>Tatar</option>
                            <option value='Thai'>Thai</option>
                            <option value='Tibetan'>Tibetan</option>
                            <option value='Turkish'>Turkish</option>
                            <option value='Ukrainian'>Ukrainian</option>
                            <option value='Vegan and Vegetarian'>Vegan and Vegetarian</option>
                            <option value='Venezuelan'>Venezuelan</option>
                            <option value='Vietnamese'>Vietnamese</option>
                            <option value='Yemeni'>Yemeni</option>
                            <option value='all'>all</option>

                        </select>
                        <span className='button-container'>
                            <input type="submit" value="Select Cuisine" />
                        </span>
                    </form>

                </div>
            
            
        </div>
    )

}


export default FoodPage;
