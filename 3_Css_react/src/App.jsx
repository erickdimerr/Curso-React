import './App.css'
import MyComponent from './components/MyComponent'

function App() {

  const redTitle = false

  return (
    <>
      <div>
        {/* CSS Gloval */}
        <h1>React CSS</h1>
        {/*Css de componente */}
        <MyComponent />
        {/* Classe dinamica */}
        <h2 className={redTitle ? "red-title" : "title"}>Este titulo vai ter  classe dinamica</h2>
      </div>
    </>
  )
}

export default App
