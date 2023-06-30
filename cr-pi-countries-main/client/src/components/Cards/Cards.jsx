import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getCountries } from '../../redux/actions'
import Card from '../Card/card'

const Cards = () => {
const dispatch = useDispatch()
const allCountries = useSelector(state => state.countries)

useEffect(()=>{
dispatch(getCountries())
}, [])

return (
  <div>
    {allCountries.map(individualCountry => (
      <Card key={individualCountry.id}
      id= {individualCountry.id}
      name= {individualCountry.name}
      imgFlag= {individualCountry.imgFlag}
      continent={individualCountry.continent}
      // activities={individualCountry.Activities}
      />
      ))}
  </div>
  )
}

export default Cards