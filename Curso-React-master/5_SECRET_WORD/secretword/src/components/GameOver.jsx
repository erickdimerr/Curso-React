import React from 'react'
import './GameOver.css'

const GameOver = ({retry}) => {
  return (
    <div>
      <h2>Fim de jogo</h2>
      <button onClick={retry}>Resetar jogo</button>
    </div>
  )
}

export default GameOver