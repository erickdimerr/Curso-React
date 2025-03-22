import './App.css'
import CarDetails from './components/carDetails'


function App() {

  const cars = [
    { id: 1, brand: 'vw', age: 2018 },
    { id: 2, brand: 'porsche', age: 2022 },
    { id: 3, brand: 'fiat', age: 2005 },
  ]

  return (
    <>
      <div>
          <h1>Carros: </h1>
          {cars.map((car) => (
            <CarDetails key={car.id} brand={car.brand} age={car.age}/>
          ))}
      </div>
    </>
  )
}

export default App
