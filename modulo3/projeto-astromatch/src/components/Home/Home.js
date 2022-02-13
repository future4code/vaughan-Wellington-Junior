import React from "react";
import './Home.css'

function Home (props) {

    return(
        <div>
            <div className="home-header">
                <div className="home-text">
                    <h2>LabeMatch</h2>  
                </div>
                <button onClick={props.goToMatches}> <h2>+</h2></button>
            </div>
            
            <div className="body" key={props.matchProfile.id}>
                <img src={props.matchProfile.photo} alt={props.matchProfile.name}/>
                <div className="match-text">
                    <div className="header-info">
                        <p className="name">{props.matchProfile.name}</p> <p className="age">, {props.matchProfile.age}</p> 
                    </div>                
                    <p className="bio">{props.matchProfile.bio}</p>
                </div>                
            </div>

            <div className='buttoms'>
                <button className="no-button" onClick={props.catchProfile}>⨯</button>
                <button className="yes-button" onClick={() => props.choosePerson(props.matchProfile.id)}>✓</button>
             </div>

        </div>
    )
}

export default Home