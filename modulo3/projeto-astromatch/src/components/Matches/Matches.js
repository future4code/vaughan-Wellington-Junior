import React, { useEffect } from "react";
import './Matches.css'

function Matches (props) {


    useEffect(()=>{
        props.getMatches()
    },[props.matchList])

    return(
        <div className="match-body">
            <div className="match-header">
                <button className="back-button" onClick={props.goToHome}> <h2>⮨</h2> </button>
                <button className="clear-button" onClick={props.clearMatches}>🗑</button>
                <div className="header-text">
                    <h2>LabeMatch</h2>  
                </div>             
            </div>
            
            <ul className="match-list">
             {props.matchList.map((ppl) => {
                return (
                <li className="list-item" key={ppl.id}>
                  <img src={ppl.photo} alt={ppl.name}/>  <p>{ppl.name}</p>     
                </li>
                )
            })}   
            </ul>
        </div>
    )
}

export default Matches