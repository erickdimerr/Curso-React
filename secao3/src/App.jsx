import './App.css'
import ConditionalRender from './components/ConditionalRender'
import ListRender from './components/ListRender'
import ManagerData from './components/ManagerData'
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";
import Fragments from './components/Fragments';
import Container from './components/Container';



function App() {
  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarelo", km: 0 },
    { id: 2, brand: "KIA", color: "Branco", km: 200000 },
    { id: 3, brand: "Renault", color: "Azul", km: 32000 },
  ];

  function showMessage(){
    console.log("Evento do componente pai!")
  }

  return (
    <>
      <div>
        <h1>teste</h1>
      </div>
      <div>
        <ManagerData />
        <ListRender />
        <ConditionalRender />
        {/* props */}
        <ShowUserName name="Matheus" />
        {/* destructuring */}
        <CarDetails brand="Ford" color="Azul" km={10000} />
        {/* reaproveitamento */}
        <CarDetails brand="VW" color="Vermelho" km={535} />
        <CarDetails brand="Fiat" color="Branco" km={0} />
        {/* loop com array de obj */}
        {cars.map((car) => (
          <CarDetails
            key={car.id}
            brand={car.brand}
            color={car.color}
            km={car.km}
          />
        ))}
        {/* Fragment */}
        <Fragments propFragment="teste"/>
        {/* Children */}
        <Container myValue={50}>
          <p>E este é o conteudo</p>
        </Container>
      </div>
    </>
  )
}

export default App