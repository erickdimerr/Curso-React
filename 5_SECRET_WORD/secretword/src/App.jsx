import './App.css'
import { useCallback, useEffect, useState } from "react";
import StartScrenn from './components/StartScreen'
import { wordsList } from "./data/words";
import Game from './components/Game';
import GameOver from './components/GameOver';


const stages = [
  {id:1, name:'start'}, 
  {id:2, name:'game'}, 
  {id:3, name:'end'}, 
]

function App() {

  const [gameStage, setStage] = useState(stages[0].name)

  return (
    <>
      <div className='App'>
          {gameStage === 'start' && <StartScrenn/>}
          {gameStage === 'game' && <Game/>}
          {gameStage === 'end' && <GameOver/>}
      </div>
    </>
  )
}

export default App
