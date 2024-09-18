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
 //teste
function App() {

  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)

  const [pickedWord, setPickedWord] = useState('')
  const [pickedCategory, setPickedCategory] = useState('')
  const [letters, setLetters] = useState([])

  //Iniciar o jogo
  const startGame = () => {
    setGameStage(stages[1].name)
  }

  //Durante o jogo
  const verifyLetter = () => {
    setGameStage(stages[2].name)
  }

  //Restart
  const retry = () => {
    setGameStage(stages[0].name)
  }

  return (
    <>
      <div className='App'>
          {gameStage === 'start' && <StartScrenn startGame={startGame} />}
          {gameStage === 'game' && <Game verifyLetter={verifyLetter} />}
          {gameStage === 'end' && <GameOver retry={retry}/>}
      </div>
    </>
  )
}

export default App
