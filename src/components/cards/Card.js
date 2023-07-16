import React from 'react'
import "./card.css";



export default function Card(props) {
  return (
         <>
         
         <div className="card my-5 mx-5" >
         <img src={props.url} className="card-img-top" alt="imgs" />
         <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.intro}</p>
               <a href="/" className="btn btn-primary mx-2">Upcoming</a>
               <a href="/" className="btn btn-success mx-2">Previous</a>
            </div>
         </div>
                 
         
 </>
  )
}

