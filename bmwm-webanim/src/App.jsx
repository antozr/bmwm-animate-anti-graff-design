

import { Outlet } from 'react-router-dom'
import './App.scss'
import Root from './routes/root'

function App() {


  return (
    <>
    <Root />
   <Outlet />
    </>
  )
}

export default App
