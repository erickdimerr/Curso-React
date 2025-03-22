import React from 'react'
import './Game.css'

<<<<<<< HEAD
const Game = ({verifyLetter}) => {
  return (
    <div>
      <h1>Game</h1>
      <button onClick={verifyLetter}>Finalizar jogo</button>
=======
const Game = ({verifyLetter, pickedWord, pickedCategory, letters, guessesLetters, wrongLetters,guesses, score}) => {
  return (
    <div className='game'>
        <p className='points'>
          <span>Pontuação: {score}</span>
        </p>
        <h1>Adivinhe a palavra:</h1>
        <h3 className='tip'>
          Dica sobre a palavra: <span>{pickedCategory}</span>
        </h3>
        <p>Você ainda tem {guesses} tentativas</p>
        <div className='wordContainer'>
          <span className='letter'>A</span>
          <span className='blankSquare'></span>
        </div>
        <div className='letterContainer'>
          <p>Tente adivinhar uma letra da palavra</p>
          <form>
            <input type="text" name="letter" maxLenght="1" required />
            <button>Jogar</button>
          </form>
        </div>
        <div className='wrongLettersContainer'>
          <p>Letras já utilziadas: </p>
          <span>a,</span>
          <span>b,</span>
        </div>
>>>>>>> f8c7d1e (atualização)
    </div>
  )
}

export default Game