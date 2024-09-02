import { useState } from "react";


const ManagerData = () => {
    let someData = 10;

    const [number, setNumber] = useState(20)


  return (
    <div>
        <div>
            <p>Valor: {someData}</p>
            <button onClick={() => (someData = 15)}>Mudar variavel</button>
        </div>
        <div>
          <p>Valor: {number}</p>
          <button onClick={() => setNumber(50)}>Mudar o state</button>
        </div>
    </div>
  )
}

export default ManagerData