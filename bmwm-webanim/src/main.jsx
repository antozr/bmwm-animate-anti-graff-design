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


const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    errorElement: <ErrorPage />,
    children:[
      {
        path:"csl/",
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
