import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Landing from './page/landing.jsx';
import CarsCsl from './page/CSL.jsx';
import ErrorPage from './routes/errorPage.jsx';
import M1Cars from './page/M1Cars.jsx';
import M3E30Car from './page/M3E30Car.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    errorElement: <ErrorPage />,
    children:[
      {
        path:"csl/",
        element: <CarsCsl/>
      },
      {
        path:"m1/",
        element: <M1Cars/>
      },
      {
        path:"m3/",
        element: <M3E30Car/>
      },
      {
        path:"contact/",
        element: <CarsCsl/>
      },
      {
        path:"infos/",
        element: <CarsCsl/>
      }
    ]
  },
  {

  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
