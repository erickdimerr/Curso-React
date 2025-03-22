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

  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)

  const [pickedWord, setPickedWord] = useState('')
  const [pickedCategory, setPickedCategory] = useState('')
  const [letters, setLetters] = useState([])

<<<<<<< HEAD
=======
  const [guessesLetters, setGuessesLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(3);
  const [score, setScore] = useState(0);

  console.log(words);

  const pickWordAndCategory = useCallback(() => {
    // pick a random category
    const categories = Object.keys(words);
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];

    // pick a random word
    const word =
      words[category][Math.floor(Math.random() * words[category].length)];

    console.log(category, word);

    return { category, word };
  }, [words]);


>>>>>>> f8c7d1e (atualização)
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
<<<<<<< HEAD
          {gameStage === 'game' && <Game verifyLetter={verifyLetter} />}
=======
          {gameStage === 'game' && 
            <Game 
              verifyLetter={verifyLetter} 
              pickedWord={pickedWord} 
              pickedCategory={pickedCategory}
              letters={letters}
              guessesLetters={guessesLetters}
              guesses={guesses}
              score={score}
            />
          }
>>>>>>> f8c7d1e (atualização)
          {gameStage === 'end' && <GameOver retry={retry}/>}
      </div>
    </>
  )
}

export default App
