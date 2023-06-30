import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getDetail } from '../../redux/actions'



function Detail() {
  const {id} = useParams()
  const dispatch = useDispatch()
  const countryDetail = useSelector(state => state.detail)

  useEffect(()=>{
    dispatch(getDetail(id))
    }, [dispatch, id])

  return (
    <div>
      <div>{countryDetail.id}</div>
      <div>{countryDetail.name}</div>
      <img src={countryDetail.imgFlag} alt="" />
      <div>{countryDetail.continent}</div>
      <div>{countryDetail.capital}</div>
      <div>{countryDetail.subregion && countryDetail.subregion}</div>
      <div>{countryDetail.area && countryDetail.area}</div>
      <div>{countryDetail.population}</div>
    </div>
  )
}

export default Detail