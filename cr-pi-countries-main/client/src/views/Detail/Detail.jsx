import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getDetail } from "../../redux/actions";

function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const countryDetail = useSelector((state) => state.detail);

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);


  return (
    <div>
      <button>
      <Link to = '/home'>HOME</Link>
      </button>
      <div>{countryDetail.id}</div>
      <div>{countryDetail.name}</div>
      <img src={countryDetail.imgFlag} alt="" />
      <div>{countryDetail.continent}</div>
      <div>{countryDetail.capital}</div>
      <div>{countryDetail.subregion && countryDetail.subregion}</div>
      <div>{countryDetail.area && countryDetail.area}</div>
      <div>{countryDetail.population}</div>
      <div>
        {" "}
        {countryDetail.Activities &&
          countryDetail.Activities.map((activity) => (
            <ul>
              <h4 key={countryDetail.id}>{activity.name}</h4>
              <div key={countryDetail.id}>Difficulty: {activity.difficulty}</div>
              <div key={countryDetail.id}>Duration: {activity.duration} </div>
              <div key={countryDetail.id}>Season: {activity.season}</div>
            </ul>
          ))}
      </div>
    </div>
  );
}

export default Detail;
