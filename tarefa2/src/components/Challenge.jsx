import React from 'react'

const Challenge = () => {
    const myEvents = (e) => {
        console.log(num1 + num2)
    }
    
    const num1 = 8
    const num2 = 2477
  return (
    
    <div>
        <h1>{num1} e {num2}</h1>
        <button onClick={myEvents}>Clique aqui para somar os numeros!</button>
    </div>
  )
}

export default Challenge