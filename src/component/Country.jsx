import { useState } from 'react';
import './Countries.css'
const Country = ({country, deleteCountry, hundleFavourite}) => {
  const {name,flags,capital,ccn3} = country;

  const [isVisited, setIsVisited] = useState(false)
  const hundleVisited = () =>{
    setIsVisited(!isVisited)
  }

    const language = []
    for ( let lan in country.languages){
       language.push(country.languages[lan])
   }

    return (
        <div className='country-card'>
            <h1>{name.common}</h1>
            <img src={flags.png} alt="" />
            <h2>{capital}</h2>
            <h2>language: {language.join(', ')}</h2>
            <button onClick={()=>deleteCountry(ccn3)}>Delete</button>
            <button onClick={hundleVisited} style={{background: isVisited && 'red'}}>
                {
                    isVisited ? 'visited' : 'visit'
                }
            </button>
            <button onClick={()=>hundleFavourite(country)}>Add favourite</button>
            <p>
                {
                    isVisited && 'I have visited this country'
                }
            </p>

        </div>
    );
};

export default Country;