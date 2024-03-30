import { useEffect, useState } from "react";
import Country from "./Country";
import './Countries.css'
const Countries = () => {
    const [countries, setCountries] = useState([])
    const [favourites, setFavourte] = useState([])

    useEffect(()=> {
        fetch('https://restcountries.com/v3.1/all')
        .then((res)=> res.json())
        .then((data)=> setCountries(data))
    },[])

    const deleteCountry = id =>{
        const filtered = countries.filter((country)=> country.ccn3 !== id)
        setCountries(filtered)
    }

  
    const hundleFavourite = country =>{
      const newCountry = [...favourites, country]
      setFavourte(newCountry)
    }
    
    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            <h3>Favourite: {favourites.length} </h3>
            <h1>Favourite:</h1>
            {
                favourites && favourites.map((favourite)=><h3 key={favourite.cca3}>{favourite.name.common}</h3>)
            }
            <div className="container">
            {
                countries && countries.map((country)=> 
                <Country key={country.cca3} 
                country = {country} 
                deleteCountry = {deleteCountry}
                hundleFavourite = {hundleFavourite}
                />)
            }
        </div>
        </div>
    );
};

export default Countries;