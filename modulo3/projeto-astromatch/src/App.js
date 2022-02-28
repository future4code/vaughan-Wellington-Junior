import React, { useState, useEffect }from 'react';
import axios from 'axios';
import './App.css';
import Home from './components/Home/Home';
import Matches from './components/Matches/Matches'


function App() {

  const [ matchProfile, setMatchProfile] = useState([])

  const [matchList, setMatchList] = useState([])

  const [ screen, setScreen ] = useState("Home")

  useEffect(() => {
    catchProfile()
  },[])

  const catchProfile = () => {
    axios
    .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/wellington-vaughan/person`)
    .then((res) => setMatchProfile(res.data.profile))
    .catch((err) => console.log(err.response))
  }

  const choosePerson = (MatchId) => {
    const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/wellington-vaughan/choose-person`
    const body = {
      id: MatchId,
      choice: true
    }
    axios.post(url, body)
    .then(() => alert("That is a Match!"), catchProfile())
    .catch((err) => console.log(err.response))
  }

  const getMatches = () => {
    axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/wellington-vaughan/matches`)
    .then((res) => setMatchList(res.data.matches))
    .catch((err) => console.log(err.response))
  }

  const clearMatches = () => {
    axios.put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/wellington-vaughan/clear`)
    .then((res) => setMatchList(res), alert("Matches e swipes limpados") )
    .catch((err) => console.log(err.response))
  }
  function changeScreen(){
    switch (screen) {
      case "Home":
        return <Home 
        matchProfile={matchProfile}
        catchProfile={catchProfile} 
        choosePerson={choosePerson}
        goToMatches={goToMatches}
        />
      case "Matches":
        return <Matches
        matchList={matchList}
        getMatches={getMatches}
        clearMatches={clearMatches}
        goToHome={goToHome}
        />
      default:
        break;
    }
  }

  const goToHome = (event) => {
      setScreen("Home")
  }

  const goToMatches = (event) => {
    setScreen("Matches")
  }

  return (
    <div className='App'>       
        {changeScreen(screen)}
    </div>
  );
}

export default App;
