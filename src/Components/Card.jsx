import React from 'react';
import './Card.css'

function Card(props) {
    return (
        <div className = 'Card'>
            <div className ='upper-area'>
                <img className = 'pic' src={props.img} alt = 'pic'/>
                <h3 classname = 'userName'>{props.userName}</h3> 
            </div>
            <div className = "lower-area">
            <p className = 'description'>{props.description}</p>
            <div className = "buttons"> 
            <button className = "message">Message</button>
            <button className = "follow">Follow</button>
            </div>
            </div>
            </div>
        
    )
}




export default Card;
