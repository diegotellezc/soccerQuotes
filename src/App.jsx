import { useState } from 'react'
import './App.css'
import ContainerInfo from './components/ContainerInfo'
import db from "./db/db.json"

const backgrounds = ["bg1", "bg2", "bg3", "bg4"]
const players = ["1", "2", "3", "4"]


function App() {
  
  const getRandomItem = (listItems) => {
    const randomIndex = Math.floor(Math.random() * listItems.length)
    return listItems[randomIndex]
  }

  const [quote, setQuote] = useState(getRandomItem(db))
  const [player, setPlayer] = useState(getRandomItem(players))
  const [bgImage, setBgImage] = useState(getRandomItem(backgrounds))

  const CreateNewQuote = () => {
      setQuote(getRandomItem(db))
      setBgImage(getRandomItem(backgrounds))
      setPlayer(getRandomItem(players))
  }


  return (
    <div className={`App ${bgImage}`}>
      
      <ContainerInfo quote={quote} player={player} CreateNewQuote={CreateNewQuote}/>


    </div>
  )
}

export default App
