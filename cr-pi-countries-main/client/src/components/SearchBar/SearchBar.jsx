import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { getCountriesByName } from '../../redux/actions';
import styles from '../SearchBar/SearchBar.module.css'

export default function SearchBar() {
    
    const dispatch = useDispatch();
    const [country, setCountry] = useState('');

    function handleSubmit (event){
        event.preventDefault();
        if (country.length > 0){dispatch(getCountriesByName(country))
        setCountry('');
        event.target.reset();}
        else{
            alert('Write a country name')
        }
    }

    function handleSearch(event){
        event.preventDefault();
        setCountry(event.target.value)
    }

  return (
    <div>
        <form onSubmit={(event)=>handleSubmit(event)} className={styles.search_country}>
            <input type="text" placeholder='Search a country' onChange={(event)=> handleSearch(event)}/>
            <button type='submit'>🔍 </button>
        </form>
    </div>
  )
}
