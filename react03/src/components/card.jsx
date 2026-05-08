import React from 'react'
import {Bookmark} from 'lucide-react'

const Card = (props) => {
  return (
    <div>
      <div className="card">
        <div className="top">
          <img src= {props.immg} alt="" />
          <button>Save <Bookmark /></button>
        </div>
        <div className="center">
          <h3>{props.company} <span>{props.time}</span></h3>
          <h2>{props.post}</h2>
          <div>
          <h4>{props.jobtype}</h4>
          <h4>{props.level}</h4>
          </div>
        </div>
        <div className="bottom">
          <div>
            <h3>{props.pay}</h3>
            <p>{props.place}</p>
          </div>
          <button>apply now</button>
        </div>
      </div>
    </div>
  )
}

export default Card
