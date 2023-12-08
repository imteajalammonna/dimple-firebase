import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './Header'

function App() {
  

  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  )
}

export default App
