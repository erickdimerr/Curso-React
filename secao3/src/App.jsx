import './App.css'
import ConditionalRender from './components/ConditionalRender'
import ListRender from './components/ListRender'
import ManagerData from './components/ManagerData'

function App() {

  return (
    <>
      <div>
        <h1>teste</h1>
      </div>
      <div>
        <ManagerData/>
        <ListRender />
        <ConditionalRender />
      </div>
    </>
  )
}

export default App