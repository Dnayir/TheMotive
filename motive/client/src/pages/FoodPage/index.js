import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import '../../pages/MotivePage/motive.css';
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
        alert(data.get("category")  )
        dispatch(setFoodCategory(data.get("category")));
        navigate('/venues');
    }

   

  
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
                    <form onSubmit={handleCategory}>
                        <select name="category">
                            <option value='African'>African</option>
                            <option value='American'>American</option>
                        </select>
                        <input type="submit" value="Select"/>
                    </form>
{/* <Dropdown.Item as='button' value=Arepa> Arepa </Dropdown.Item>
<Dropdown.Item as='button' value=Argentinian> Argentinian </Dropdown.Item>
<Dropdown.Item as='button' value=Armenian> Armenian </Dropdown.Item>
<Dropdown.Item as='button' value=Asian> Asian </Dropdown.Item>
<Dropdown.Item as='button' value=Australian> Australian </Dropdown.Item>
<Dropdown.Item as='button' value=Austrian> Austrian </Dropdown.Item>
<Dropdown.Item as='button' value=Bangladeshi> Bangladeshi </Dropdown.Item>
<Dropdown.Item as='button' value=Belarusian> Belarusian </Dropdown.Item>
<Dropdown.Item as='button' value=Belgian> Belgian </Dropdown.Item>
<Dropdown.Item as='button' value=Bosnian> Bosnian </Dropdown.Item>
<Dropdown.Item as='button' value=Brazilian> Brazilian </Dropdown.Item>
<Dropdown.Item as='button' value=Bulgarian> Bulgarian </Dropdown.Item>
<Dropdown.Item as='button' value=Burmese> Burmese </Dropdown.Item>
<Dropdown.Item as='button' value=Cajun> Cajun </Dropdown.Item>
<Dropdown.Item as='button' value=Cambodian> Cambodian </Dropdown.Item>
<Dropdown.Item as='button' value=Caribbean> Caribbean </Dropdown.Item>
<Dropdown.Item as='button' value=Caucasian> Caucasian </Dropdown.Item>
<Dropdown.Item as='button' value=Chinese> Chinese </Dropdown.Item>
<Dropdown.Item as='button' value=Colombian> Colombian </Dropdown.Item>
<Dropdown.Item as='button' value=Cuban> Cuban </Dropdown.Item>
<Dropdown.Item as='button' value=Czech> Czech </Dropdown.Item>
<Dropdown.Item as='button' value=Dumpling> Dumpling </Dropdown.Item>
<Dropdown.Item as='button' value=Dutch> Dutch </Dropdown.Item>
<Dropdown.Item as='button' value=Eastern European> Eastern European </Dropdown.Item>
<Dropdown.Item as='button' value=Egyptian> Egyptian </Dropdown.Item>
<Dropdown.Item as='button' value=Empanada> Empanada </Dropdown.Item>
<Dropdown.Item as='button' value=English> English </Dropdown.Item>
<Dropdown.Item as='button' value=Ethiopian> Ethiopian </Dropdown.Item>
<Dropdown.Item as='button' value=Falafel> Falafel </Dropdown.Item>
<Dropdown.Item as='button' value=Fast Food> Fast Food </Dropdown.Item>
<Dropdown.Item as='button' value=Filipino> Filipino </Dropdown.Item>
<Dropdown.Item as='button' value=French> French </Dropdown.Item>
<Dropdown.Item as='button' value=German> German </Dropdown.Item>
<Dropdown.Item as='button' value=Greek> Greek </Dropdown.Item>
<Dropdown.Item as='button' value=Halal> Halal </Dropdown.Item>
<Dropdown.Item as='button' value=Hawaiian> Hawaiian </Dropdown.Item>
<Dropdown.Item as='button' value=Himalayan> Himalayan </Dropdown.Item>
<Dropdown.Item as='button' value=Honduran> Honduran </Dropdown.Item>
<Dropdown.Item as='button' value=Hotpot> Hotpot </Dropdown.Item>
<Dropdown.Item as='button' value=Hungarian> Hungarian </Dropdown.Item>
<Dropdown.Item as='button' value=Indian> Indian </Dropdown.Item>
<Dropdown.Item as='button' value=Indonesian> Indonesian </Dropdown.Item>
<Dropdown.Item as='button' value=Iraqi> Iraqi </Dropdown.Item>
<Dropdown.Item as='button' value=Israeli> Israeli </Dropdown.Item>
<Dropdown.Item as='button' value=Japanese> Japanese </Dropdown.Item>
<Dropdown.Item as='button' value=Italian> Italian </Dropdown.Item>
<Dropdown.Item as='button' value=Jewish> Jewish </Dropdown.Item>
<Dropdown.Item as='button' value=Kebab> Kebab </Dropdown.Item>
<Dropdown.Item as='button' value=Korean> Korean </Dropdown.Item>
<Dropdown.Item as='button' value=Kurdish> Kurdish </Dropdown.Item>
<Dropdown.Item as='button' value=Latin American> Latin American </Dropdown.Item>
<Dropdown.Item as='button' value=Lebanese> Lebanese </Dropdown.Item>
<Dropdown.Item as='button' value=Malay> Malay </Dropdown.Item>
<Dropdown.Item as='button' value=Mauritian> Mauritian </Dropdown.Item>
<Dropdown.Item as='button' value=Mediterranean> Mediterranean </Dropdown.Item>
<Dropdown.Item as='button' value=Mexican> Mexican </Dropdown.Item>
<Dropdown.Item as='button' value=Middle Eastern> Middle Eastern </Dropdown.Item>
<Dropdown.Item as='button' value=Modern European> Modern European </Dropdown.Item>
<Dropdown.Item as='button' value=Molecular Gastronomy> Molecular Gastronomy </Dropdown.Item>
<Dropdown.Item as='button' value=Mongolian> Mongolian </Dropdown.Item>
<Dropdown.Item as='button' value=Moroccan> Moroccan </Dropdown.Item>
<Dropdown.Item as='button' value=New American> New American </Dropdown.Item>
<Dropdown.Item as='button' value=Noodle> Noodle </Dropdown.Item>
<Dropdown.Item as='button' value=Pakistani> Pakistani </Dropdown.Item>
<Dropdown.Item as='button' value=Persian> Persian </Dropdown.Item>
<Dropdown.Item as='button' value=Peruvian> Peruvian </Dropdown.Item>
<Dropdown.Item as='button' value=Polish> Polish </Dropdown.Item>
<Dropdown.Item as='button' value=Portuguese> Portuguese </Dropdown.Item>
<Dropdown.Item as='button' value=Poutine> Poutine </Dropdown.Item>
<Dropdown.Item as='button' value=Puerto Rican> Puerto Rican </Dropdown.Item>
<Dropdown.Item as='button' value=Romanian> Romanian </Dropdown.Item>
<Dropdown.Item as='button' value=Russian> Russian </Dropdown.Item>
<Dropdown.Item as='button' value=Salad> Salad </Dropdown.Item>
<Dropdown.Item as='button' value=Salvadoran> Salvadoran </Dropdown.Item>
<Dropdown.Item as='button' value=Sandwich> Sandwich </Dropdown.Item>
<Dropdown.Item as='button' value=Satay> Satay </Dropdown.Item>
<Dropdown.Item as='button' value=Scandinavian> Scandinavian </Dropdown.Item>
<Dropdown.Item as='button' value=Scottish> Scottish </Dropdown.Item>
<Dropdown.Item as='button' value=Seafood> Seafood </Dropdown.Item>
<Dropdown.Item as='button' value=Shawarma> Shawarma </Dropdown.Item>
<Dropdown.Item as='button' value=Singaporean> Singaporean </Dropdown.Item>
<Dropdown.Item as='button' value=Slovak> Slovak </Dropdown.Item>
<Dropdown.Item as='button' value=Soup> Soup </Dropdown.Item>
<Dropdown.Item as='button' value=South American> South American </Dropdown.Item>
<Dropdown.Item as='button' value=Southern> Southern </Dropdown.Item>
<Dropdown.Item as='button' value=Spanish> Spanish </Dropdown.Item>
<Dropdown.Item as='button' value=Sri Lankan> Sri Lankan </Dropdown.Item>
<Dropdown.Item as='button' value=Swiss> Swiss </Dropdown.Item>
<Dropdown.Item as='button' value=Syrian> Syrian </Dropdown.Item>
<Dropdown.Item as='button' value=Tatar> Tatar </Dropdown.Item>
<Dropdown.Item as='button' value=Thai> Thai </Dropdown.Item>
<Dropdown.Item as='button' value=Tibetan> Tibetan </Dropdown.Item>
<Dropdown.Item as='button' value=Turkish> Turkish </Dropdown.Item>
<Dropdown.Item as='button' value=Ukrainian> Ukrainian </Dropdown.Item>
<Dropdown.Item as='button' value=Vegan and Vegetarian> Vegan and Vegetarian </Dropdown.Item>
<Dropdown.Item as='button' value=Venezuelan> Venezuelan </Dropdown.Item>
<Dropdown.Item as='button' value=Vietnamese> Vietnamese </Dropdown.Item>
<Dropdown.Item as='button' value=Yemeni> Yemeni </Dropdown.Item>
<Dropdown.Item as='button' value=all> all </Dropdown.Item> */}
                </div>
            
            
        </div>
    )

}


export default FoodPage;
