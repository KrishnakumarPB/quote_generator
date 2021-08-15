import "./style.css"
import React from 'react'
function Quote(props){
    return(

        <div className="card">
            <img src={props.imgurl} alt="img"></img> 
            <div className="quote">
                <p> {props.quote}</p>
            </div>
            <div className="quoter">
            <p>{props.quoter}</p>
            </div>
        </div>
   
    )
}
export default Quote