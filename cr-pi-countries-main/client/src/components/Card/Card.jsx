import React from 'react'
import {Link} from 'react-router-dom'

function Card({id, name, imgFlag, continent}) {
  return (
    <div>
        <div>
            <h1>{name}</h1>
        </div>
        <div>
            <img src={imgFlag} alt="" />
        </div>
        <div>
            <h3>{continent}</h3>
        </div>
        {/* <div>
            {activities.length && activities.map(activity => (<h4 key={activity.id}>{activity}</h4>))}
        </div> */}
        <div>
            <Link to={`/countries/${id}`}>
                More Details
            </Link>
        </div>
    </div>
  )
}

export default Card