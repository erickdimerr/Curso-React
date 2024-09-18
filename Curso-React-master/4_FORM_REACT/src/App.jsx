import './App.css'
import MyForm from './assets/components/MyForm'

function App() {

  return (
    <>
      <div>
        <h2>Forms</h2>
        <MyForm user={{name: 'Josias', email:'josiaS@gmail.com', bio:'Sou do TI', role:'editor'}}/>
      </div>
    </>
  )
}

export default App
