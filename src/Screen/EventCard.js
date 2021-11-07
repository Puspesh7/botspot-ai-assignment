import React , {useEffect} from 'react'
import './EventCard.css'

function EventCard({id,date,user,description}) {
    return (
        <div className="singleEvent" key={id}>
            <h4>{date}</h4>
            <p>{user}</p>
            <p>{description}</p>
        </div>
    )
}

export default EventCard
