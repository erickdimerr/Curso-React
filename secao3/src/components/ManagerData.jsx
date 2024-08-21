import {useState} from 'react'

const ManagerData = () => {

    let someData = 10;

    // eslint-disable-next-line no-unused-vars
    const [number, setNumber] = useState(40);

  return (
    <div>
        <div>
            <p>{someData}</p>
            <button onClick={() => (someData = 22)}>Mudar valor</button>
        </div>
        <div>
            <p>valor: {number}</p>
            <button onClick={() => setNumber(44)}>Mudar set</button>
        </div>
    </div>
  )
}

export default ManagerData