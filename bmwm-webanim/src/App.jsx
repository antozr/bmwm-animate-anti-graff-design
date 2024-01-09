

import { Outlet } from 'react-router-dom'
import './App.scss'
import Root from './routes/root'
import Landing from './page/landing'

function App() {


  return (
    <>
    {/* <Root /> */}
    <Landing/>
   <Outlet />
    </>
  )
}

export default App
